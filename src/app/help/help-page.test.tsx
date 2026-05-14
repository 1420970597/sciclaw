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

    expect(screen.getByRole("heading", { name: /getting started/i, level: 2 })).toBeInTheDocument();
    expect(screen.queryByRole("navigation", { name: /user guide navigation/i })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /01 getting started/i })).toHaveAttribute("href", "/help/getting-started");
    expect(screen.getByText(/^USER GUIDE$/)).toBeInTheDocument();
    expect(screen.getByText(/^SciClaw · USER GUIDE$/)).toBeInTheDocument();
    expect(screen.getByText(/search…/i)).toBeInTheDocument();
    expect(screen.getByText(/on this page/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /02 projects, conversations, tasks & library/i })).toHaveAttribute(
      "href",
      "/help/projects",
    );
    expect(screen.getByRole("link", { name: /03 foundry/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /04 skills/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /05 ai persona/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /03 chat/i })).not.toBeInTheDocument();
    expect(
      screen.getByText(
        /sciclaw is an ai co-worker built for scientific research\. it helps researchers continuously manage the full research cycle around a project, including knowledge capture, task execution, output generation, and workflow improvement, so research can operate as a true closed loop\./i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^1\. what sciclaw is$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^3\. how sciclaw works$/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /^1\. what sciclaw is$/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /^3\. how sciclaw works$/i })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^project & session$/i })).toHaveAttribute("href", "/help/projects");
  });

  it("matches the public chat documentation sections more closely", async () => {
    const page = await HelpArticlePage({
      params: Promise.resolve({ slug: "chat" }),
    });

    render(page);

    expect(screen.getByRole("heading", { name: /^chat$/i })).toBeInTheDocument();
    expect(screen.getByText(/the chat panel is the main workspace for interacting with sciclaw/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /02 projects, conversations, tasks & library/i })).toHaveAttribute(
      "href",
      "/help/projects",
    );
    expect(screen.queryByRole("link", { name: /03 chat/i })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /03 foundry/i })).toHaveAttribute("href", "/help/foundry");
    expect(screen.getByRole("heading", { name: /^command bar$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^sending messages$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^attaching files$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^library$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^guiding the agent mid-task$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^interactive prompts$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^inline skill invocation$/i })).toBeInTheDocument();
    expect(screen.getByText(/new chat — start a new conversation session/i)).toBeInTheDocument();
    expect(screen.getByText(/type your message in the input box and press enter to send/i)).toBeInTheDocument();
    expect(screen.getByText(/uploaded files are automatically added to the current project/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^project & session$/i })).toHaveAttribute("href", "/help/projects");
    expect(screen.getByRole("link", { name: /^skills$/i })).toHaveAttribute("href", "/help/skills");
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
    expect(screen.getByRole("link", { name: /06 connect messaging apps/i })).toHaveAttribute(
      "href",
      "/help/im",
    );
    expect(screen.getByRole("link", { name: /^im connection$/i })).toHaveAttribute("href", "/help/im");
    expect(screen.getByRole("button", { name: /^theme$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^language$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^usage$/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /^theme$/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /^language$/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /^usage$/i })).not.toBeInTheDocument();
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
