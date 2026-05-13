import { fireEvent, render, screen, within } from "@testing-library/react";
import ChatPage from "@/app/chat/page";

describe("Chat route public landing clone", () => {
  it("renders the same marketing landing shell as the public live /chat route on fresh load", () => {
    render(<ChatPage />);

    const centerNode = screen.getByTestId("feature-node-center");

    expect(screen.getByRole("heading", { name: /sci\s*claw/i })).toBeInTheDocument();
    const headerWordmark = screen.getByTestId("landing-header-wordmark");
    expect(headerWordmark).toHaveTextContent(/^SciClaw$/);
    expect(headerWordmark).toHaveClass("text-[1.08rem]");
    expect(headerWordmark).toHaveClass("sm:text-[1.14rem]");
    expect(screen.getAllByText(/ai co-worker for scientific research\./i).length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByText(
        /sciclaw connects inspiration generation, experimental execution, and iterative optimization/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /user guide/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /contact us/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /settings/i })).toBeInTheDocument();
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
    const chatHero = screen.getByTestId("landing-hero");
    const chatAuthCard = screen.getByTestId("landing-auth-card");
    const chatPreviewCard = screen.getByTestId("feature-preview-card");
    expect(chatHero).toHaveClass("lg:-mt-[2.32rem]");
    expect(chatHero).toHaveClass("lg:grid-cols-[minmax(0,1fr)_272px]");
    expect(chatHero).toHaveClass("lg:gap-0");
    const chatFeatureRotator = screen.getByTestId("feature-rotator");
    expect(chatFeatureRotator).toHaveClass("lg:items-start");
    const chatNetworkShell = chatFeatureRotator.firstElementChild;
    expect(chatNetworkShell).not.toBeNull();
    expect(chatNetworkShell).toHaveClass("lg:-mt-[1.92rem]");
    expect(chatNetworkShell).toHaveClass("xl:-mt-[2.14rem]");
    expect(within(chatHero).getByTestId("feature-node-literature-analysis").parentElement?.className).toContain("left-[44.15%]");
    expect(within(chatHero).getByTestId("feature-node-data-mining").parentElement?.className).toContain("left-[44.55%]");
    expect(within(chatHero).getByTestId("feature-node-outcome-present").parentElement?.className).toContain("right-[11.7%]");
    expect(within(chatHero).getByTestId("feature-node-literature-analysis").firstElementChild).toHaveClass("h-[5.02rem]");
    expect(within(chatHero).getByTestId("feature-node-data-mining").firstElementChild).toHaveClass("h-[4.96rem]");
    expect(within(chatHero).getByTestId("feature-node-outcome-present").firstElementChild).toHaveClass("h-[4.96rem]");
    expect(chatHero.querySelector("span[class*='w-[14.9%]']")).not.toBeNull();
    expect(chatHero.querySelector("span[class*='w-[14.8%]']")).not.toBeNull();
    expect(chatHero.querySelector("span[class*='w-[14.55%]']")).not.toBeNull();
    expect(chatHero).toHaveClass("xl:-mt-[2.58rem]");
    expect(chatHero).toHaveClass("xl:grid-cols-[minmax(0,1.12fr)_272px]");
    expect(chatHero).toHaveClass("xl:gap-[0.02rem]");
    expect(chatAuthCard).toHaveClass("max-w-[268px]");
    expect(chatAuthCard).toHaveClass("bg-[#fdfdff]");
    expect(chatAuthCard).toHaveClass("border-[#f5f8fb]");
    expect(chatAuthCard).toHaveClass("shadow-[0_1px_4px_rgba(15,23,42,0.009),0_1px_2px_rgba(241,180,135,0.005)]");
    expect(chatAuthCard).toHaveClass("lg:mt-[2.86rem]");
    expect(chatAuthCard).toHaveClass("xl:mt-[3.06rem]");
    expect(chatPreviewCard).toHaveClass("border-white/80");
    expect(chatPreviewCard).toHaveClass("shadow-[0_28px_72px_rgba(15,23,42,0.092)]");
    const chatPreviewLabelRow = screen.getByTestId("feature-preview-chart-label-row");
    expect(chatPreviewLabelRow).toHaveClass("mt-[2.66rem]");
    expect(chatPreviewLabelRow).toHaveClass("gap-[3.46rem]");
    expect(chatPreviewLabelRow).toHaveClass("pt-[2.6rem]");
    expect(chatGetStartedButton.querySelector("svg")).toBeNull();
    expect(centerNode).not.toHaveAccessibleName();
    expect(screen.queryByText(/^AI$/)).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toBeDisabled();
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("bg-[#e7edf3]");
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("text-[#5f6773]");
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("border-[#dde5ee]");
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("whitespace-nowrap");
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("text-[0.76rem]");
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toHaveClass("tracking-[0.06em]");
    expect(screen.getByRole("heading", { name: /best cases/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /automated report generation/i })).toBeInTheDocument();
    expect(screen.getByText(/^01 \/ 04$/i)).toBeInTheDocument();
    const previousButton = screen.getByRole("button", { name: /^previous$/i });
    const nextButton = screen.getByRole("button", { name: /^next$/i });
    expect(previousButton.querySelector("svg")).not.toBeNull();
    expect(nextButton.querySelector("svg")).not.toBeNull();
  });

  it("opens the inline early-access apply flow on /chat and keeps the live marketing contract", () => {
    render(<ChatPage />);

    fireEvent.click(screen.getByRole("button", { name: /no account yet\? apply now/i }));

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
    expect(screen.getByRole("heading", { name: /intelligent data visualization/i })).toBeInTheDocument();
    expect(screen.getByText(/^Q1$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Q2$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Q3$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Q4$/i)).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /peer review response support/i })).not.toBeInTheDocument();
    expect(within(bestCasesSection as HTMLElement).getByRole("heading", { name: /automated report generation/i })).toBeInTheDocument();
    expect(within(bestCasesSection as HTMLElement).getByText(/^01 \/ 04$/i)).toBeInTheDocument();
    expect(within(bestCasesSection as HTMLElement).queryByText(/^02 \/ 04$/i)).not.toBeInTheDocument();
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
