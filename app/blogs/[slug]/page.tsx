import type { Metadata } from "next";
import BlogArticleContent from "./BlogArticleContent";
import { BlogArticleJsonLd } from "@/components/seo/BlogArticleJsonLd";
import { getAllBlogArticles, getBlogArticleBySlug } from "@/lib/blog";
import { SITE_KEYWORDS, SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return getAllBlogArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (
    !article?.title ||
    !article.excerpt ||
    !article.image ||
    !article.date ||
    !article.category
  ) {
    return {
      title: "Article not found",
      description: "This journal entry could not be found.",
      robots: { index: false, follow: true },
    };
  }

  const path = `/blogs/${slug}`;
  const parsed = Date.parse(article.date);
  const publishedTime = Number.isNaN(parsed)
    ? undefined
    : new Date(parsed).toISOString();

  const socialTitle = `${article.title} | ${SITE_NAME}`;
  const slugWords = slug.replace(/-/g, " ");
  const keywords = [article.category, slugWords, ...SITE_KEYWORDS];

  return {
    title: article.title,
    description: article.excerpt,
    keywords: [...keywords],
    authors: article.author?.name ? [{ name: article.author.name }] : undefined,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description: article.excerpt,
      url: path,
      type: "article",
      publishedTime,
      authors: article.author?.name ? [article.author.name] : undefined,
      images: [{ url: article.image, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: article.excerpt,
      images: [article.image],
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);
  const showJsonLd =
    article?.title &&
    article.excerpt &&
    article.image &&
    article.date &&
    article.category;

  return (
    <>
      {showJsonLd ? (
        <BlogArticleJsonLd
          article={{
            slug,
            title: article.title!,
            excerpt: article.excerpt!,
            image: article.image!,
            date: article.date!,
            category: article.category!,
            author: article.author,
          }}
        />
      ) : null}
      <BlogArticleContent slug={slug} />
    </>
  );
}
