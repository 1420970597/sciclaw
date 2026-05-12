import { fireEvent, render, screen, within } from "@testing-library/react";
import Home from "@/app/page";

describe("Home landing page", () => {
  it("shows the public homepage default hero state on fresh load", () => {
    render(<Home />);

    const landingHero = screen.getByTestId("landing-hero");
    const defaultHeroSection = within(landingHero).getByRole("heading", { name: /deep literature analysis/i }).closest("section");
    const centerNode = screen.getByTestId("feature-node-center");

    expect(defaultHeroSection).not.toBeNull();
    expect(within(landingHero).getByRole("heading", { name: /deep literature analysis/i })).toBeInTheDocument();
    expect(
      screen.getByText(
        /upload a pdf, and sciclaw automatically extracts the core arguments, research methods, and key data/i,
      ),
    ).toBeInTheDocument();
    expect(screen.queryByText(/^AI$/)).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^get started$/i })).toBeInTheDocument();
    expect(centerNode).not.toHaveAccessibleName();
    expect(screen.getByText(/enter your access code to begin/i)).toBeInTheDocument();
    const onboardAccessCode = screen.getByPlaceholderText("SC-XXXXXXXX");
    expect(onboardAccessCode).toHaveAttribute("placeholder", "SC-XXXXXXXX");
    expect(onboardAccessCode).toHaveValue("");

    const heroScope = within(defaultHeroSection as HTMLElement);
    const methodLabel = heroScope.getByText(/^方法论$/i);
    expect(heroScope.queryByText(/research workspace preview/i)).not.toBeInTheDocument();
    const heroPreviewCards = heroScope.getAllByText(/^deep literature analysis$/i);

    expect(heroPreviewCards).toHaveLength(1);
    const bodyLabel = heroScope.getByText(/^autonomous research$/i);
    expect(bodyLabel.tagName).toBe("SPAN");
    expect(bodyLabel.compareDocumentPosition(methodLabel) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(heroScope.getAllByText(/^autonomous research$/i)).toHaveLength(1);
    expect(heroScope.queryByText(/^summary$/i)).not.toBeInTheDocument();
    expect(heroScope.queryByText(/^evidence$/i)).not.toBeInTheDocument();
    expect(heroScope.queryByText(/^preview$/i)).not.toBeInTheDocument();
    expect(methodLabel).toBeInTheDocument();
    expect(heroScope.getByText(/^结论$/i)).toBeInTheDocument();
    expect(heroScope.getByText(/^数据$/i)).toBeInTheDocument();
    expect(heroScope.queryByText(/^证据$/i)).not.toBeInTheDocument();
    expect(heroScope.queryByText(/33%/i)).not.toBeInTheDocument();
    expect(heroScope.queryByRole("heading", { name: /autonomous experiment execution/i })).not.toBeInTheDocument();
  });

  it("renders the public-inspired landing structure", () => {
    render(<Home />);

    const featureRotator = screen.getByTestId("feature-rotator");
    expect(screen.queryByRole("button", { name: /^autonomous execution$/i })).not.toBeInTheDocument();
    expect(featureRotator).toHaveClass("lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)]");
    expect(featureRotator).toHaveClass("lg:gap-[0.22rem]");
    expect(featureRotator).toHaveClass("xl:gap-[0.34rem]");
    const networkShell = featureRotator.firstElementChild;
    expect(networkShell).not.toBeNull();
    expect(networkShell).toHaveClass("lg:-mr-[0.34rem]");
    expect(networkShell).toHaveClass("xl:-mr-[0.48rem]");
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
    expect(screen.getByText(/^结论$/i)).toBeInTheDocument();
    expect(screen.getAllByText(/autonomous research/i)).toHaveLength(1);
    expect(screen.getByRole("button", { name: /^get started$/i })).toBeInTheDocument();
    const utilityRow = screen.getByTestId("landing-utility-row");
    expect(screen.queryByRole("navigation", { name: /primary/i })).not.toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toBeDisabled();
    expect(screen.getByRole("button", { name: /^get started$/i })).toBeInTheDocument();
    expect(utilityRow).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /best\s*cases/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /automated report generation/i })).toBeInTheDocument();
    expect(screen.getByText(/^01 \/ 04$/i)).toBeInTheDocument();

    const hero = screen.getByTestId("landing-hero");
    const authCard = screen.getByTestId("landing-auth-card");
    expect(hero).toHaveClass("lg:grid-cols-[minmax(0,1fr)_314px]");
    expect(hero).toHaveClass("lg:items-start");
    expect(hero).toHaveClass("lg:gap-[1.06rem]");
    expect(hero).toHaveClass("xl:grid-cols-[minmax(0,1.03fr)_314px]");
    expect(hero).toHaveClass("xl:gap-[1.28rem]");
    expect(authCard).toHaveClass("max-w-[314px]");
    expect(authCard).toHaveClass("bg-white");
    expect(authCard).toHaveClass("border-[#e6ebf1]");
    expect(authCard).toHaveClass("lg:mt-[0.86rem]");
    expect(authCard).toHaveClass("xl:mt-[1rem]");
  });

  it("opens the inline early-access apply flow and keeps the live apply-now hero state", () => {
    render(<Home />);

    fireEvent.click(screen.getByRole("button", { name: /no account yet\? apply now/i }));

    const landingHero = screen.getByTestId("landing-hero");
    const bestCasesSection = screen.getByRole("heading", { name: /best cases/i }).closest("section");

    expect(bestCasesSection).not.toBeNull();
    expect(screen.getByText(/leave your email and intended use case\. we will review it for early access\./i)).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /email address/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /verification code/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /tell us what you research and how sciclaw would help\./i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^send code$/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /^enter your email first$/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /^back$/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /no account yet\? apply now/i })).not.toBeInTheDocument();
    expect(within(landingHero).getByRole("heading", { name: /intelligent data visualization/i })).toBeInTheDocument();
    expect(within(landingHero).getByText(/^Q1$/i)).toBeInTheDocument();
    expect(within(landingHero).getByText(/^Q2$/i)).toBeInTheDocument();
    expect(within(landingHero).getByText(/^Q3$/i)).toBeInTheDocument();
    expect(within(landingHero).getByText(/^Q4$/i)).toBeInTheDocument();
    expect(within(landingHero).queryByRole("heading", { name: /peer review response support/i })).not.toBeInTheDocument();
    expect(within(bestCasesSection as HTMLElement).getByRole("heading", { name: /automated report generation/i })).toBeInTheDocument();
    expect(within(bestCasesSection as HTMLElement).getByText(/^01 \/ 04$/i)).toBeInTheDocument();
    expect(within(bestCasesSection as HTMLElement).queryByText(/^02 \/ 04$/i)).not.toBeInTheDocument();
  });

  it("preserves the previous auth mode when leaving the apply flow", () => {
    render(<Home />);

    fireEvent.click(screen.getByRole("tab", { name: /login/i }));
    expect(screen.getByRole("textbox", { name: /email address/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /no account yet\? apply now/i }));
    expect(screen.getByText(/leave your email and intended use case\. we will review it for early access\./i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /^back$/i }));

    expect(screen.getByRole("textbox", { name: /email address/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /enter laboratory/i })).toBeDisabled();
  });

  it("switches feature panels when a network node is selected", () => {
    render(<Home />);

    fireEvent.click(screen.getByTestId("feature-node-outcome-present"));

    expect(screen.getByRole("heading", { name: /multi-format research output/i })).toBeInTheDocument();
    expect(
      screen.getByText(
        /automatically consolidate your research process and conclusions into professional, content-rich outputs/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/outcome present/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByText(/^summary$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^证据$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^preview$/i)).not.toBeInTheDocument();
  });

  it("keeps landing utility-menu targets on implemented routes without exposing a primary nav landmark", () => {
    render(<Home />);

    const utilityRow = screen.getByTestId("landing-utility-row");
    const primaryNav = screen.queryByRole("navigation", { name: /primary/i });
    const footer = screen.getByRole("contentinfo");
    const headerButtons = within(utilityRow).getAllByRole("button");

    expect(within(utilityRow).getByRole("button", { name: /user guide/i })).toBeInTheDocument();
    expect(within(utilityRow).getByRole("button", { name: /contact us/i })).toBeInTheDocument();
    expect(within(utilityRow).getByRole("button", { name: /settings/i })).toBeInTheDocument();
    expect(primaryNav).toBeNull();

    fireEvent.click(within(utilityRow).getByRole("button", { name: /user guide/i }));
    const guideMenu = screen.getByRole("menu", { name: /user guide/i });
    expect(within(guideMenu).getByRole("menuitem", { name: /workspace basics/i })).toHaveAttribute(
      "href",
      "/help/getting-started",
    );

    fireEvent.click(within(utilityRow).getByRole("button", { name: /contact us/i }));
    const contactMenu = screen.getByRole("menu", { name: /contact us/i });
    expect(within(contactMenu).getByRole("menuitem", { name: /discord/i })).toHaveAttribute(
      "href",
      "https://discord.gg/6KRR6svTGu",
    );
    expect(within(contactMenu).getByRole("menuitem", { name: /email/i })).toHaveAttribute(
      "href",
      "mailto:service@sciclaw.ai",
    );

    fireEvent.click(within(utilityRow).getByRole("button", { name: /settings/i }));
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

    const utilityRow = screen.getByTestId("landing-utility-row");
    const contactTrigger = within(utilityRow).getByRole("button", { name: /contact us/i });

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

    const settingsTrigger = within(screen.getByTestId("landing-utility-row")).getByRole("button", { name: /settings/i });
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

  it("keeps the utility triggers subtle, preserves the settings menu contract, and improves hero cluster/label readability after the cohesion pass", () => {
    render(<Home />);

    const utilityRow = screen.getByTestId("landing-utility-row");
    const settingsTrigger = within(utilityRow).getByRole("button", { name: /settings/i });
    const triggerRow = settingsTrigger.parentElement?.parentElement;
    const literatureNode = screen.getByTestId("feature-node-literature-analysis");
    const dataMiningNode = screen.getByTestId("feature-node-data-mining");
    const outcomeNode = screen.getByTestId("feature-node-outcome-present");
    const landingHero = screen.getByTestId("landing-hero");

    expect(within(utilityRow).getByRole("button", { name: /user guide/i })).toBeInTheDocument();
    expect(within(utilityRow).getByRole("button", { name: /contact us/i })).toBeInTheDocument();
    expect(settingsTrigger).toHaveClass("h-[2.35rem]");
    expect(settingsTrigger).toHaveClass("w-[2.35rem]");
    expect(triggerRow).not.toBeNull();
    expect(triggerRow).toHaveClass("gap-[0.34rem]");
    expect(triggerRow).toHaveClass("sm:gap-[0.42rem]");
    expect(settingsTrigger).toHaveAttribute("aria-haspopup", "menu");
    expect(utilityRow.parentElement?.parentElement).toHaveClass("pt-[0.46rem]");
    expect(utilityRow.parentElement?.parentElement).toHaveClass("sm:pt-[0.62rem]");
    expect(utilityRow).toHaveClass("pr-[1.72rem]");
    expect(utilityRow).toHaveClass("sm:pr-[1.72rem]");
    [
      within(utilityRow).getByRole("button", { name: /user guide/i }),
      within(utilityRow).getByRole("button", { name: /contact us/i }),
      settingsTrigger,
    ].forEach((trigger) => {
      const icon = trigger.querySelector("svg");
      expect(icon).not.toBeNull();
      expect(icon).toHaveClass("h-[1.06rem]");
      expect(icon).toHaveClass("w-[1.06rem]");
    });

    fireEvent.click(settingsTrigger);

    const settingsMenu = screen.getByRole("menu", { name: /settings/i });
    expect(settingsMenu).toBeInTheDocument();
    expect(settingsTrigger).toHaveAttribute("aria-expanded", "true");
    expect(settingsTrigger).toHaveAttribute("aria-controls", settingsMenu.id);
    expect(settingsMenu).toHaveAttribute("aria-labelledby", settingsTrigger.id);
    expect(within(settingsMenu).getByRole("menuitem", { name: /theme/i })).toBeInTheDocument();
    expect(within(settingsMenu).getByRole("menuitem", { name: /language/i })).toBeInTheDocument();
    expect(settingsMenu).toHaveTextContent(/light workspace previews/i);
    expect(settingsMenu).toHaveTextContent(/english-first public shell/i);

    const literatureNodeWrapper = literatureNode.parentElement;
    const dataMiningNodeWrapper = dataMiningNode.parentElement;
    const outcomeNodeWrapper = outcomeNode.parentElement;

    expect(literatureNodeWrapper?.className).toContain("left-[43.4%]");
    expect(dataMiningNodeWrapper?.className).toContain("left-[43.9%]");
    expect(outcomeNodeWrapper?.className).toContain("right-[10.2%]");
    expect(literatureNodeWrapper?.parentElement?.querySelector("span[class*='w-[15.7%]']")).not.toBeNull();
    expect(dataMiningNodeWrapper?.parentElement?.querySelector("span[class*='w-[15.65%]']")).not.toBeNull();
    expect(outcomeNodeWrapper?.parentElement?.querySelector("span[class*='w-[15.45%]']")).not.toBeNull();
    expect(literatureNodeWrapper).toHaveClass("relative");
    expect(dataMiningNodeWrapper).toHaveClass("relative");
    expect(outcomeNodeWrapper).toHaveClass("relative");
    expect(literatureNodeWrapper).toHaveClass("items-center");
    expect(dataMiningNodeWrapper).toHaveClass("items-center");
    expect(outcomeNodeWrapper).toHaveClass("items-center");
    expect(literatureNodeWrapper).toHaveClass("gap-[1.02rem]");
    expect(dataMiningNodeWrapper).toHaveClass("gap-[1.02rem]");
    expect(outcomeNodeWrapper).toHaveClass("gap-[1.02rem]");
    expect(literatureNode).not.toHaveAttribute("aria-label");
    expect(dataMiningNode).not.toHaveAttribute("aria-label");
    expect(outcomeNode).not.toHaveAttribute("aria-label");
    expect(literatureNode.firstElementChild).toHaveClass("h-[4.9rem]");
    expect(dataMiningNode.firstElementChild).toHaveClass("h-[4.78rem]");
    expect(outcomeNode.firstElementChild).toHaveClass("h-[4.78rem]");

    fireEvent.click(dataMiningNode);
    expect(within(landingHero).getByRole("heading", { name: /intelligent data visualization/i })).toBeInTheDocument();
    fireEvent.click(outcomeNode);
    expect(within(landingHero).getByRole("heading", { name: /multi-format research output/i })).toBeInTheDocument();
    fireEvent.click(literatureNode);
    expect(within(landingHero).getByRole("heading", { name: /deep literature analysis/i })).toBeInTheDocument();

    const chartLabels = within(landingHero).getAllByText(/^(方法论|结论|数据)$/i).slice(-3);
    expect(chartLabels).toHaveLength(3);
    chartLabels.forEach((label) => {
      const labelWrapper = label.parentElement;
      expect(labelWrapper).not.toBeNull();
      expect(labelWrapper).toHaveClass("min-h-[9.46rem]");
      expect(labelWrapper).toHaveClass("leading-[1.2]");
      expect(label).toHaveClass("max-w-[11.24rem]");
      expect(label).toHaveClass("text-balance");
    });

    const chartRow = chartLabels[0]?.closest("div[class*='grid-cols-3']");
    expect(chartRow).not.toBeNull();
    expect(chartRow).toHaveClass("grid-cols-3");
    expect(chartRow?.childElementCount).toBe(3);
    expect(chartRow).toHaveClass("gap-[4.52rem]");
    expect(chartRow).toHaveClass("sm:gap-[4.68rem]");

    const literatureNodeLabel = screen.getByText(/^literature analysis$/i);
    const dataMiningNodeLabel = screen.getByText(/^data mining$/i);
    const outcomeNodeLabel = screen.getByText(/^outcome present$/i);
    expect(literatureNodeLabel.parentElement).toBe(literatureNodeWrapper);
    expect(dataMiningNodeLabel.parentElement).toBe(dataMiningNodeWrapper);
    expect(outcomeNodeLabel.parentElement).toBe(outcomeNodeWrapper);
    expect(literatureNodeLabel).toHaveClass("text-[10.8px]");
    expect(literatureNodeLabel).toHaveClass("leading-[2.06]");
    expect(literatureNodeLabel).toHaveClass("tracking-[0.03em]");
    expect(literatureNodeLabel).toHaveClass("max-w-[77px]");
    expect(literatureNodeLabel).toHaveClass("left-[-4.55rem]");
    expect(literatureNodeLabel).toHaveClass("top-[0.18rem]");
    expect(literatureNodeLabel).toHaveClass("text-left");
    expect(dataMiningNodeLabel).toHaveClass("max-w-[82px]");
    expect(dataMiningNodeLabel).toHaveClass("left-1/2");
    expect(dataMiningNodeLabel).toHaveClass("-translate-x-1/2");
    expect(dataMiningNodeLabel).toHaveClass("text-center");
    expect(dataMiningNodeLabel).toHaveClass("top-[calc(100%+0.88rem)]");
    expect(outcomeNodeLabel).toHaveClass("max-w-[84px]");
    expect(outcomeNodeLabel).toHaveClass("left-[4.3rem]");
    expect(outcomeNodeLabel).toHaveClass("top-[0.18rem]");
    expect(outcomeNodeLabel).toHaveClass("text-left");

    const getStartedButton = within(landingHero).getByRole("button", { name: /^get started$/i });
    expect(
      within(landingHero).getByText(
        /upload a pdf, and sciclaw automatically extracts the core arguments, research methods, and key data/i,
      ),
    ).toBeInTheDocument();
    expect(getStartedButton).toBeInTheDocument();
    const getStartedIcon = getStartedButton.querySelector("svg");
    expect(getStartedIcon).not.toBeNull();
    expect(getStartedIcon).toHaveClass("h-3.5");
    expect(getStartedIcon).toHaveClass("w-3.5");
    expect(getStartedButton).toHaveClass("flex-col");
    expect(getStartedButton).toHaveClass("gap-1");
    expect(getStartedButton).toHaveClass("font-mono");
    expect(getStartedButton).toHaveClass("tracking-[0.12em]");

    fireEvent.click(getStartedButton);

    expect(within(landingHero).getByRole("heading", { name: /intelligent data visualization/i })).toBeInTheDocument();
    expect(
      within(landingHero).getByText(
        /upload experimental data in batches, and sciclaw automatically performs statistical testing, trend analysis, and chart generation/i,
      ),
    ).toBeInTheDocument();
    expect(within(landingHero).getByTestId("feature-node-data-mining")).toBeInTheDocument();
    expect(within(landingHero).getByText(/^Q1$/i)).toBeInTheDocument();
    expect(within(landingHero).getByText(/^Q2$/i)).toBeInTheDocument();
    expect(within(landingHero).getByText(/^Q3$/i)).toBeInTheDocument();
    expect(within(landingHero).getByText(/^Q4$/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /automated report generation/i })).toBeInTheDocument();
    expect(screen.getByText(/^01 \/ 04$/i)).toBeInTheDocument();
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
    const bestCasesHeading = screen.getByRole("heading", { name: /best\s*cases/i });
    const bestCasesSection = bestCasesHeading.closest("section");

    expect(bestCasesSection).toHaveTextContent(
      /automatically integrates historical tasks, literature, and experimental data into clear, presentation-ready materials/i,
    );
    expect(screen.getByText(/^01 \/ 04$/i)).toBeInTheDocument();

    expect(bestCasesSection).toHaveClass("mt-[1.95rem]");
    expect(bestCasesSection).toHaveClass("sm:mt-[2.35rem]");

    fireEvent.click(screen.getByRole("button", { name: /next/i }));

    expect(screen.getByRole("heading", { name: /peer review response support/i })).toBeInTheDocument();
    expect(bestCasesSection).toHaveTextContent(
      /automatically retrieves relevant data, manuscript content, and past task records in response to reviewer comments, helping researchers quickly draft evidence-based replies/i,
    );
    expect(screen.getByText(/^02 \/ 04$/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /previous/i }));

    expect(screen.getByRole("heading", { name: /automated report generation/i })).toBeInTheDocument();
    expect(screen.getByText(/^01 \/ 04$/i)).toBeInTheDocument();
  });
});
