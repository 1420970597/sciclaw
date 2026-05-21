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

import LoginPage from "@/app/login/page";

describe("LoginPage", () => {
  beforeEach(() => {
    redirectMock.mockReset();
    getCurrentUserMock.mockReset();
  });

  it("renders the login form for anonymous visitors", async () => {
    getCurrentUserMock.mockResolvedValue(null);

    render(await LoginPage());

    expect(screen.getByRole("heading", { name: /enter the private research shell/i })).toBeInTheDocument();
    expect(screen.getByTestId("login-form")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /back to landing/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("textbox", { name: /email/i })).toHaveAttribute("placeholder", "admin@sciclaw.local");
  });

  it("redirects authenticated users into the protected workspace", async () => {
    getCurrentUserMock.mockResolvedValue({ id: "user_1" });

    render(await LoginPage());

    expect(redirectMock).toHaveBeenCalledWith("/workspace");
  });
});
