import { fireEvent, render, screen, within } from "@testing-library/react";
import Home from "@/app/page";

describe("Home landing page", () => {
  it("shows the public homepage default hero state on fresh load", () => {
    render(<Home />);

    const landingHero = screen.getByTestId("landing-hero");
    const defaultHeroSection = within(landingHero).getByRole("heading", { name: /deep literature analysis/i }).closest("section");

    expect(defaultHeroSection).not.toBeNull();
    expect(within(landingHero).getByRole("heading", { name: /deep literature analysis/i })).toBeInTheDocument();
    expect(
      screen.getByText(
        /upload a pdf, and sciclaw automatically extracts the core arguments, research methods, and key data/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /get started preview/i })).toBeInTheDocument();
    expect(screen.getByRole("tabpanel", { name: /onboard/i })).toBeInTheDocument();

    const heroScope = within(defaultHeroSection as HTMLElement);
    expect(heroScope.getByText(/research workspace preview/i)).toBeInTheDocument();
    const heroPreviewCards = heroScope.getAllByText(/^deep literature analysis$/i);

    expect(heroPreviewCards).toHaveLength(2);
    expect(heroScope.getByText(/^summary$/i)).toBeInTheDocument();
    expect(heroScope.getAllByText(/^autonomous research$/i)).toHaveLength(2);
    expect(heroScope.getAllByText(/^methodology$/i)).toHaveLength(2);
    expect(heroScope.getAllByText(/^conclusion$/i)).toHaveLength(2);
    expect(heroScope.getByText(/^data$/i)).toBeInTheDocument();
    expect(heroScope.getAllByText(/^evidence$/i)).toHaveLength(2);
    expect(heroScope.queryByText(/33%/i)).not.toBeInTheDocument();
    expect(heroScope.queryByRole("heading", { name: /autonomous experiment execution/i })).not.toBeInTheDocument();
  });

  it("renders the public-inspired landing structure", () => {
    render(<Home />);

    const featureRotator = screen.getByRole("button", { name: /^文 literature analysis$/i }).closest("section");
    expect(featureRotator).toHaveClass("lg:grid-cols-[minmax(0,324px)_minmax(0,1fr)]");
    expect(featureRotator).toHaveClass("lg:gap-[1.15rem]");
    expect(featureRotator).toHaveClass("xl:gap-[1.35rem]");
    expect(screen.getByRole("heading", { name: /sci\s*claw/i })).toBeInTheDocument();
    expect(
      screen.getAllByText(/ai co-worker for scientific research\./i).length,
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByText(
        /sciclaw connects inspiration generation, experimental execution, and iterative optimization/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { name: /deep literature analysis/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/autonomous research/i).length).toBeGreaterThanOrEqual(2);
    expect(screen.getByRole("link", { name: /get started preview/i })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: /primary/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /verify access code/i })).toBeDisabled();
    expect(screen.getAllByRole("link", { name: /get started/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByRole("heading", { name: /best\s*cases/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /automated report generation/i })).toBeInTheDocument();
    expect(screen.getByText(/^01 \/ 04$/i)).toBeInTheDocument();

    const hero = screen.getByTestId("landing-hero");
    expect(hero).toHaveClass("lg:grid-cols-[minmax(0,1fr)_320px]");
    expect(hero).toHaveClass("lg:gap-[4.9rem]");
    expect(screen.getByRole("complementary")).toHaveClass("max-w-[320px]");
  });

  it("switches auth tabs and updates the visible panel", () => {
    render(<Home />);

    fireEvent.click(screen.getByRole("tab", { name: /login/i }));

    expect(screen.getByRole("tabpanel", { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /email address/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /verification code/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send code/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /enter laboratory/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /continue with google/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /privacy policy/i })).toHaveAttribute("href", "/privacy");
    expect(screen.queryByDisplayValue(/sc-xxxxxxxx/i)).not.toBeInTheDocument();
  });

  it("switches feature panels when a network node is selected", () => {
    render(<Home />);

    fireEvent.click(screen.getAllByRole("button", { name: /outcome present/i })[0]);

    expect(screen.getByRole("heading", { name: /multi-format research output/i })).toBeInTheDocument();
    expect(
      screen.getByText(
        /automatically consolidate your research process and conclusions into professional, content-rich outputs/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/outcome present/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/preview/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/summary/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/evidence/i).length).toBeGreaterThanOrEqual(1);
  });

  it("keeps landing navigation targets on implemented routes", () => {
    render(<Home />);

    const primaryNav = screen.getByRole("navigation", { name: /primary/i });
    const footer = screen.getByRole("contentinfo");
    const headerButtons = within(primaryNav).getAllByRole("button");

    expect(within(primaryNav).getByRole("button", { name: /user guide/i })).toBeInTheDocument();
    expect(within(primaryNav).getByRole("button", { name: /contact us/i })).toBeInTheDocument();
    expect(within(primaryNav).getByRole("button", { name: /settings/i })).toBeInTheDocument();

    fireEvent.click(within(primaryNav).getByRole("button", { name: /user guide/i }));
    const guideMenu = screen.getByRole("menu", { name: /user guide/i });
    expect(within(guideMenu).getByRole("menuitem", { name: /workspace basics/i })).toHaveAttribute(
      "href",
      "/help/getting-started",
    );

    fireEvent.click(within(primaryNav).getByRole("button", { name: /contact us/i }));
    const contactMenu = screen.getByRole("menu", { name: /contact us/i });
    expect(within(contactMenu).getByRole("menuitem", { name: /discord/i })).toHaveAttribute(
      "href",
      "https://discord.gg/6KRR6svTGu",
    );
    expect(within(contactMenu).getByRole("menuitem", { name: /email/i })).toHaveAttribute(
      "href",
      "mailto:service@sciclaw.ai",
    );

    fireEvent.click(within(primaryNav).getByRole("button", { name: /settings/i }));
    const settingsMenu = screen.getByRole("menu", { name: /settings/i });
    expect(within(settingsMenu).getByRole("menuitem", { name: /theme/i })).toHaveAttribute(
      "href",
      "/help/settings",
    );

    expect(footer).toHaveTextContent(/2026 all rights reserved/i);
    expect(headerButtons).toHaveLength(3);
  });

  it("renders the contact icon menu as a support-style control without changing route reachability", () => {
    render(<Home />);

    const primaryNav = screen.getByRole("navigation", { name: /primary/i });
    const contactTrigger = within(primaryNav).getByRole("button", { name: /contact us/i });

    fireEvent.click(contactTrigger);

    const contactMenu = screen.getByRole("menu", { name: /contact us/i });
    expect(contactTrigger).toHaveAttribute("aria-expanded", "true");
    expect(within(contactMenu).getByRole("menuitem", { name: /discord/i })).toHaveAttribute(
      "href",
      "https://discord.gg/6KRR6svTGu",
    );
    expect(within(contactMenu).getByRole("menuitem", { name: /email/i })).toHaveAttribute(
      "href",
      "mailto:service@sciclaw.ai",
    );
  });

  it("opens the landing settings dock menu with first-level theme and language entries", () => {
    render(<Home />);

    fireEvent.click(screen.getByRole("button", { name: /settings/i }));

    const settingsMenu = screen.getByRole("menu", { name: /settings/i });
    expect(settingsMenu).toBeInTheDocument();
    expect(within(settingsMenu).getByRole("menuitem", { name: /theme/i })).toBeInTheDocument();
    expect(within(settingsMenu).getByRole("menuitem", { name: /language/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /settings/i })).toHaveAttribute("aria-expanded", "true");
  });

  it("keeps the utility triggers compact while preserving the settings menu contract and nudges the hero cluster closer to the live-site composition", () => {
    render(<Home />);

    const primaryNav = screen.getByRole("navigation", { name: /primary/i });
    const settingsTrigger = within(primaryNav).getByRole("button", { name: /settings/i });
    const triggerRow = settingsTrigger.parentElement?.parentElement;
    const literatureNode = screen.getByRole("button", { name: /^文 literature analysis$/i });
    const dataMiningNode = screen.getByRole("button", { name: /^数 data mining$/i });
    const outcomeNode = screen.getByRole("button", { name: /^果 outcome present$/i });
    const featureNetwork = literatureNode.closest("div.relative");

    expect(settingsTrigger).toHaveClass("h-[2.34rem]");
    expect(settingsTrigger).toHaveClass("w-[2.34rem]");
    expect(settingsTrigger).toHaveClass("shadow-[0_7px_18px_rgba(15,23,42,0.05),inset_0_1px_0_rgba(255,255,255,0.996)]");
    expect(triggerRow).toHaveClass("gap-[0.24rem]");
    expect(primaryNav).toHaveClass("gap-[0.1rem]");
    expect(primaryNav).toHaveClass("sm:gap-[0.16rem]");

    fireEvent.click(settingsTrigger);

    const settingsMenu = screen.getByRole("menu", { name: /settings/i });
    expect(within(settingsMenu).getByRole("menuitem", { name: /theme/i })).toBeInTheDocument();
    expect(within(settingsMenu).getByRole("menuitem", { name: /language/i })).toBeInTheDocument();
    expect(settingsMenu).toHaveTextContent(/light workspace previews/i);
    expect(settingsMenu).toHaveTextContent(/english-first public shell/i);

    expect(featureNetwork).toHaveClass("min-h-[336px]");
    expect(featureNetwork).toHaveClass("bg-[radial-gradient(circle_at_47%_49%,_rgba(255,255,255,0.94),_rgba(255,255,255,0)_56%)]");
    expect(literatureNode).toHaveClass("left-[19.7%]");
    expect(literatureNode).toHaveClass("top-[1.1%]");
    expect(literatureNode.firstElementChild).toHaveClass("h-[4.22rem]");
    expect(literatureNode.firstElementChild).toHaveClass("w-[4.22rem]");
    expect(literatureNode.firstElementChild).toHaveClass("border-[#ec985f]");
    expect(literatureNode.firstElementChild).toHaveClass("text-[#c55a14]");
    expect(literatureNode.firstElementChild).toHaveClass("shadow-[0_0_0_11px_rgba(240,142,79,0.16),0_24px_40px_rgba(232,124,55,0.21)]");
    expect(literatureNode.lastElementChild).toHaveClass("text-[#ab4f18]");
    expect(dataMiningNode).toHaveClass("left-[18.4%]");
    expect(dataMiningNode).toHaveClass("top-[66.3%]");
    expect(dataMiningNode.firstElementChild).toHaveClass("h-[3.84rem]");
    expect(dataMiningNode.firstElementChild).toHaveClass("w-[3.84rem]");
    expect(dataMiningNode.firstElementChild).toHaveClass("border-[#bcc8d4]");
    expect(dataMiningNode.firstElementChild).toHaveClass("text-[#697786]");
    expect(dataMiningNode.lastElementChild).toHaveClass("text-[#687686]");
    expect(outcomeNode).toHaveClass("right-[12.9%]");
    expect(outcomeNode).toHaveClass("top-[12.6%]");
    expect(outcomeNode.firstElementChild).toHaveClass("h-[3.84rem]");
    expect(outcomeNode.firstElementChild).toHaveClass("w-[3.84rem]");
    expect(outcomeNode.firstElementChild).toHaveClass("border-[#bcc8d4]");
    expect(outcomeNode.firstElementChild).toHaveClass("text-[#697786]");
    expect(outcomeNode.lastElementChild).toHaveClass("text-[#687686]");
  });

  it("renders the footer copy centered to match the public landing page", () => {
    render(<Home />);

    const footer = screen.getByRole("contentinfo");

    expect(footer).toHaveTextContent(/sciclaw - ai co-worker for scientific research\./i);
    expect(footer).toHaveTextContent(/2026 all rights reserved/i);
    expect(footer.firstElementChild).toHaveClass("text-center");
  });

  it("matches the live site best-cases default slide and keeps the section vertically airy", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: /automated report generation/i })).toBeInTheDocument();
    expect(screen.getAllByText(/automatically integrates historical tasks, literature, and experimental data into clear, presentation-ready materials/i).length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText(/^01 \/ 04$/i)).toBeInTheDocument();

    const bestCasesHeading = screen.getByRole("heading", { name: /best\s*cases/i });
    const bestCasesSection = bestCasesHeading.closest("section");

    expect(bestCasesSection).toHaveClass("mt-[1.95rem]");
    expect(bestCasesSection).toHaveClass("sm:mt-[2.35rem]");

    fireEvent.click(screen.getByRole("button", { name: /next/i }));

    expect(screen.getByRole("heading", { name: /peer review response support/i })).toBeInTheDocument();
    expect(
      screen.getByText(
        /automatically retrieves relevant data, prior task records, and manuscript context to speed up evidence-backed reviewer responses/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/^02 \/ 04$/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /previous/i }));

    expect(screen.getByRole("heading", { name: /automated report generation/i })).toBeInTheDocument();
    expect(screen.getByText(/^01 \/ 04$/i)).toBeInTheDocument();
  });
});
