"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Search } from "lucide-react";
import { blogsPage } from "@/data/mock";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import type { BlogArticle } from "@/types";

type NormalizedArticle = Omit<BlogArticle, "read_time"> & { readTime: string };

const toCamel = (article: Partial<BlogArticle>): NormalizedArticle => ({
  ...(article as BlogArticle),
  readTime:
    (article as NormalizedArticle).readTime || article.read_time || "",
});

export default function BlogsContent() {
  const { hero } = blogsPage;
  const [featured, setFeatured] = useState<NormalizedArticle>(
    toCamel(blogsPage.featured)
  );
  const [articles, setArticles] = useState<NormalizedArticle[]>(
    blogsPage.articles.map(toCamel)
  );
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return articles;
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        (a.category || "").toLowerCase().includes(q)
    );
  }, [articles, query]);

  return (
    <div className="bg-[#fffbeb] text-[#1a1a2e]">
      <PageHeader
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
      />

      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-16">
        <Reveal variant="scale">
          <Link
            href={`/blogs/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#fffbeb] border border-[#fde68a] rounded-3xl overflow-hidden hover:border-[#10b981]/40 card-lift"
          >
            <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs text-[#5a5a6b]">
                <span className="px-3 h-6 flex items-center rounded-full bg-[#facc15]/25 text-[#854d0e] font-semibold uppercase tracking-wider">
                  {featured.category}
                </span>
                <span>{featured.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {featured.readTime}
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mt-4 leading-tight">
                {featured.title}
              </h2>
              <p className="text-[#3a3a4e] mt-4 leading-relaxed">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#059669]">
                Read article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-24">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#059669] uppercase">
                Latest Articles
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                From the journal
              </h2>
            </div>
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#5a5a6b] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles…"
                className="bg-white border-[#fde68a] h-11 rounded-full pl-10"
              />
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((a, i) => (
            <Reveal key={a.slug} delay={i * 80}>
              <Link
                href={`/blogs/${a.slug}`}
                className="group bg-[#fffbeb] border border-[#fde68a] rounded-2xl overflow-hidden hover:border-[#10b981]/40 card-lift block h-full"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-[#5a5a6b]">
                    <span className="px-2.5 h-5 flex items-center rounded-full bg-[#facc15]/25 text-[#854d0e] font-semibold uppercase tracking-wider">
                      {a.category}
                    </span>
                    <span>{a.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {a.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mt-3 leading-snug group-hover:text-[#10b981] transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-[#4a4a5e] text-sm mt-2 leading-relaxed">
                    {a.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[#5a5a6b] py-16">
            No articles match &ldquo;{query}&rdquo;.
          </p>
        )}
      </section>
    </div>
  );
}
