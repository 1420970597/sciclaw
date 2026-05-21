import { fireEvent, render, screen, within } from "@testing-library/react";
import HelpArticlePage, { generateStaticParams } from "@/app/help/[slug]/page";

const expectedHelpParams = [
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
  { slug: "billing" },
  { slug: "faq" },
];

describe("Help article page", () => {
  it("exposes all known public help routes as static params", () => {
    expect(generateStaticParams()).toEqual(expectedHelpParams);
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
    expect(screen.getByRole("link", { name: /02 projects · chats · tasks/i })).toHaveAttribute("href", "/help/projects");
    expect(screen.getByRole("link", { name: /03 library & foundry/i })).toBeInTheDocument();
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
    expect(screen.getByRole("link", { name: /02 projects · chats · tasks/i })).toHaveAttribute("href", "/help/projects");
    expect(screen.queryByRole("link", { name: /03 chat/i })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /03 library & foundry/i })).toHaveAttribute("href", "/help/foundry");
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
  });

  it("matches the live public skills page title, sections, and foundry next link", async () => {
    const page = await HelpArticlePage({
      params: Promise.resolve({ slug: "skills" }),
    });

    render(page);

    expect(screen.getByRole("heading", { name: /^skills$/i })).toBeInTheDocument();
    expect(
      screen.getByText(
        /in sciclaw, skills are one of the main ways an agent can call external capabilities, run domain-specific workflows, and complete more complex tasks/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^1\. what skills are$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^2\. how to trigger skills$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^3\. when skills are most useful$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^4\. skills management$/i })).toBeInTheDocument();
    expect(screen.getByText(/use \/skill-name directly in chat when you already know the capability you want/i)).toBeInTheDocument();
    expect(screen.getByText(/upload skills into the current environment so they become callable in chat/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^foundry$/i })).toHaveAttribute("href", "/help/foundry");
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
    expect(screen.getByRole("link", { name: /06 messaging apps/i })).toHaveAttribute("href", "/help/im");
    expect(screen.getByRole("link", { name: /^projects · chats · tasks$/i })).toHaveAttribute("href", "/help/projects");
    expect(screen.getByRole("button", { name: /^theme$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^language$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^usage$/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /^theme$/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /^language$/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /^usage$/i })).not.toBeInTheDocument();
  });

  it("matches the live public persona page title, sections, and related links", async () => {
    const page = await HelpArticlePage({
      params: Promise.resolve({ slug: "persona" }),
    });

    render(page);

    expect(screen.getByRole("heading", { name: /^ai persona$/i })).toBeInTheDocument();
    expect(screen.getByText(/sciclaw uses three editable persona files to shape the ai's behavior and tailor it to your work\./i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^initial ai persona setting$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^editing persona settings$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^persona files$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^why sciclaw uses file-based persona records$/i })).toBeInTheDocument();
    expect(screen.getByText(/click the settings icon \(⚙\) on the right side of the conversation header and choose prompts/i)).toBeInTheDocument();
    expect(screen.getByText(/soUL\.md — defines sciclaw's core purpose and mission/i)).toBeInTheDocument();
    expect(screen.getByText(/identity\.md — defines the ai's personality, tone, and interaction style/i)).toBeInTheDocument();
    expect(screen.getByText(/user\.md — stores information about you/i)).toBeInTheDocument();
    expect(screen.getByText(/stores persona settings as editable files so they remain transparent, portable, and easy to revise/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^why sciclaw uses file-based persona records$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^skills$/i })).toHaveAttribute("href", "/help/skills");
    expect(screen.getByRole("link", { name: /^connect messaging apps$/i })).toHaveAttribute("href", "/help/im");
  });

  it("matches the live public connect-messaging-apps page title, cards, and billing link", async () => {
    const page = await HelpArticlePage({
      params: Promise.resolve({ slug: "im" }),
    });

    render(page);

    expect(screen.getAllByText(/^06$/i).length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: /^connect messaging apps$/i })).toBeInTheDocument();
    expect(screen.getByText(/connect sciclaw to the messaging apps your team already uses/i)).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /^telegram$/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /^discord$/i })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /telegram for instant messaging via bots in personal or group chats bot token \+ chat id/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /discord for server-based community chats with bot integration bot token \+ channel id/i })).toBeInTheDocument();
    expect(screen.getByText(/for instant messaging via bots in personal or group chats/i)).toBeInTheDocument();
    expect(screen.getByText(/^bot token \+ chat id$/i)).toBeInTheDocument();
    expect(screen.getByText(/for server-based community chats with bot integration/i)).toBeInTheDocument();
    expect(screen.getByText(/^bot token \+ channel id$/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^ai persona$/i })).toHaveAttribute("href", "/help/persona");
  });

  it("matches the live public billing page hierarchy and the FAQ page accordion shell", async () => {
    const billingPage = await HelpArticlePage({
      params: Promise.resolve({ slug: "billing" }),
    });

    render(billingPage);

    expect(screen.getByRole("heading", { name: /^credits & billing$/i })).toBeInTheDocument();
    expect(
      screen.getByText(
        /sciclaw's billing page explains how credits, plans, and top-up balances work\. it treats billing as an operational product surface rather than a hidden admin-only finance console\./i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^1\. what are credits\?$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^2\. credit types$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^3\. credit deduction order$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^4\. subscription plans$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^5\. top-up rules$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^6\. payments, refunds, and invoices$/i })).toBeInTheDocument();
    expect(screen.getByText(/credits are sciclaw's way of measuring daily ai usage/i)).toBeInTheDocument();
    expect(screen.getByText(/daily credits, plan credits, top-up credits, and promotional or reward credits/i)).toBeInTheDocument();
    expect(screen.getByText(/free \/ trial/i)).toBeInTheDocument();
    expect(screen.getByText(/payments, refunds, and invoices are all handled through the billing flow at checkout/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^faq$/i })).toHaveAttribute("href", "/help/faq");

    const faqPage = await HelpArticlePage({
      params: Promise.resolve({ slug: "faq" }),
    });

    render(faqPage);

    expect(screen.getAllByRole("heading", { name: /^faq$/i }).length).toBeGreaterThan(0);
    expect(screen.getByText(/sciclaw's faq collects the billing questions users ask most often, including deductions, rollover, top-ups, plan changes, and invoice handling\./i)).toBeInTheDocument();
    expect(screen.getByText(/are credits deducted by message count\?/i)).toBeInTheDocument();
    expect(screen.getByText(/do top-up credits expire\?/i)).toBeInTheDocument();
    expect(screen.getByText(/where can i see the final price\?/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^credits & billing$/i })).toHaveAttribute("href", "/help/billing");
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
