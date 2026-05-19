import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioDetailContent from "./PortfolioDetailContent";
import { getPortfolioProjectBySlug, getPortfolioSlugs } from "@/lib/portfolio";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export function generateStaticParams() {
  return getPortfolioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
      description: "This portfolio case study could not be found.",
      robots: { index: false, follow: true },
    };
  }

  return buildPageMetadata({
    stemTitle: project.title,
    description: project.metaDescription || project.subtitle,
    path: `/portfolio/${slug}`,
    extraKeywords: [
      project.industryLabel,
      project.category,
      ...project.technologies.slice(0, 6),
    ],
  });
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <PortfolioDetailContent project={project} />;
}
