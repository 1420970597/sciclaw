import { render, screen, within } from "@testing-library/react";
import HelpArticlePage, { generateStaticParams } from "@/app/help/[slug]/page";

describe("Help article page", () => {
  it("exposes all known public help routes as static params", () => {
    expect(generateStaticParams()).toEqual([
      { slug: "getting-started" },
      { slug: "projects" },
      { slug: "chat" },
      { slug: "skills" },
      { slug: "library" },
      { slug: "tasks" },
      { slug: "foundry" },
      { slug: "persona" },
      { slug: "im" },
      { slug: "settings" },
    ]);
  });

  it("renders the docs shell for a known article", async () => {
    const page = await HelpArticlePage({
      params: Promise.resolve({ slug: "getting-started" }),
    });

    render(page);

    const docsNav = screen.getByRole("navigation", { name: /user guide navigation/i });

    expect(screen.getByRole("heading", { name: /getting started/i })).toBeInTheDocument();
    expect(docsNav).toBeInTheDocument();
    expect(screen.getByText(/search documentation/i)).toBeInTheDocument();
    expect(screen.getByText(/on this page/i)).toBeInTheDocument();
    expect(within(docsNav).getByRole("link", { name: /project & session/i })).toHaveAttribute(
      "href",
      "/help/projects",
    );
  });
});
