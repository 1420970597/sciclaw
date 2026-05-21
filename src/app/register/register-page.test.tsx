import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const redirectMock = vi.fn();
const getCurrentUserMock = vi.fn();

vi.mock("next/navigation", () => ({
  redirect: (...args: unknown[]) => redirectMock(...args),
}));

vi.mock("@/lib/auth", () => ({
  getCurrentUser: (...args: unknown[]) => getCurrentUserMock(...args),
}));

import RegisterPage from "@/app/register/page";

describe("RegisterPage", () => {
  beforeEach(() => {
    redirectMock.mockReset();
    getCurrentUserMock.mockReset();
  });

  it("renders the registration form for anonymous visitors", async () => {
    getCurrentUserMock.mockResolvedValue(null);

    render(await RegisterPage());

    expect(screen.getByRole("heading", { name: /create a runnable replica account/i })).toBeInTheDocument();
    expect(screen.getByTestId("register-form")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /already have an account\?/i })).toHaveAttribute("href", "/login");
    expect(screen.getByRole("link", { name: /privacy policy/i })).toHaveAttribute("href", "/privacy");
  });

  it("redirects authenticated users into the protected workspace", async () => {
    getCurrentUserMock.mockResolvedValue({ id: "user_1" });

    render(await RegisterPage());

    expect(redirectMock).toHaveBeenCalledWith("/workspace");
  });
});
