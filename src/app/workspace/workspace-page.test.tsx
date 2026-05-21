import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const redirectMock = vi.fn();
const getCurrentUserMock = vi.fn();
const listProjectsMock = vi.fn();

vi.mock("next/navigation", () => ({
  redirect: (...args: unknown[]) => redirectMock(...args),
}));

vi.mock("@/lib/auth", () => ({
  getCurrentUser: (...args: unknown[]) => getCurrentUserMock(...args),
}));

vi.mock("@/lib/data-store", () => ({
  listProjects: (...args: unknown[]) => listProjectsMock(...args),
}));

vi.mock("@/app/auth-actions", () => ({
  logoutAction: vi.fn(),
}));

import WorkspacePage from "@/app/workspace/page";

describe("WorkspacePage", () => {
  beforeEach(() => {
    redirectMock.mockReset();
    getCurrentUserMock.mockReset();
    listProjectsMock.mockReset();
  });

  it("redirects anonymous visitors to login", async () => {
    getCurrentUserMock.mockResolvedValue(null);
    listProjectsMock.mockResolvedValue([]);

    render(await WorkspacePage());

    expect(redirectMock).toHaveBeenCalledWith("/login");
  });

  it("renders the protected workspace with persisted projects", async () => {
    getCurrentUserMock.mockResolvedValue({
      id: "user_admin_seed",
      name: "SciClaw Admin",
      email: "admin@sciclaw.local",
      role: "admin",
      intent: "Operations oversight and replica verification",
    });
    listProjectsMock.mockResolvedValue([
      {
        id: "proj-1",
        title: "Patent overlap review",
        stage: "Live comparison",
        summary: "Grounding claim charts against prior filings and source exhibits.",
        updatedAt: "Updated 12m ago",
        sources: 18,
        tasksOpen: 2,
      },
    ]);

    render(await WorkspacePage());

    expect(screen.getByRole("heading", { name: /sciclaw workspace/i })).toBeInTheDocument();
    expect(screen.getByText(/protected workspace/i)).toBeInTheDocument();
    expect(screen.getByText("SciClaw Admin")).toBeInTheDocument();
    expect(screen.getByText("admin@sciclaw.local")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /sign out/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view public guide/i })).toHaveAttribute("href", "/help/projects");
    expect(screen.getByRole("heading", { name: /patent overlap review/i })).toBeInTheDocument();
    expect(screen.getByText(/18 sources/i)).toBeInTheDocument();
    expect(screen.getByText(/2 tasks open/i)).toBeInTheDocument();
  });
});
