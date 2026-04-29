import { render, screen, within } from "@testing-library/react";
import PrivacyPage from "@/app/privacy/page";

describe("Privacy page", () => {
  it("renders the public legal page shell and key policy copy", () => {
    render(<PrivacyPage />);

    expect(screen.getByRole("heading", { name: /privacy policy/i })).toBeInTheDocument();
    expect(screen.getByText(/sciclaw · legal/i)).toBeInTheDocument();
    expect(screen.getByText(/last updated: march 30, 2026/i)).toBeInTheDocument();
    expect(screen.getAllByText(/hangzhou deep principle technology/i).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /← back/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /sci claw/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("heading", { name: /who we are/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /how sciclaw uses your content/i })).toBeInTheDocument();

    const content = screen.getByRole("article");
    expect(within(content).getByText(/not used to train or improve/i)).toBeInTheDocument();
  });
});
