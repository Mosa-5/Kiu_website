import { render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ErrorBoundary from "./ErrorBoundary";

function ThrowError(): ReactNode {
  throw new Error("Test error");
}

describe("ErrorBoundary", () => {
  afterEach(() => vi.restoreAllMocks());

  it("shows the default recovery interface when a child throws", () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    );

    expect(screen.getByText("Something went wrong.")).toBeVisible();
    expect(screen.getByRole("button", { name: "Reload page" })).toBeVisible();
  });

  it("renders a supplied fallback instead of the default recovery interface", () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);

    render(
      <ErrorBoundary fallback={<p>Custom recovery</p>}>
        <ThrowError />
      </ErrorBoundary>,
    );

    expect(screen.getByText("Custom recovery")).toBeVisible();
    expect(screen.queryByText("Something went wrong.")).not.toBeInTheDocument();
  });
});
