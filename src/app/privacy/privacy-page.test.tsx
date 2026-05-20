import { render, screen, within } from "@testing-library/react";
import PrivacyPage from "@/app/privacy/page";

describe("Privacy page", () => {
  it("renders the public legal page shell and key policy copy", () => {
    render(<PrivacyPage />);

    expect(screen.getByRole("heading", { name: /privacy policy/i })).toBeInTheDocument();
    expect(screen.getByText(/sciclaw · legal/i)).toBeInTheDocument();
    expect(screen.getAllByText(/last updated: march 30, 2026/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/hangzhou deep principle technology/i).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /← back/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /sci claw/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("heading", { name: /summary/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /how content is used/i })).toBeInTheDocument();

    const content = screen.getByRole("article");
    expect(within(content).getByText(/does not use user prompts, uploaded files, chat history, or generated outputs to train or improve/i)).toBeInTheDocument();
  });
});
