import { blogsPage } from "@/data/mock";
import type { BlogArticle } from "@/types";

export type ArticleRecord = Partial<BlogArticle> & { slug: string };

/**
 * Returns all blog entries (featured first, then listing order).
 */
export function getAllBlogArticles(): ArticleRecord[] {
  return [blogsPage.featured, ...blogsPage.articles] as ArticleRecord[];
}

/**
 * Resolves a blog entry by slug for static metadata and JSON-LD.
 */
export function getBlogArticleBySlug(slug: string): ArticleRecord | null {
  return getAllBlogArticles().find((a) => a.slug === slug) ?? null;
}
