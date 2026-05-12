import { fireEvent, render, screen, within } from "@testing-library/react";
import ChatPage from "@/app/chat/page";

describe("Chat route public landing clone", () => {
  it("renders the same marketing landing shell as the public live /chat route on fresh load", () => {
    render(<ChatPage />);

    expect(screen.getByRole("heading", { name: /sci\s*claw/i })).toBeInTheDocument();
    expect(screen.getAllByText(/ai co-worker for scientific research\./i).length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getByText(
        /sciclaw connects inspiration generation, experimental execution, and iterative optimization/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /user guide/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /contact us/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /settings/i })).toBeInTheDocument();
    expect(screen.getByRole("tabpanel", { name: /onboard/i })).toBeInTheDocument();
    const onboardAccessCode = screen.getByPlaceholderText("SC-XXXXXXXX");
    expect(onboardAccessCode).toHaveAttribute("placeholder", "SC-XXXXXXXX");
    expect(onboardAccessCode).toHaveValue("");
    const bodyLabel = screen.getByText(/^autonomous research$/i);
    expect(bodyLabel.tagName).toBe("SPAN");
    expect(screen.queryByText(/^AI$/)).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toBeDisabled();
    expect(screen.getByRole("heading", { name: /best cases/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /automated report generation/i })).toBeInTheDocument();
    expect(screen.getByText(/^01 \/ 04$/i)).toBeInTheDocument();
  });

  it("opens the inline early-access apply flow on /chat and keeps the live marketing contract", () => {
    render(<ChatPage />);

    fireEvent.click(screen.getByRole("button", { name: /no account yet\? apply now/i }));

    expect(screen.getByText(/leave your email and intended use case\. we will review it for early access\./i)).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /email address/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /verification code/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /tell us what you research and how sciclaw would help\./i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^send code$/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /^enter your email first$/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /^back$/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /no account yet\? apply now/i })).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /peer review response support/i })).toBeInTheDocument();
    expect(screen.getByText(/^02 \/ 04$/i)).toBeInTheDocument();
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
    expect(screen.getByRole("tabpanel", { name: /login/i })).toBeInTheDocument();
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
