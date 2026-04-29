import { notFound } from "next/navigation";
import { getHelpArticle, HelpShell } from "@/components/help-shell";

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

  return <HelpShell article={article} />;
}
