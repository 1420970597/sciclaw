import { fireEvent, render, screen, within } from "@testing-library/react";
import Home from "@/app/page";

describe("Home landing page", () => {
  it("renders the high-fidelity landing structure", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /research, reason, and present outcomes from one evidence-backed workflow/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByRole("navigation", { name: /primary/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /onboard/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    expect(screen.getByText(/best cases/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /continue with google/i })).toBeInTheDocument();
  });

  it("switches auth tabs and updates CTA copy", () => {
    render(<Home />);

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.getByRole("heading", { name: /welcome back/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /login to workspace/i }),
    ).toBeInTheDocument();
    expect(screen.queryByDisplayValue(/gl-0g1ipalu/i)).not.toBeInTheDocument();
  });

  it("switches feature panels when a rotator tab is selected", () => {
    render(<Home />);

    fireEvent.click(screen.getByRole("button", { name: /data mining/i }));

    expect(
      screen.getByRole("heading", {
        name: /mine datasets, filings, and transcripts for the patterns that matter/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/multi-source ingestion/i)).toBeInTheDocument();
  });

  it("keeps landing navigation targets on implemented routes", () => {
    render(<Home />);

    const primaryNav = screen.getByRole("navigation", { name: /primary/i });
    const footer = screen.getByRole("contentinfo");
    const headerLinks = within(primaryNav).getAllByRole("link");
    const footerLinks = within(footer).getAllByRole("link");

    expect(within(primaryNav).getByRole("link", { name: /user guide/i })).toHaveAttribute(
      "href",
      "/help/getting-started",
    );
    expect(within(primaryNav).getByRole("link", { name: /privacy/i })).toHaveAttribute(
      "href",
      "/privacy",
    );
    expect(within(primaryNav).getByRole("link", { name: /settings/i })).toHaveAttribute(
      "href",
      "/help/settings",
    );
    expect(within(footer).getByRole("link", { name: /user guide/i })).toHaveAttribute(
      "href",
      "/help/getting-started",
    );
    expect(within(footer).getByRole("link", { name: /privacy/i })).toHaveAttribute(
      "href",
      "/privacy",
    );
    expect(headerLinks).toHaveLength(3);
    expect(footerLinks).toHaveLength(3);
  });

  it("prevents auth form submission from causing default navigation", () => {
    render(<Home />);

    const submitButton = screen.getByRole("button", { name: /start with invite/i });
    const form = submitButton.closest("form");

    expect(form).not.toBeNull();

    const submitEvent = new Event("submit", { bubbles: true, cancelable: true });
    form!.dispatchEvent(submitEvent);

    expect(submitEvent.defaultPrevented).toBe(true);
  });
});
