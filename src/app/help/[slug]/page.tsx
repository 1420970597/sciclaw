import { notFound } from "next/navigation";
import { BillingHelpShell } from "@/components/billing-help-shell";
import { HelpShell, getHelpArticle } from "@/components/help-shell";

const billingSlugs = new Set(["billing", "faq"]);

export function generateStaticParams() {
  return [
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
    { slug: "billing" },
    { slug: "faq" },
  ];
}

export default async function HelpArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getHelpArticle(slug);

  if (!article) {
    notFound();
  }

  return billingSlugs.has(slug) ? <BillingHelpShell article={article} /> : <HelpShell article={article} />;
}
