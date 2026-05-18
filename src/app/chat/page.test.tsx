import { fireEvent, render, screen, within } from "@testing-library/react";
import ChatPage from "@/app/chat/page";

describe("Chat route public landing clone", () => {
  it("renders the same marketing landing shell as the public live /chat route on fresh load", () => {
    render(<ChatPage />);

    const centerNode = screen.getByTestId("feature-node-center");

    expect(screen.getByRole("heading", { name: /sci\s*claw/i })).toBeInTheDocument();
    const headerWordmark = screen.getByTestId("landing-header-wordmark");
    expect(headerWordmark).toHaveTextContent(/^SciClaw$/);
    expect(headerWordmark).toHaveClass("text-[0.98rem]");
    expect(headerWordmark).toHaveClass("sm:text-[1.04rem]");
    expect(screen.getAllByText(/ai co-worker for scientific research\./i).length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByText(
        /sciclaw connects inspiration generation, experimental execution, and iterative optimization/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /user guide/i })).toHaveClass("border-[rgba(15,23,42,0.16)]");
    expect(screen.getByRole("button", { name: /user guide/i })).toHaveClass("bg-white");
    expect(screen.getByRole("button", { name: /contact us/i })).toHaveClass("border-[rgba(15,23,42,0.16)]");
    expect(screen.getByRole("button", { name: /settings/i })).not.toHaveClass("shadow-[0_12px_26px_rgba(15,23,42,0.08)]");
    const utilityRow = screen.getByTestId("landing-utility-row");
    expect(utilityRow).toHaveClass("gap-[0.52rem]");
    expect(utilityRow).toHaveClass("pr-[1.26rem]");
    expect(utilityRow).toHaveClass("sm:gap-[0.68rem]");
    expect(utilityRow).toHaveClass("sm:pr-[1.3rem]");
    expect(screen.getByText(/enter your access code to begin/i)).toBeInTheDocument();
    const onboardAccessCode = screen.getByPlaceholderText("SC-XXXXXXXX");
    expect(onboardAccessCode).toHaveAttribute("placeholder", "SC-XXXXXXXX");
    expect(onboardAccessCode).toHaveValue("");
    const bodyLabel = screen.getByText(/^autonomous research$/i);
    const methodLabel = screen.getByText(/^方法论$/i);
    const chatGetStartedButton = screen.getByRole("button", { name: /^get started$/i });
    expect(bodyLabel.tagName).toBe("SPAN");
    expect(bodyLabel.compareDocumentPosition(methodLabel) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(chatGetStartedButton).toHaveClass("group");
    expect(chatGetStartedButton).toHaveClass("absolute");
    expect(chatGetStartedButton).toHaveClass("bottom-3");
    expect(chatGetStartedButton).toHaveClass("flex-col");
    expect(chatGetStartedButton).toHaveClass("gap-1");
    expect(chatGetStartedButton).toHaveClass("font-mono");
    expect(chatGetStartedButton).toHaveClass("tracking-[0.12em]");
    expect(chatGetStartedButton).toHaveClass("text-muted-foreground/50");
    const chatHero = screen.getByTestId("landing-hero");
    const chatAuthCard = screen.getByTestId("landing-auth-card");
    const chatPreviewCard = screen.getByTestId("feature-preview-card");
    expect(chatHero).toHaveClass("lg:-mt-[1.68rem]");
    expect(chatHero).toHaveClass("lg:pb-[0.72rem]");
    expect(chatHero).toHaveClass("xl:pb-[0.96rem]");
    expect(chatHero).not.toHaveClass("lg:grid-cols-[minmax(0,1fr)_232px]");
    expect(chatHero).toHaveClass("gap-3");
    const chatFeatureRotator = screen.getByTestId("feature-rotator");
    expect(chatFeatureRotator).toHaveClass("lg:items-start");
    const authColumn = screen.getByTestId("feature-auth-wrapper");
    expect(authColumn).not.toBeNull();
    expect(chatFeatureRotator).toHaveClass("lg:grid-cols-[minmax(0,328px)_minmax(0,1fr)]");
    expect(chatFeatureRotator).toHaveClass("lg:gap-[0.06rem]");
    expect(chatFeatureRotator).toHaveClass("xl:grid-cols-[minmax(0,342px)_minmax(0,1fr)]");
    expect(chatFeatureRotator).toHaveClass("xl:gap-[0.1rem]");
    const chatFeaturePreview = chatPreviewCard.parentElement;
    const bestCasesSection = screen.getByTestId("best-cases-section");
    expect(chatFeaturePreview).not.toBeNull();
    expect(chatFeaturePreview).not.toHaveClass("lg:grid");
    expect(chatFeaturePreview).not.toHaveClass("lg:grid-cols-[minmax(0,1fr)_218px]");
    expect(chatFeaturePreview).not.toHaveClass("lg:items-start");
    expect(chatFeaturePreview).not.toHaveClass("lg:gap-x-[0.02rem]");
    expect(chatFeaturePreview).not.toHaveClass("lg:gap-y-[0.64rem]");
    expect(chatFeaturePreview).not.toHaveClass("xl:grid-cols-[minmax(0,1fr)_218px]");
    expect(chatFeaturePreview).not.toHaveClass("xl:gap-x-[0.04rem]");
    expect(chatFeaturePreview).not.toHaveClass("xl:gap-y-[0.72rem]");
    expect(chatAuthCard.firstElementChild?.firstElementChild).toHaveClass("rounded-[0.78rem]");
    const chatPreviewHeadingBlock = chatPreviewCard.parentElement?.firstElementChild;
    expect(chatPreviewHeadingBlock).not.toBeNull();
    expect(chatPreviewHeadingBlock).toHaveClass("order-1");
    expect(chatPreviewHeadingBlock).not.toHaveClass("lg:col-span-2");
    expect(chatPreviewCard).toHaveClass("order-2");
    expect(chatPreviewCard).not.toHaveClass("lg:col-start-1");
    expect(chatPreviewCard).not.toHaveClass("lg:row-start-2");
    expect(authColumn).toHaveClass("order-3");
    expect(authColumn).toHaveClass("mx-auto");
    expect(authColumn).toHaveClass("-mt-[2.34rem]");
    expect(authColumn).toHaveClass("w-full");
    expect(authColumn).toHaveClass("max-w-[228px]");
    expect(authColumn).toHaveClass("sm:max-w-[240px]");
    expect(authColumn).toHaveClass("lg:ml-auto");
    expect(authColumn).toHaveClass("lg:mr-[0.48rem]");
    expect(authColumn).toHaveClass("lg:-mt-[17.18rem]");
    expect(authColumn).toHaveClass("lg:max-w-[292px]");
    expect(authColumn).toHaveClass("xl:mr-[0.68rem]");
    expect(authColumn).toHaveClass("xl:-mt-[17.52rem]");
    expect(authColumn).toHaveClass("xl:max-w-[312px]");
    expect(bestCasesSection).toHaveClass("lg:mt-[5.4rem]");
    expect(bestCasesSection).toHaveClass("xl:mt-[5.74rem]");
    expect(authColumn).not.toHaveClass("max-w-[232px]");
    expect(authColumn).not.toHaveClass("sm:max-w-[244px]");
    expect(authColumn).not.toHaveClass("lg:mr-[0.54rem]");
    expect(authColumn).not.toHaveClass("xl:mr-[0.74rem]");
    expect(authColumn).not.toHaveClass("lg:-mt-[17.04rem]");
    expect(authColumn).not.toHaveClass("xl:-mt-[17.38rem]");
    expect(authColumn).not.toHaveClass("lg:max-w-[296px]");
    expect(authColumn).not.toHaveClass("xl:max-w-[316px]");
    expect(authColumn).not.toHaveClass("lg:col-start-2");
    expect(authColumn).not.toHaveClass("lg:row-start-2");
    expect(authColumn).not.toHaveClass("lg:max-w-[14.12rem]");
    expect(authColumn).not.toHaveClass("xl:-ml-[0.03rem]");
    expect(authColumn).not.toHaveClass("xl:mt-[0.24rem]");
    expect(chatPreviewHeadingBlock).toHaveClass("relative");
    expect(chatPreviewHeadingBlock).toHaveClass("space-y-[0.62rem]");
    expect(chatPreviewHeadingBlock).toHaveClass("pb-[2.9rem]");
    expect(chatPreviewHeadingBlock).toHaveClass("pt-[0.08rem]");
    expect(chatPreviewHeadingBlock).toHaveClass("lg:max-w-[35.4rem]");
    const chatPreviewDescription = within(chatPreviewHeadingBlock as HTMLElement).getByText(
      /upload a pdf, and sciclaw automatically extracts the core arguments, research methods, and key data/i,
    );
    expect(chatPreviewDescription).toHaveClass("max-w-[31.4rem]");
    expect(chatPreviewDescription).toHaveClass("leading-[1.82]");
    expect(chatPreviewDescription).toHaveClass("sm:text-[0.99rem]");
    expect(chatGetStartedButton).toHaveClass("group");
    expect(chatGetStartedButton).toHaveClass("absolute");
    expect(chatGetStartedButton).toHaveClass("bottom-3");
    expect(chatGetStartedButton).toHaveClass("flex-col");
    expect(chatGetStartedButton).toHaveClass("gap-1");
    expect(chatGetStartedButton).toHaveClass("font-mono");
    expect(chatGetStartedButton).toHaveClass("tracking-[0.12em]");
    expect(chatGetStartedButton).toHaveClass("text-muted-foreground/50");
    const chatNetworkShell = screen.getByTestId("feature-network-shell");
    const chatNetworkShellFrame = chatFeatureRotator.firstElementChild;
    expect(chatNetworkShell).toHaveClass("overflow-visible");
    expect(chatNetworkShellFrame).not.toBeNull();
    expect(chatNetworkShellFrame).toHaveClass("overflow-visible");
    expect(chatNetworkShellFrame).toHaveClass("pl-[0.34rem]");
    expect(chatNetworkShellFrame).toHaveClass("sm:pl-[0.4rem]");
    expect(chatNetworkShellFrame).toHaveClass("lg:pl-[0.42rem]");
    expect(chatNetworkShellFrame).toHaveClass("xl:pl-[0.5rem]");
    expect(chatNetworkShellFrame).toHaveClass("lg:-mt-[0.28rem]");
    expect(chatNetworkShellFrame).toHaveClass("lg:-mr-[0.08rem]");
    expect(chatNetworkShellFrame).toHaveClass("xl:-mt-[0.38rem]");
    expect(chatNetworkShellFrame).toHaveClass("xl:-mr-[0.12rem]");
    expect(within(chatHero).getByTestId("feature-node-literature-analysis").parentElement?.className).toContain("left-[43.1%]");
    expect(within(chatHero).getByTestId("feature-node-data-mining").parentElement?.className).toContain("left-[42.9%]");
    expect(within(chatHero).getByTestId("feature-node-outcome-present").parentElement?.className).toContain("right-[14.2%]");
    expect(within(chatHero).getByText(/^literature analysis$/i)).toHaveClass("max-w-[128px]");
    expect(within(chatHero).getByText(/^literature analysis$/i)).toHaveClass("whitespace-nowrap");
    expect(within(chatHero).getByText(/^literature analysis$/i)).toHaveClass("left-[-1.96rem]");
    expect(within(chatHero).getByText(/^literature analysis$/i)).toHaveClass("top-[0.34rem]");
    expect(within(chatHero).getByText(/^data mining$/i)).toHaveClass("max-w-[130px]");
    expect(within(chatHero).getByText(/^data mining$/i)).toHaveClass("whitespace-nowrap");
    expect(within(chatHero).getByText(/^data mining$/i)).toHaveClass("top-[calc(100%+0.02rem)]");
    expect(within(chatHero).getByText(/^outcome present$/i)).toHaveClass("max-w-[136px]");
    expect(within(chatHero).getByText(/^outcome present$/i)).toHaveClass("whitespace-nowrap");
    expect(within(chatHero).getByText(/^outcome present$/i)).toHaveClass("left-[1.78rem]");
    expect(within(chatHero).getByText(/^outcome present$/i)).toHaveClass("top-[0.38rem]");
    expect(within(chatHero).getByText(/^outcome present$/i)).not.toHaveClass("-translate-y-1/2");
    expect(within(chatHero).getByText(/^outcome present$/i)).toHaveClass("sm:left-[1.86rem]");
    expect(within(chatHero).getByText(/^literature analysis$/i)).toHaveClass("sm:left-[-2.04rem]");
    expect(within(chatHero).getByTestId("feature-node-literature-analysis").parentElement).toHaveClass("inline-flex");
    expect(within(chatHero).getByTestId("feature-node-data-mining").parentElement).toHaveClass("inline-flex");
    expect(within(chatHero).getByTestId("feature-node-outcome-present").parentElement).toHaveClass("inline-flex");
    expect(within(chatHero).getByTestId("feature-node-literature-analysis").firstElementChild).toHaveClass("h-[4.74rem]");
    expect(within(chatHero).getByTestId("feature-node-data-mining").firstElementChild).toHaveClass("h-[4.58rem]");
    expect(within(chatHero).getByTestId("feature-node-outcome-present").firstElementChild).toHaveClass("h-[4.58rem]");
    expect(chatHero.querySelector("span[class*='w-[15.6%]']")).not.toBeNull();
    expect(chatHero.querySelector("span[class*='w-[16.2%]']")).not.toBeNull();
    expect(chatHero.querySelector("span[class*='w-[8.9%]'][class*='top-[27.54%]'][class*='rotate-[10deg]']")).not.toBeNull();
    expect(chatHero).not.toHaveClass("xl:grid-cols-[minmax(0,1.08fr)_232px]");
    expect(chatAuthCard).toHaveClass("max-w-[212px]");
    expect(chatAuthCard).toHaveClass("lg:max-w-[468px]");
    expect(chatAuthCard).toHaveClass("xl:max-w-[484px]");
    expect(chatAuthCard).toHaveClass("rounded-[0.74rem]");
    expect(chatAuthCard).toHaveClass("border-[rgba(226,232,239,0.94)]");
    expect(chatAuthCard).toHaveClass("bg-[linear-gradient(180deg,rgba(255,255,255,0.986)_0%,rgba(249,245,239,0.82)_100%)]");
    expect(chatAuthCard).toHaveClass("shadow-[0_10px_22px_rgba(15,23,42,0.04),0_3px_7px_rgba(241,180,135,0.042)]");
    expect(chatAuthCard).toHaveClass("backdrop-blur-[4px]");
    expect(chatAuthCard).toHaveClass("mx-auto");
    expect(chatAuthCard.firstElementChild).toHaveClass("max-w-[244px]");
    expect(chatAuthCard.firstElementChild).toHaveClass("lg:max-w-[472px]");
    expect(chatAuthCard.firstElementChild).toHaveClass("xl:max-w-[488px]");
    expect(chatAuthCard.firstElementChild?.firstElementChild).toHaveClass("rounded-[0.78rem]");
    expect(chatAuthCard).not.toHaveClass("max-w-[220px]");
    expect(chatAuthCard).not.toHaveClass("lg:max-w-[480px]");
    expect(chatAuthCard).not.toHaveClass("xl:max-w-[496px]");
    expect(chatPreviewCard).toHaveClass("border-[rgba(176,190,204,0.98)]");
    expect(chatPreviewCard).toHaveClass("bg-[linear-gradient(180deg,#f9f2e8_0%,#d5e0ea_100%)]");
    expect(chatPreviewCard).toHaveClass("shadow-[0_30px_60px_rgba(15,23,42,0.17)]");
    const chatPreviewLabelRow = screen.getByTestId("feature-preview-chart-label-row");
    expect(chatPreviewLabelRow).toHaveClass("mt-[1.46rem]");
    expect(chatPreviewLabelRow).toHaveClass("gap-[2.18rem]");
    expect(chatPreviewLabelRow).toHaveClass("pt-[1.12rem]");
    const chatPreviewLabelItems = Array.from(chatPreviewLabelRow.children);
    expect(chatPreviewLabelItems).toHaveLength(3);
    chatPreviewLabelItems.forEach((item) => {
      expect(item).toHaveClass("gap-[0.68rem]");
      const labelWrapper = item.lastElementChild;
      expect(labelWrapper).not.toBeNull();
      expect(labelWrapper).toHaveClass("min-h-[2.92rem]");
      const labelText = labelWrapper?.firstElementChild;
      expect(labelText).not.toBeNull();
      expect(labelText).toHaveClass("max-w-[5.5rem]");
    });
    expect(chatGetStartedButton.querySelector("svg")).not.toBeNull();
    expect(centerNode).not.toHaveAccessibleName();
    expect(screen.queryByText(/^AI$/)).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toBeDisabled();
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("bg-[linear-gradient(180deg,#f6ebe0_0%,#efe0d2_100%)]");
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("text-[#6b5d52]");
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("border-[rgba(233,212,194,0.98)]");
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("whitespace-nowrap");
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("px-[0.92rem]");
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("text-[0.72rem]");
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("tracking-[0.14em]");
    expect(screen.getByRole("heading", { name: /best cases/i })).toBeInTheDocument();
    expect(bestCasesSection).toHaveClass("mt-[2.52rem]");
    expect(bestCasesSection).toHaveClass("sm:mt-[2.96rem]");
    expect(bestCasesSection).toHaveClass("lg:mt-[5.4rem]");
    expect(bestCasesSection).toHaveClass("xl:mt-[5.74rem]");
    expect(bestCasesSection.firstElementChild).toHaveClass("mb-[2.12rem]");
    expect(screen.getByRole("heading", { name: /automated report generation/i })).toBeInTheDocument();
    expect(screen.getByText(/^01 \/ 04$/i)).toBeInTheDocument();
    const previousButton = screen.getByRole("button", { name: /^previous$/i });
    const nextButton = screen.getByRole("button", { name: /^next$/i });
    expect(previousButton.querySelector("svg")).not.toBeNull();
    expect(nextButton.querySelector("svg")).not.toBeNull();
  });
  it("opens the inline early-access apply flow and keeps the current live apply-now hero/case state on /chat", () => {
    render(<ChatPage />);

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

  it("keeps live-like top utility menus and login interactions reachable on /chat", () => {
    render(<ChatPage />);

    const utilityRow = screen.getByTestId("landing-utility-row");
    expect(screen.queryByRole("navigation", { name: /primary/i })).not.toBeInTheDocument();

    fireEvent.click(within(utilityRow).getByRole("button", { name: /user guide/i }));
    expect(screen.getByRole("menu", { name: /user guide/i })).toBeInTheDocument();

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

    fireEvent.click(screen.getByRole("tab", { name: /login/i }));
    expect(screen.getByRole("textbox", { name: /email address/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /enter laboratory/i })).toBeDisabled();
  });

  it("keeps the live /chat marketing-landing get-started behavior by advancing the hero feature instead of routing away", () => {
    render(<ChatPage />);

    expect(screen.getByRole("heading", { name: /deep literature analysis/i })).toBeInTheDocument();
    expect(screen.getByText(/^01 \/ 04$/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /^get started$/i }));

    expect(screen.getByRole("heading", { name: /intelligent data visualization/i })).toBeInTheDocument();
    expect(
      screen.getByText(
        /upload experimental data in batches, and sciclaw automatically performs statistical testing, trend analysis, and chart generation/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByTestId("feature-node-data-mining")).toBeInTheDocument();
    expect(screen.getByText(/^Q1$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Q2$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Q3$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Q4$/i)).toBeInTheDocument();
    expect(screen.queryByText(/^33%$/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /autonomous experiment execution/i })).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /automated report generation/i })).toBeInTheDocument();
    expect(screen.getByText(/^01 \/ 04$/i)).toBeInTheDocument();
  });
});
