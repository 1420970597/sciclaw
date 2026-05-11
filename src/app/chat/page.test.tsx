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
    const onboardAccessCode = screen.getByRole("textbox", { name: /access code/i });
    expect(onboardAccessCode).toHaveAttribute("placeholder", "SC-XXXXXXXX");
    expect(onboardAccessCode).toHaveValue("");
    expect(screen.getByRole("button", { name: /^VERIFY ACCESS CODE$/ })).toBeDisabled();
    expect(screen.getByRole("heading", { name: /best cases/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /automated report generation/i })).toBeInTheDocument();
    expect(screen.getByText(/^01 \/ 04$/i)).toBeInTheDocument();
  });

  it("keeps live-like top utility menus and marketing auth interactions reachable on /chat", () => {
    render(<ChatPage />);

    const primaryNav = screen.getByRole("navigation", { name: /primary/i });

    fireEvent.click(within(primaryNav).getByRole("button", { name: /user guide/i }));
    expect(screen.getByRole("menu", { name: /user guide/i })).toBeInTheDocument();

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

    expect(screen.getByRole("heading", { name: /autonomous experiment execution/i })).toBeInTheDocument();
    expect(screen.getByText(/enter your research goal, and sciclaw automatically breaks down the research path/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^autonomous execution$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /peer review response support/i })).toBeInTheDocument();
    expect(screen.getByText(/^02 \/ 04$/i)).toBeInTheDocument();
  });
});
