import { SITE_URL, SITE_NAME } from "@/lib/site";
import type { BlogArticle, BlogAuthor } from "@/types";

type ArticleRecord = Partial<BlogArticle> & {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author?: BlogAuthor;
};

interface BlogArticleJsonLdProps {
  article: ArticleRecord;
}

function parseArticleDate(dateStr: string): string | undefined {
  const t = Date.parse(dateStr);
  if (Number.isNaN(t)) return undefined;
  return new Date(t).toISOString();
}

/**
 * BlogPosting structured data for article pages.
 */
export function BlogArticleJsonLd({ article }: BlogArticleJsonLdProps) {
  const datePublished = parseArticleDate(article.date);
  const imageUrl =
    article.image.startsWith("http") || article.image.startsWith("//")
      ? article.image
      : `${SITE_URL}${article.image.startsWith("/") ? "" : "/"}${article.image}`;

  const payload = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: imageUrl,
    url: `${SITE_URL}/blogs/${article.slug}`,
    datePublished: datePublished ?? undefined,
    author: article.author
      ? {
          "@type": "Person",
          name: article.author.name,
          jobTitle: article.author.role,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/branding/veltrix-logo.jpg`,
      },
    },
    articleSection: article.category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blogs/${article.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
