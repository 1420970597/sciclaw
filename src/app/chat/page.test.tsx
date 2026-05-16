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
    expect(screen.getByRole("button", { name: /user guide/i })).toHaveClass("border-[rgba(15,23,42,0.26)]");
    expect(screen.getByRole("button", { name: /user guide/i })).toHaveClass("bg-white/82");
    expect(screen.getByRole("button", { name: /contact us/i })).toHaveClass("border-[rgba(15,23,42,0.26)]");
    expect(screen.getByRole("button", { name: /settings/i })).toHaveClass("shadow-[0_12px_26px_rgba(15,23,42,0.08)]");
    const utilityRow = screen.getByTestId("landing-utility-row");
    expect(utilityRow).toHaveClass("gap-[0.56rem]");
    expect(utilityRow).toHaveClass("pr-[1.38rem]");
    expect(utilityRow).toHaveClass("sm:gap-[0.72rem]");
    expect(utilityRow).toHaveClass("sm:pr-[1.42rem]");
    expect(screen.getByText(/enter your access code to begin/i)).toBeInTheDocument();
    const onboardAccessCode = screen.getByPlaceholderText("SC-XXXXXXXX");
    expect(onboardAccessCode).toHaveAttribute("placeholder", "SC-XXXXXXXX");
    expect(onboardAccessCode).toHaveValue("");
    const bodyLabel = screen.getByText(/^autonomous research$/i);
    const methodLabel = screen.getByText(/^方法论$/i);
    const chatGetStartedButton = screen.getByRole("button", { name: /^get started$/i });
    expect(bodyLabel.tagName).toBe("SPAN");
    expect(bodyLabel.compareDocumentPosition(methodLabel) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(chatGetStartedButton).not.toHaveClass("flex-col");
    expect(chatGetStartedButton).not.toHaveClass("gap-1");
    expect(chatGetStartedButton).toHaveClass("font-mono");
    expect(chatGetStartedButton).toHaveClass("tracking-[0.12em]");
    expect(chatGetStartedButton).toHaveClass("pt-[0.18rem]");
    const chatHero = screen.getByTestId("landing-hero");
    const chatAuthCard = screen.getByTestId("landing-auth-card");
    const chatPreviewCard = screen.getByTestId("feature-preview-card");
    expect(chatHero).toHaveClass("lg:-mt-[1.68rem]");
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
    expect(chatFeaturePreview).not.toBeNull();
    expect(chatFeaturePreview).not.toHaveClass("lg:grid");
    expect(chatFeaturePreview).not.toHaveClass("lg:grid-cols-[minmax(0,1fr)_218px]");
    expect(chatFeaturePreview).not.toHaveClass("lg:items-start");
    expect(chatFeaturePreview).not.toHaveClass("lg:gap-x-[0.02rem]");
    expect(chatFeaturePreview).not.toHaveClass("lg:gap-y-[0.64rem]");
    expect(chatFeaturePreview).not.toHaveClass("xl:grid-cols-[minmax(0,1fr)_218px]");
    expect(chatFeaturePreview).not.toHaveClass("xl:gap-x-[0.04rem]");
    expect(chatFeaturePreview).not.toHaveClass("xl:gap-y-[0.72rem]");
    expect(chatAuthCard.firstElementChild).toHaveClass("max-w-[278px]");
    expect(chatAuthCard.firstElementChild).toHaveClass("lg:max-w-[512px]");
    expect(chatAuthCard.firstElementChild).toHaveClass("xl:max-w-[528px]");
    const chatPreviewHeadingBlock = chatPreviewCard.parentElement?.firstElementChild;
    expect(chatPreviewHeadingBlock).not.toBeNull();
    expect(chatPreviewHeadingBlock).toHaveClass("order-1");
    expect(chatPreviewHeadingBlock).not.toHaveClass("lg:col-span-2");
    expect(chatPreviewCard).toHaveClass("order-2");
    expect(chatPreviewCard).not.toHaveClass("lg:col-start-1");
    expect(chatPreviewCard).not.toHaveClass("lg:row-start-2");
    expect(authColumn).toHaveClass("order-3");
    expect(authColumn).toHaveClass("mx-auto");
    expect(authColumn).toHaveClass("-mt-[2.12rem]");
    expect(authColumn).toHaveClass("w-full");
    expect(authColumn).toHaveClass("max-w-[312px]");
    expect(authColumn).toHaveClass("sm:max-w-[324px]");
    expect(authColumn).toHaveClass("lg:-mt-[9.22rem]");
    expect(authColumn).toHaveClass("lg:max-w-[504px]");
    expect(authColumn).toHaveClass("xl:-mt-[9.56rem]");
    expect(authColumn).toHaveClass("xl:max-w-[520px]");
    expect(authColumn).not.toHaveClass("lg:col-start-2");
    expect(authColumn).not.toHaveClass("lg:row-start-2");
    expect(authColumn).not.toHaveClass("lg:max-w-[14.12rem]");
    expect(authColumn).not.toHaveClass("xl:-ml-[0.03rem]");
    expect(authColumn).not.toHaveClass("xl:mt-[0.24rem]");
    expect(authColumn).not.toHaveClass("lg:ml-auto");
    expect(chatPreviewHeadingBlock).toHaveClass("space-y-[0.62rem]");
    expect(chatPreviewHeadingBlock).toHaveClass("pt-[0.08rem]");
    expect(chatPreviewHeadingBlock).toHaveClass("lg:max-w-[35.4rem]");
    const chatPreviewDescription = within(chatPreviewHeadingBlock as HTMLElement).getByText(
      /upload a pdf, and sciclaw automatically extracts the core arguments, research methods, and key data/i,
    );
    expect(chatPreviewDescription).toHaveClass("max-w-[31.4rem]");
    expect(chatPreviewDescription).toHaveClass("leading-[1.82]");
    expect(chatPreviewDescription).toHaveClass("sm:text-[0.99rem]");
    expect(chatGetStartedButton).toHaveClass("pt-[0.18rem]");
    const chatNetworkShell = screen.getByTestId("feature-network-shell");
    const chatNetworkShellFrame = chatFeatureRotator.firstElementChild;
    expect(chatNetworkShell).toHaveClass("overflow-visible");
    expect(chatNetworkShellFrame).not.toBeNull();
    expect(chatNetworkShellFrame).toHaveClass("overflow-visible");
    expect(chatNetworkShellFrame).toHaveClass("pl-[0.18rem]");
    expect(chatNetworkShellFrame).toHaveClass("lg:pl-[0.2rem]");
    expect(chatNetworkShellFrame).toHaveClass("xl:pl-[0.24rem]");
    expect(chatNetworkShellFrame).toHaveClass("lg:-mt-[2.18rem]");
    expect(chatNetworkShellFrame).toHaveClass("lg:mr-0");
    expect(chatNetworkShellFrame).toHaveClass("xl:-mt-[2.38rem]");
    expect(chatNetworkShellFrame).toHaveClass("xl:mr-0");
    expect(within(chatHero).getByTestId("feature-node-literature-analysis").parentElement?.className).toContain("left-[47.8%]");
    expect(within(chatHero).getByTestId("feature-node-data-mining").parentElement?.className).toContain("left-[49.02%]");
    expect(within(chatHero).getByTestId("feature-node-outcome-present").parentElement?.className).toContain("right-[17.9%]");
    expect(within(chatHero).getByText(/^literature analysis$/i)).toHaveClass("max-w-[104px]");
    expect(within(chatHero).getByText(/^literature analysis$/i)).toHaveClass("left-[-1.94rem]");
    expect(within(chatHero).getByText(/^literature analysis$/i)).toHaveClass("top-[-0.04rem]");
    expect(within(chatHero).getByText(/^data mining$/i)).toHaveClass("max-w-[114px]");
    expect(within(chatHero).getByText(/^data mining$/i)).toHaveClass("top-[calc(100%+0.02rem)]");
    expect(within(chatHero).getByText(/^outcome present$/i)).toHaveClass("max-w-[122px]");
    expect(within(chatHero).getByText(/^outcome present$/i)).toHaveClass("whitespace-nowrap");
    expect(within(chatHero).getByText(/^outcome present$/i)).toHaveClass("left-[2.66rem]");
    expect(within(chatHero).getByText(/^outcome present$/i)).toHaveClass("top-[-0.02rem]");
    expect(within(chatHero).getByText(/^outcome present$/i)).not.toHaveClass("-translate-y-1/2");
    expect(within(chatHero).getByTestId("feature-node-literature-analysis").parentElement).toHaveClass("inline-flex");
    expect(within(chatHero).getByTestId("feature-node-data-mining").parentElement).toHaveClass("inline-flex");
    expect(within(chatHero).getByTestId("feature-node-outcome-present").parentElement).toHaveClass("inline-flex");
    expect(within(chatHero).getByTestId("feature-node-literature-analysis").firstElementChild).toHaveClass("h-[4.74rem]");
    expect(within(chatHero).getByTestId("feature-node-data-mining").firstElementChild).toHaveClass("h-[4.58rem]");
    expect(within(chatHero).getByTestId("feature-node-outcome-present").firstElementChild).toHaveClass("h-[4.58rem]");
    expect(chatHero.querySelector("span[class*='w-[11.2%]']")).not.toBeNull();
    expect(chatHero.querySelector("span[class*='w-[10.52%]']")).not.toBeNull();
    expect(chatHero.querySelector("span[class*='top-[27.92%]'][class*='w-[10.74%]'][class*='rotate-[11deg]']")).not.toBeNull();
    expect(chatHero).not.toHaveClass("xl:grid-cols-[minmax(0,1.08fr)_232px]");
    expect(chatAuthCard).toHaveClass("max-w-[244px]");
    expect(chatAuthCard).toHaveClass("lg:max-w-[504px]");
    expect(chatAuthCard).toHaveClass("xl:max-w-[520px]");
    expect(chatAuthCard).toHaveClass("rounded-[0.9rem]");
    expect(chatAuthCard).toHaveClass("border-[rgba(244,247,250,0.95)]");
    expect(chatAuthCard).toHaveClass("bg-[linear-gradient(180deg,rgba(255,255,255,0.992)_0%,rgba(251,246,240,0.74)_100%)]");
    expect(chatAuthCard).toHaveClass("shadow-[0_1px_3px_rgba(15,23,42,0.008),0_1px_2px_rgba(241,180,135,0.002)]");
    expect(chatAuthCard).toHaveClass("backdrop-blur-[0.18px]");
    expect(chatAuthCard).toHaveClass("mx-auto");
    expect(chatAuthCard).not.toHaveClass("lg:mt-[2.16rem]");
    expect(chatAuthCard).not.toHaveClass("xl:mt-[2.3rem]");
    expect(chatPreviewCard).toHaveClass("rounded-[2.08rem]");
    expect(chatPreviewCard).toHaveClass("border-[rgba(194,204,215,0.98)]");
    expect(chatPreviewCard).toHaveClass("bg-[linear-gradient(180deg,#fbf7f1_0%,#dfe8f1_100%)]");
    expect(chatPreviewCard).toHaveClass("shadow-[0_24px_48px_rgba(15,23,42,0.128)]");
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
    expect(chatGetStartedButton.querySelector("svg")).toBeNull();
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
    const bestCasesSection = screen.getByTestId("best-cases-section");
    expect(bestCasesSection).toHaveClass("mt-[2.42rem]");
    expect(bestCasesSection).toHaveClass("sm:mt-[2.84rem]");
    expect(bestCasesSection).toHaveClass("lg:mt-[6.24rem]");
    expect(bestCasesSection).toHaveClass("xl:mt-[6.6rem]");
    expect(bestCasesSection.firstElementChild).toHaveClass("mb-[1.9rem]");
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
