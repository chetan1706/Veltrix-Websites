import { portfolioProjects } from "@/data/portfolio-projects";
import type { PortfolioProject, PortfolioProjectDetail } from "@/types";

export function getAllPortfolioProjects(): PortfolioProject[] {
  return portfolioProjects.map(({ slug, title, category, tag, image }) => ({
    id: slug,
    slug,
    title,
    category,
    tag,
    image,
  }));
}

export function getPortfolioProjectBySlug(
  slug: string,
): PortfolioProjectDetail | null {
  return portfolioProjects.find((p) => p.slug === slug) ?? null;
}

export function getPortfolioSlugs(): string[] {
  return portfolioProjects.map((p) => p.slug);
}
