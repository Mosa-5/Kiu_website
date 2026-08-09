import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import Chatbot from "./Chatbot";

vi.mock("@/hooks/hooksHeader/useHeaderTranslation", () => ({
  useHeaderTranslations: () => ({
    t: (key: string) =>
      ({
        "chatbot.title": "KIU Assistant",
        "chatbot.welcomeMessage": "Welcome to KIU!",
        "chatbot.thinking": "Thinking...",
        "chatbot.placeholder": "Ask a question",
      })[key] ?? key,
  }),
}));

describe("Chatbot", () => {
  afterEach(() => vi.restoreAllMocks());

  it("welcomes the visitor and sends a trimmed message", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ reply: "Applications are open." }),
    });
    vi.stubGlobal("fetch", fetchMock);

    render(<Chatbot />);
    await user.click(screen.getByRole("button", { name: "Open chatbot assistant" }));

    expect(await screen.findByText("Welcome to KIU!")).toBeVisible();

    const input = screen.getByPlaceholderText("Ask a question");
    await user.type(input, "  How do I apply?  ");
    fireEvent.keyDown(input, { key: "Enter" });

    expect(await screen.findByText("How do I apply?")).toBeVisible();
    expect(await screen.findByText("Applications are open.")).toBeVisible();
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    expect(fetchMock.mock.calls[0][1]).toMatchObject({ method: "POST" });
    expect(JSON.parse(fetchMock.mock.calls[0][1].body)).toEqual({ message: "How do I apply?" });
  });

  it("does not call the API for an empty message", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    render(<Chatbot />);
    await user.click(screen.getByRole("button", { name: "Open chatbot assistant" }));
    await user.click(screen.getByRole("button", { name: "Send chat message" }));

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("shows the API's rate-limit message when the visitor has used five messages", async () => {
    const user = userEvent.setup();
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: false,
      status: 429,
      json: async () => ({ error: "You've reached the limit of 5 messages. Please try again in 30 minutes." }),
    }));

    render(<Chatbot />);
    await user.click(screen.getByRole("button", { name: "Open chatbot assistant" }));
    const input = screen.getByPlaceholderText("Ask a question");
    await user.type(input, "How do I apply?");
    fireEvent.keyDown(input, { key: "Enter" });

    expect(await screen.findByText("You've reached the limit of 5 messages. Please try again in 30 minutes.")).toBeVisible();
  });
});
