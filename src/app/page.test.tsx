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
    expect(heroScope.getAllByText(/^meth\.$/i)).toHaveLength(2);
    expect(heroScope.getAllByText(/^find\.$/i)).toHaveLength(2);
    expect(heroScope.getByText(/^data$/i)).toBeInTheDocument();
    expect(heroScope.getByText(/^evid\.$/i)).toBeInTheDocument();
    expect(heroScope.queryByText(/33%/i)).not.toBeInTheDocument();
    expect(heroScope.queryByRole("heading", { name: /autonomous experiment execution/i })).not.toBeInTheDocument();
  });

  it("renders the public-inspired landing structure", () => {
    render(<Home />);

    const featureRotator = screen.getByRole("button", { name: /^文 literature analysis$/i }).closest("section");
    expect(featureRotator).toHaveClass("lg:grid-cols-[minmax(0,306px)_minmax(0,1fr)]");
    expect(featureRotator).toHaveClass("lg:gap-[0.48rem]");
    expect(featureRotator).toHaveClass("xl:gap-[0.64rem]");
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
    expect(screen.getAllByText(/^find\.$/i).length).toBeGreaterThanOrEqual(1);
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
    expect(hero).toHaveClass("lg:grid-cols-[minmax(0,1fr)_318px]");
    expect(hero).toHaveClass("lg:gap-[2.12rem]");
    expect(screen.getByRole("complementary")).toHaveClass("max-w-[318px]");
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

    const settingsTrigger = screen.getByRole("button", { name: /settings/i });
    settingsTrigger.focus();
    fireEvent.keyDown(settingsTrigger, { key: "ArrowDown" });

    const settingsMenu = screen.getByRole("menu", { name: /settings/i });
    expect(settingsMenu).toBeInTheDocument();
    expect(within(settingsMenu).getByRole("menuitem", { name: /theme/i })).toBeInTheDocument();
    expect(within(settingsMenu).getByRole("menuitem", { name: /language/i })).toBeInTheDocument();
    expect(settingsTrigger).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(settingsMenu, { key: "Escape" });

    expect(settingsTrigger).toHaveFocus();
    expect(settingsTrigger).toHaveAttribute("aria-expanded", "false");
  });

  it("keeps the utility triggers subtle, preserves the settings menu contract, and keeps the hero micro-label set readable after the cluster reposition", () => {
    render(<Home />);

    const primaryNav = screen.getByRole("navigation", { name: /primary/i });
    const settingsTrigger = within(primaryNav).getByRole("button", { name: /settings/i });
    const triggerRow = settingsTrigger.parentElement?.parentElement;
    const literatureNode = screen.getByRole("button", { name: /^文 literature analysis$/i });
    const dataMiningNode = screen.getByRole("button", { name: /^数 data mining$/i });
    const outcomeNode = screen.getByRole("button", { name: /^果 outcome present$/i });
    const featureNetwork = literatureNode.closest("div.relative");

    expect(settingsTrigger).toHaveClass("h-[2.98rem]");
    expect(settingsTrigger).toHaveClass("w-[2.98rem]");
    expect(settingsTrigger).toHaveClass("shadow-[0_1px_2px_rgba(15,23,42,0.015),0_2px_4px_rgba(15,23,42,0.006),inset_0_1px_0_rgba(255,255,255,0.998)]");
    expect(triggerRow).toHaveClass("gap-[0.4rem]");
    expect(triggerRow).toHaveClass("sm:gap-[0.5rem]");
    expect(primaryNav).toHaveClass("gap-[0.56rem]");
    expect(primaryNav).toHaveClass("sm:gap-[0.72rem]");

    fireEvent.click(settingsTrigger);

    const settingsMenu = screen.getByRole("menu", { name: /settings/i });
    expect(within(settingsMenu).getByRole("menuitem", { name: /theme/i })).toBeInTheDocument();
    expect(within(settingsMenu).getByRole("menuitem", { name: /language/i })).toBeInTheDocument();
    expect(settingsMenu).toHaveTextContent(/light workspace previews/i);
    expect(settingsMenu).toHaveTextContent(/english-first public shell/i);

    expect(featureNetwork).toHaveTextContent(/literature analysis/i);
    expect(featureNetwork).toHaveTextContent(/data mining/i);
    expect(featureNetwork).toHaveTextContent(/outcome present/i);
    expect(literatureNode).toHaveClass("left-[50.8%]");
    expect(literatureNode).toHaveClass("top-[18.9%]");
    expect(literatureNode.firstElementChild).toHaveClass("h-[4.16rem]");
    expect(literatureNode.firstElementChild).toHaveClass("w-[4.16rem]");
    expect(literatureNode.firstElementChild).toHaveClass("border-[#db8b4f]");
    expect(literatureNode.firstElementChild).toHaveClass("text-[#a64814]");
    expect(literatureNode.firstElementChild).toHaveClass("shadow-[0_0_0_3px_rgba(240,142,79,0.054),0_14px_26px_rgba(232,124,55,0.082)]");
    expect(literatureNode.lastElementChild).toHaveClass("text-[#864015]");
    expect(dataMiningNode).toHaveClass("left-[50.95%]");
    expect(dataMiningNode).toHaveClass("top-[48.85%]");
    expect(dataMiningNode.firstElementChild).toHaveClass("h-[4.08rem]");
    expect(dataMiningNode.firstElementChild).toHaveClass("w-[4.08rem]");
    expect(dataMiningNode.firstElementChild).toHaveClass("border-[#50677d]");
    expect(dataMiningNode.firstElementChild).toHaveClass("text-[#213c4d]");
    expect(dataMiningNode.firstElementChild).toHaveClass("shadow-[0_12px_24px_rgba(15,23,42,0.082)]");
    expect(dataMiningNode.lastElementChild).toHaveClass("text-[#325168]");
    expect(outcomeNode).toHaveClass("right-[35.9%]");
    expect(outcomeNode).toHaveClass("top-[19.05%]");
    expect(outcomeNode.firstElementChild).toHaveClass("h-[4.08rem]");
    expect(outcomeNode.firstElementChild).toHaveClass("w-[4.08rem]");
    expect(outcomeNode.firstElementChild).toHaveClass("border-[#50677d]");
    expect(outcomeNode.firstElementChild).toHaveClass("text-[#213c4d]");
    expect(outcomeNode.firstElementChild).toHaveClass("shadow-[0_12px_24px_rgba(15,23,42,0.082)]");
    expect(outcomeNode.lastElementChild).toHaveClass("text-[#325168]");

    const chartLabels = within(screen.getByTestId("landing-hero")).getAllByText(/^(meth\.|find\.|data|evid\.)$/i).slice(-4);
    expect(chartLabels).toHaveLength(4);
    chartLabels.forEach((label) => {
      const labelWrapper = label.parentElement;
      expect(labelWrapper).not.toBeNull();
      expect(labelWrapper).toHaveClass("text-[12.5px]");
      expect(labelWrapper).toHaveClass("tracking-[0.009em]");
      expect(labelWrapper).toHaveClass("text-[#163b52]");
      expect(label).toHaveClass("max-w-[4.4rem]");
      expect(label).toHaveClass("text-balance");
    });
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
