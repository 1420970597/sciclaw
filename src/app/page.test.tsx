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
    expect(heroScope.queryByRole("img")).not.toBeInTheDocument();
    expect(heroScope.queryByText(/33%/i)).not.toBeInTheDocument();
    expect(heroScope.queryByRole("heading", { name: /autonomous experiment execution/i })).not.toBeInTheDocument();
  });

  it("renders the public-inspired landing structure", () => {
    render(<Home />);

    const featureRotator = screen.getByTestId("feature-rotator");
    expect(screen.queryByRole("button", { name: /^autonomous execution$/i })).not.toBeInTheDocument();
    expect(featureRotator).toHaveClass("lg:grid-cols-[minmax(0,328px)_minmax(0,1fr)]");
    expect(featureRotator).toHaveClass("lg:items-start");
    expect(featureRotator).toHaveClass("lg:gap-[0.08rem]");
    expect(featureRotator).toHaveClass("xl:grid-cols-[minmax(0,342px)_minmax(0,1fr)]");
    expect(featureRotator).toHaveClass("xl:gap-[0.12rem]");
    const networkShell = screen.getByTestId("feature-network-shell");
    const networkShellFrame = featureRotator.firstElementChild;
    expect(networkShell).toHaveClass("overflow-visible");
    expect(networkShellFrame).not.toBeNull();
    expect(networkShellFrame).toHaveClass("overflow-visible");
    expect(networkShellFrame).toHaveClass("pl-[0.18rem]");
    expect(networkShellFrame).toHaveClass("lg:pl-[0.2rem]");
    expect(networkShellFrame).toHaveClass("xl:pl-[0.24rem]");
    expect(networkShellFrame).toHaveClass("lg:-mt-[2.32rem]");
    expect(networkShellFrame).toHaveClass("lg:mr-0");
    expect(networkShellFrame).toHaveClass("xl:-mt-[2.56rem]");
    expect(networkShellFrame).toHaveClass("xl:-mr-[0.02rem]");
    expect(screen.getByRole("heading", { name: /sci\s*claw/i })).toBeInTheDocument();
    const headerWordmark = screen.getByTestId("landing-header-wordmark");
    expect(headerWordmark).toHaveTextContent(/^SciClaw$/);
    expect(headerWordmark).toHaveClass("text-[0.98rem]");
    expect(headerWordmark).toHaveClass("sm:text-[1.04rem]");
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
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("bg-[linear-gradient(180deg,#f6ebe0_0%,#efe0d2_100%)]");
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("text-[#6b5d52]");
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("border-[rgba(233,212,194,0.98)]");
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("whitespace-nowrap");
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("text-[0.76rem]");
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("tracking-[0.06em]");
    expect(screen.getByRole("button", { name: /^get started$/i })).toBeInTheDocument();
    expect(utilityRow).toBeInTheDocument();
    expect(utilityRow).toHaveClass("gap-[0.56rem]");
    expect(utilityRow).toHaveClass("pr-[1.38rem]");
    expect(utilityRow).toHaveClass("sm:gap-[0.72rem]");
    expect(utilityRow).toHaveClass("sm:pr-[1.42rem]");
    expect(screen.getByRole("heading", { name: /best\s*cases/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /automated report generation/i })).toBeInTheDocument();
    expect(screen.getByText(/^01 \/ 04$/i)).toBeInTheDocument();

    const hero = screen.getByTestId("landing-hero");
    const authCard = screen.getByTestId("landing-auth-card");
    const previewCard = screen.getByTestId("feature-preview-card");
    expect(hero).toHaveClass("lg:-mt-[2.38rem]");
    const authColumn = featureRotator.lastElementChild?.querySelector('[data-testid="landing-auth-card"]')?.parentElement;
    expect(authColumn).not.toBeNull();
    expect(featureRotator).toHaveClass("lg:grid-cols-[minmax(0,328px)_minmax(0,1fr)]");
    expect(featureRotator).toHaveClass("xl:grid-cols-[minmax(0,342px)_minmax(0,1fr)]");
    const featurePreview = previewCard.parentElement;
    expect(featurePreview).not.toBeNull();
    expect(featurePreview).toHaveClass("lg:grid");
    expect(featurePreview).toHaveClass("lg:grid-cols-[minmax(0,1fr)_224px]");
    expect(featurePreview).toHaveClass("lg:items-start");
    expect(featurePreview).toHaveClass("lg:gap-x-[0.04rem]");
    expect(featurePreview).toHaveClass("lg:gap-y-[0.72rem]");
    expect(featurePreview).toHaveClass("xl:grid-cols-[minmax(0,1fr)_224px]");
    expect(featurePreview).toHaveClass("xl:gap-x-[0.08rem]");
    expect(featurePreview).toHaveClass("xl:gap-y-[0.8rem]");
    const previewHeadingBlock = previewCard.parentElement?.firstElementChild;
    expect(previewHeadingBlock).not.toBeNull();
    expect(previewHeadingBlock).toHaveClass("lg:order-1");
    expect(previewHeadingBlock).toHaveClass("lg:col-span-2");
    expect(previewCard).toHaveClass("lg:order-3");
    expect(previewCard).toHaveClass("lg:col-start-1");
    expect(previewCard).toHaveClass("lg:row-start-2");
    expect(authColumn).toHaveClass("-mt-[0.02rem]");
    expect(authColumn).toHaveClass("lg:-ml-[0.08rem]");
    expect(authColumn).toHaveClass("lg:order-2");
    expect(authColumn).toHaveClass("lg:col-start-2");
    expect(authColumn).toHaveClass("lg:row-start-2");
    expect(authColumn).toHaveClass("lg:mt-[0.4rem]");
    expect(authColumn).toHaveClass("xl:-ml-[0.04rem]");
    expect(authColumn).toHaveClass("xl:mt-[0.48rem]");
    expect(authColumn).toHaveClass("lg:ml-auto");
    const previewHeadingBlockCopy = featurePreview?.firstElementChild;
    expect(previewHeadingBlockCopy).toHaveClass("space-y-[0.62rem]");
    expect(previewHeadingBlockCopy).toHaveClass("pt-[0.08rem]");
    expect(previewHeadingBlockCopy).toHaveClass("lg:max-w-[35.4rem]");
    const previewDescription = within(previewHeadingBlockCopy as HTMLElement).getByText(
      /upload a pdf, and sciclaw automatically extracts the core arguments, research methods, and key data/i,
    );
    expect(previewDescription).toHaveClass("max-w-[31.4rem]");
    expect(previewDescription).toHaveClass("leading-[1.82]");
    expect(previewDescription).toHaveClass("sm:text-[0.99rem]");
    expect(screen.getByRole("button", { name: /^get started$/i })).toHaveClass("pt-[0.18rem]");
    expect(hero).not.toHaveClass("lg:grid-cols-[minmax(0,1fr)_232px]");
    expect(hero).toHaveClass("gap-4");
    expect(hero).toHaveClass("grid");
    expect(authCard).toHaveClass("max-w-[214px]");
    expect(authCard).toHaveClass("rounded-[1rem]");
    expect(authCard).toHaveClass("border-[rgba(244,247,250,0.98)]");
    expect(authCard).toHaveClass("bg-[linear-gradient(180deg,rgba(255,255,255,0.995)_0%,rgba(252,248,243,0.928)_100%)]");
    expect(authCard).toHaveClass("shadow-[0_2px_5px_rgba(15,23,42,0.01),0_1px_2px_rgba(241,180,135,0.004)]");
    expect(authCard).toHaveClass("backdrop-blur-[0.54px]");
    expect(authCard).not.toHaveClass("lg:mt-[2.16rem]");
    expect(authCard).not.toHaveClass("xl:mt-[2.3rem]");
    expect(previewCard).toHaveClass("rounded-[2.08rem]");
    expect(previewCard).toHaveClass("border-[rgba(231,236,242,0.96)]");
    expect(previewCard).toHaveClass("bg-[linear-gradient(180deg,#ffffff_0%,#f4f6f9_100%)]");
    expect(previewCard).toHaveClass("shadow-[0_22px_46px_rgba(15,23,42,0.088)]");
    const previewLabelRow = screen.getByTestId("feature-preview-chart-label-row");
    expect(previewLabelRow).toHaveClass("mt-[2.06rem]");
    expect(previewLabelRow).toHaveClass("gap-[2.58rem]");
    expect(previewLabelRow).toHaveClass("pt-[1.82rem]");
    const previewLabelItems = Array.from(previewLabelRow.children);
    expect(previewLabelItems).toHaveLength(3);
    previewLabelItems.forEach((item) => {
      expect(item).toHaveClass("gap-[0.82rem]");
      const labelWrapper = item.lastElementChild;
      expect(labelWrapper).not.toBeNull();
      expect(labelWrapper).toHaveClass("min-h-[3.54rem]");
      const labelText = labelWrapper?.firstElementChild;
      expect(labelText).not.toBeNull();
      expect(labelText).toHaveClass("max-w-[5.72rem]");
    });
  });

  it("opens the inline early-access apply flow and keeps the current live apply-now hero/case state", () => {
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
    expect(within(landingHero).getByRole("heading", { name: /multi-format research output/i })).toBeInTheDocument();
    expect(within(landingHero).getByText(/^PPT$/i)).toBeInTheDocument();
    expect(within(landingHero).getByText(/^PDF$/i)).toBeInTheDocument();
    expect(within(landingHero).getByText(/^CSV$/i)).toBeInTheDocument();
    expect(within(landingHero).getByText(/^DOCX$/i)).toBeInTheDocument();
    expect(within(bestCasesSection as HTMLElement).getByRole("heading", { name: /automated report generation/i })).toBeInTheDocument();
    expect(within(bestCasesSection as HTMLElement).getByText(/^01 \/ 04$/i)).toBeInTheDocument();
    expect(within(bestCasesSection as HTMLElement).queryByRole("heading", { name: /peer review response support/i })).not.toBeInTheDocument();
    expect(within(bestCasesSection as HTMLElement).queryByText(/^02 \/ 04$/i)).not.toBeInTheDocument();
    expect(bestCasesSection as HTMLElement).toHaveTextContent(
      /automatically integrates historical tasks, literature, and experimental data into clear, presentation-ready materials/i,
    );
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
    const guideTrigger = within(utilityRow).getByRole("button", { name: /user guide/i });
    const contactTrigger = within(utilityRow).getByRole("button", { name: /contact us/i });
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
    expect(triggerRow).toHaveClass("gap-[0.42rem]");
    expect(triggerRow).toHaveClass("sm:gap-[0.53rem]");
    expect(triggerRow).toHaveClass("gap-[0.3rem]");
    expect(triggerRow).toHaveClass("sm:gap-[0.38rem]");
    expect(settingsTrigger).toHaveAttribute("aria-haspopup", "menu");
    expect(utilityRow.parentElement?.parentElement).toHaveClass("pt-[0.46rem]");
    expect(utilityRow.parentElement?.parentElement).toHaveClass("sm:pt-[0.62rem]");
    expect(utilityRow).toHaveClass("pr-[1.38rem]");
    expect(utilityRow).toHaveClass("sm:pr-[1.42rem]");
    [
      guideTrigger,
      contactTrigger,
      settingsTrigger,
    ].forEach((trigger) => {
      expect(trigger).toHaveClass("border-[rgba(15,23,42,0.26)]");
      expect(trigger).toHaveClass("bg-white/82");
      expect(trigger).toHaveClass("text-[#2f3a46]");
      expect(trigger).toHaveClass("shadow-[0_12px_26px_rgba(15,23,42,0.08)]");
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

    expect(literatureNode.parentElement?.className).toContain("left-[47.1%]");
    expect(dataMiningNode.parentElement?.className).toContain("left-[47%]");
    expect(outcomeNode.parentElement?.className).toContain("right-[19.7%]");
    expect(literatureNodeWrapper?.parentElement?.querySelector("span[class*='w-[11.55%]']")).not.toBeNull();
    expect(dataMiningNodeWrapper?.parentElement?.querySelector("span[class*='w-[11.35%]']")).not.toBeNull();
    expect(outcomeNodeWrapper?.parentElement?.querySelector("span[class*='w-[10.6%]']")).not.toBeNull();
    expect(literatureNodeWrapper).toHaveClass("relative");
    expect(dataMiningNodeWrapper).toHaveClass("relative");
    expect(outcomeNodeWrapper).toHaveClass("relative");
    expect(literatureNodeWrapper).toHaveClass("inline-flex");
    expect(dataMiningNodeWrapper).toHaveClass("inline-flex");
    expect(outcomeNodeWrapper).toHaveClass("inline-flex");
    expect(literatureNodeWrapper).toHaveClass("items-center");
    expect(dataMiningNodeWrapper).toHaveClass("items-center");
    expect(outcomeNodeWrapper).toHaveClass("items-center");
    expect(literatureNodeWrapper).toHaveClass("gap-[1.02rem]");
    expect(dataMiningNodeWrapper).toHaveClass("gap-[1.02rem]");
    expect(outcomeNodeWrapper).toHaveClass("gap-[1.02rem]");
    expect(literatureNode).not.toHaveAttribute("aria-label");
    expect(dataMiningNode).not.toHaveAttribute("aria-label");
    expect(outcomeNode).not.toHaveAttribute("aria-label");
    expect(literatureNode.firstElementChild).toHaveClass("h-[5.02rem]");
    expect(dataMiningNode.firstElementChild).toHaveClass("h-[4.96rem]");
    expect(outcomeNode.firstElementChild).toHaveClass("h-[4.96rem]");

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
      expect(labelWrapper).toHaveClass("min-h-[3.54rem]");
      expect(labelWrapper).toHaveClass("text-[11.2px]");
      expect(labelWrapper).toHaveClass("leading-[1.04]");
      expect(labelWrapper).toHaveClass("text-[#6b8191]");
      expect(label).toHaveClass("max-w-[5.72rem]");
      expect(label).toHaveClass("text-balance");
    });

    const chartRow = screen.getByTestId("feature-preview-chart-label-row");
    expect(chartRow).toHaveClass("grid-cols-3");
    expect(chartRow.childElementCount).toBe(3);
    expect(chartRow).toHaveClass("gap-[2.58rem]");
    expect(chartRow).toHaveClass("sm:gap-[2.74rem]");
    expect(chartRow).toHaveClass("mt-[2.06rem]");
    expect(chartRow).toHaveClass("pt-[1.82rem]");

    const literatureNodeLabel = screen.getByText(/^literature analysis$/i);
    const dataMiningNodeLabel = screen.getByText(/^data mining$/i);
    const outcomeNodeLabel = screen.getByText(/^outcome present$/i);
    expect(literatureNodeLabel.parentElement).toBe(literatureNodeWrapper);
    expect(dataMiningNodeLabel.parentElement).toBe(dataMiningNodeWrapper);
    expect(outcomeNodeLabel.parentElement).toBe(outcomeNodeWrapper);
    expect(literatureNodeLabel).toHaveClass("text-[10.8px]");
    expect(literatureNodeLabel).toHaveClass("leading-[2.06]");
    expect(literatureNodeLabel).toHaveClass("tracking-[0.03em]");
    expect(literatureNodeLabel).toHaveClass("max-w-[108px]");
    expect(literatureNodeLabel).toHaveClass("left-[-2.5rem]");
    expect(literatureNodeLabel).toHaveClass("top-[0.32rem]");
    expect(literatureNodeLabel).toHaveClass("text-left");
    expect(literatureNodeLabel).toHaveClass("text-[#5f381d]");
    expect(dataMiningNodeLabel).toHaveClass("max-w-[106px]");
    expect(dataMiningNodeLabel).toHaveClass("left-1/2");
    expect(dataMiningNodeLabel).toHaveClass("-translate-x-1/2");
    expect(dataMiningNodeLabel).toHaveClass("text-center");
    expect(dataMiningNodeLabel).toHaveClass("top-[calc(100%+0.22rem)]");
    expect(dataMiningNodeLabel).toHaveClass("text-[#314d61]");
    expect(outcomeNodeLabel).toHaveClass("max-w-[108px]");
    expect(outcomeNodeLabel).toHaveClass("left-[3.32rem]");
    expect(outcomeNodeLabel).toHaveClass("top-[0.32rem]");
    expect(outcomeNodeLabel).toHaveClass("text-left");
    expect(outcomeNodeLabel).toHaveClass("text-[#314d61]");

    const getStartedButton = within(landingHero).getByRole("button", { name: /^get started$/i });
    expect(
      within(landingHero).getByText(
        /upload a pdf, and sciclaw automatically extracts the core arguments, research methods, and key data/i,
      ),
    ).toBeInTheDocument();
    expect(within(landingHero).getByText(/^autonomous research$/i)).toHaveClass("tracking-[0.24em]");
    expect(within(landingHero).getByRole("heading", { name: /deep literature analysis/i })).toHaveClass("sm:text-[1.88rem]");
    expect(within(landingHero).getByRole("heading", { name: /deep literature analysis/i })).toHaveClass("md:text-[2.02rem]");
    expect(within(landingHero).getByText(/upload a pdf, and sciclaw automatically extracts the core arguments, research methods, and key data/i)).toHaveClass("max-w-[31.4rem]");
    expect(within(landingHero).getByText(/upload a pdf, and sciclaw automatically extracts the core arguments, research methods, and key data/i)).toHaveClass("leading-[1.82]");
    expect(within(landingHero).getByText(/upload a pdf, and sciclaw automatically extracts the core arguments, research methods, and key data/i)).toHaveClass("sm:text-[0.99rem]");
    expect(getStartedButton).toBeInTheDocument();
    expect(getStartedButton.querySelector("svg")).toBeNull();
    expect(getStartedButton).not.toHaveClass("flex-col");
    expect(getStartedButton).not.toHaveClass("gap-1");
    expect(getStartedButton).toHaveClass("font-mono");
    expect(getStartedButton).toHaveClass("pt-[0.18rem]");

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
