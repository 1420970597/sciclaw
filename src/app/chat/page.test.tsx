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
    expect(screen.getByDisplayValue(/sc-xxxxxxxx/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /verify access code/i })).toBeDisabled();
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

  it("keeps the same best-cases carousel defaults and navigation as the landing page", () => {
    render(<ChatPage />);

    expect(screen.getByRole("heading", { name: /automated report generation/i })).toBeInTheDocument();
    expect(screen.getByText(/^01 \/ 04$/i)).toBeInTheDocument();
    expect(screen.queryByText(/foundry preview/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/stakeholder-ready synthesis/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/research workspace preview/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^summary$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/draft 01/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/slides handoff/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/evidence appendix/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    expect(screen.getByRole("heading", { name: /peer review response support/i })).toBeInTheDocument();
    expect(screen.getByText(/^02 \/ 04$/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /previous/i }));
    expect(screen.getByRole("heading", { name: /automated report generation/i })).toBeInTheDocument();
    expect(screen.getByText(/^01 \/ 04$/i)).toBeInTheDocument();
  });
});
