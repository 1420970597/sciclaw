import { fireEvent, render, screen, within } from "@testing-library/react";
import HelpArticlePage, { generateStaticParams } from "@/app/help/[slug]/page";

describe("Help article page", () => {
  it("exposes all known public help routes as static params", () => {
    expect(generateStaticParams()).toEqual([
      { slug: "getting-started" },
      { slug: "projects" },
      { slug: "chat" },
      { slug: "skills" },
      { slug: "library" },
      { slug: "tasks" },
      { slug: "foundry" },
      { slug: "persona" },
      { slug: "im" },
      { slug: "settings" },
    ]);
  });

  it("renders the docs shell for a known article", async () => {
    const page = await HelpArticlePage({
      params: Promise.resolve({ slug: "getting-started" }),
    });

    render(page);

    const docsNav = screen.getByRole("navigation", { name: /user guide navigation/i });

    expect(screen.getByRole("heading", { name: /getting started/i, level: 2 })).toBeInTheDocument();
    expect(docsNav).toBeInTheDocument();
    expect(screen.getByText(/^USER GUIDE$/)).toBeInTheDocument();
    expect(screen.getByText(/^SciClaw · USER GUIDE$/)).toBeInTheDocument();
    expect(screen.getByText(/search…/i)).toBeInTheDocument();
    expect(screen.getByText(/on this page/i)).toBeInTheDocument();
    expect(within(docsNav).getByRole("link", { name: /02 project & session/i })).toHaveAttribute(
      "href",
      "/help/projects",
    );
    expect(within(docsNav).getByRole("link", { name: /08 ai persona/i })).toBeInTheDocument();
    expect(
      screen.getByText(
        /sciclaw is an ai co-worker built for scientific research\. it helps researchers continuously manage the full research cycle around a project, including knowledge capture, task execution, output generation, and workflow improvement, so research can operate as a true closed loop\./i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^onboarding$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^how sciclaw works$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^onboarding$/i })).toHaveAttribute("href", "#onboarding");
    expect(screen.getByRole("link", { name: /^how sciclaw works$/i })).toHaveAttribute("href", "#how-sciclaw-works");
    expect(screen.getByRole("link", { name: /^project & session$/i })).toHaveAttribute("href", "/help/projects");
  });

  it("matches the public chat documentation sections more closely", async () => {
    const page = await HelpArticlePage({
      params: Promise.resolve({ slug: "chat" }),
    });

    render(page);

    expect(screen.getByRole("heading", { name: /^chat$/i })).toBeInTheDocument();
    expect(screen.getByText(/this route intentionally feels more product-like than the surrounding docs pages/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^active lanes$/i })).toBeInTheDocument();
    expect(screen.getByText(/the center timeline emphasizes three simultaneous research threads/i)).toBeInTheDocument();
    expect(screen.getAllByText(/output handoff/i).length).toBeGreaterThan(0);
  });

  it("matches the live public settings page title, body, next-link, and toc labels", async () => {
    const page = await HelpArticlePage({
      params: Promise.resolve({ slug: "settings" }),
    });

    render(page);

    expect(screen.getAllByText(/^10$/i).length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: /^system settings$/i })).toBeInTheDocument();
    expect(
      screen.queryByText(
        /system settings explains the small set of shell-level controls that are already visible on the live public help route: theme, language, and usage visibility\./i,
      ),
    ).not.toBeInTheDocument();
    expect(
      screen.getByText(
        /system settings keeps appearance, language, and usage guidance visible in the public shell without pretending private account configuration is already exposed\./i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^theme$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^language$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^usage$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /09 im connection/i })).toHaveAttribute(
      "href",
      "/help/im",
    );
    expect(screen.getByRole("link", { name: /^im connection$/i })).toHaveAttribute("href", "/help/im");
    expect(screen.getByRole("link", { name: /^theme$/i })).toHaveAttribute("href", "#theme");
    expect(screen.getByRole("link", { name: /^language$/i })).toHaveAttribute("href", "#language");
    expect(screen.getByRole("link", { name: /^usage$/i })).toHaveAttribute("href", "#usage");
  });

  it("opens the docs appearance menu with theme and language entries", async () => {
    const page = await HelpArticlePage({
      params: Promise.resolve({ slug: "getting-started" }),
    });

    render(page);

    fireEvent.click(screen.getByRole("button", { name: /appearance and language/i }));

    const utilityMenu = screen.getByRole("menu", { name: /appearance and language/i });
    expect(utilityMenu).toBeInTheDocument();
    expect(within(utilityMenu).getByRole("menuitem", { name: /theme/i })).toBeInTheDocument();
    expect(within(utilityMenu).getByRole("menuitem", { name: /language/i })).toBeInTheDocument();
  });
});
