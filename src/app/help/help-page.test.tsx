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

    expect(screen.getByRole("heading", { name: /getting started/i })).toBeInTheDocument();
    expect(docsNav).toBeInTheDocument();
    expect(screen.getByText(/search…/i)).toBeInTheDocument();
    expect(screen.getByText(/on this page/i)).toBeInTheDocument();
    expect(within(docsNav).getByRole("link", { name: /02 projects/i })).toHaveAttribute(
      "href",
      "/help/projects",
    );
    expect(within(docsNav).getByRole("link", { name: /08 persona/i })).toBeInTheDocument();
    expect(screen.getByText(/ai-powered scientific co-worker/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^what is sciclaw$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /what is sciclaw/i })).toHaveAttribute("href", "#what-is-sciclaw");
  });

  it("matches the public chat documentation sections more closely", async () => {
    const page = await HelpArticlePage({
      params: Promise.resolve({ slug: "chat" }),
    });

    render(page);

    expect(screen.getByRole("heading", { name: /^chat$/i })).toBeInTheDocument();
    expect(screen.getByText(/chat is where a single research thread becomes actionable/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /session workspace/i })).toBeInTheDocument();
    expect(screen.getByText(/bring in project memory, prior sessions, and uploaded assets without leaving the thread/i)).toBeInTheDocument();
    expect(screen.getAllByText(/handoff to output/i).length).toBeGreaterThan(0);
  });

  it("matches the public settings page title and toc labels", async () => {
    const page = await HelpArticlePage({
      params: Promise.resolve({ slug: "settings" }),
    });

    render(page);

    expect(screen.getAllByText(/^10$/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/settings centralize workspace appearance/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^theme$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /09 im/i })).toHaveAttribute(
      "href",
      "/help/im",
    );
    expect(screen.getByRole("link", { name: /^theme$/i })).toHaveAttribute("href", "#theme");
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
