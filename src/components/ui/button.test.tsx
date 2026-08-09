import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button, buttonVariants } from "./button";

describe("Button", () => {
  it("renders button content and forwards native attributes", () => {
    render(<Button disabled aria-label="Save changes">Save</Button>);

    expect(screen.getByRole("button", { name: "Save changes" })).toBeDisabled();
    expect(screen.getByText("Save")).toBeVisible();
  });

  it("provides distinct classes for supported variants", () => {
    expect(buttonVariants({ variant: "destructive" })).toContain("bg-destructive");
    expect(buttonVariants({ variant: "link" })).toContain("underline-offset-4");
  });
});
