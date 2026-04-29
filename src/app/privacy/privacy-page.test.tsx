import { render, screen, within } from "@testing-library/react";
import PrivacyPage from "@/app/privacy/page";

describe("Privacy page", () => {
  it("renders the public policy summary and section toc", () => {
    render(<PrivacyPage />);

    expect(
      screen.getByRole("heading", { name: /sciclaw privacy and data handling overview/i }),
    ).toBeInTheDocument();

    const entityCard = screen.getByText("Entity").closest("div");
    expect(entityCard).not.toBeNull();
    expect(within(entityCard as HTMLElement).getByText(/hangzhou deep principle technology/i)).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /back to home/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /user guide/i })).toHaveAttribute(
      "href",
      "/help/getting-started",
    );
    expect(screen.getByRole("link", { name: /summary/i })).toHaveAttribute(
      "href",
      "#summary",
    );
  });
});
