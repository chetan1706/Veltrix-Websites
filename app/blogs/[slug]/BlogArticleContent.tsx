"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  ArrowRight,
  Loader2,
  MessageCircle,
} from "lucide-react";
import { blogsPage } from "@/data/mock";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import type { BlogArticle, BlogContentBlock } from "@/types";

type NormalizedArticle = Omit<BlogArticle, "read_time"> & { readTime: string };

const toCamel = (a: Partial<BlogArticle> | null): NormalizedArticle | null =>
  a && {
    ...(a as BlogArticle),
    readTime: (a as NormalizedArticle).readTime || a.read_time || "",
  };

interface MarkdownBodyProps {
  markdown: string;
}

function MarkdownBody({ markdown }: MarkdownBodyProps) {
  const [Md, setMd] = useState<React.ComponentType<{
    source: string;
    style?: React.CSSProperties;
  }> | null>(null);

  useEffect(() => {
    let mounted = true;
    import("@uiw/react-md-editor").then((m) => {
      if (mounted) setMd(() => m.default.Markdown);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!Md) {
    return (
      <div className="text-[#3a3a4e] text-[17px] leading-[1.8] whitespace-pre-line">
        {markdown}
      </div>
    );
  }

  return (
    <div data-color-mode="light" className="veltrix-md">
      <Md
        source={markdown}
        style={{ background: "transparent", color: "#1a1a2e" }}
      />
    </div>
  );
}

interface BlockRendererProps {
  block: BlogContentBlock;
}

function BlockRenderer({ block }: BlockRendererProps) {
  if (block.type === "h2") {
    return (
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mt-12 mb-4">
        {block.text}
      </h2>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote className="my-10 pl-6 border-l-4 border-[#10b981] bg-[#10b981]/10 rounded-r-xl py-5 pr-6">
        <p className="text-xl md:text-2xl font-semibold text-[#1a1a2e] leading-snug italic">
          &ldquo;{block.text}&rdquo;
        </p>
      </blockquote>
    );
  }
  if (block.type === "list") {
    return (
      <ul className="my-6 space-y-2.5">
        {(block.items || []).map((item, j) => (
          <li
            key={j}
            className="flex items-start gap-3 text-[#3a3a4e] text-[17px] leading-relaxed"
          >
            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p className="text-[#3a3a4e] text-[17px] leading-[1.8] mb-5">
      {block.text}
    </p>
  );
}

interface BlogComment {
  id: number;
  name: string;
  body: string;
  created_at?: string;
}

interface CommentForm {
  name: string;
  email: string;
  body: string;
}

interface BlogArticleContentProps {
  slug: string;
}

export default function BlogArticleContent({ slug }: BlogArticleContentProps) {
  const [article, setArticle] = useState<NormalizedArticle | null>(null);
  const [related, setRelated] = useState<NormalizedArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [form, setForm] = useState<CommentForm>({
    name: "",
    email: "",
    body: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    (async () => {
      try {
        const local = [blogsPage.featured, ...blogsPage.articles]
          .map(toCamel)
          .find((a) => a?.slug === slug);
        if (cancelled) return;
        setArticle(local || null);
        setRelated(
          [blogsPage.featured, ...blogsPage.articles]
            .map(toCamel)
            .filter((a): a is NormalizedArticle => a !== null && a.slug !== slug)
            .slice(0, 3)
        );
        setComments([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const submitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.body) {
      toast({ title: "Name and comment required" });
      return;
    }
    setSubmitting(true);
    try {
      const next: BlogComment = {
        id: Date.now(),
        name: form.name,
        body: form.body,
        created_at: new Date().toISOString(),
      };
      setComments((c) => [next, ...c]);
      toast({ title: "Comment added (local only)" });
      setForm({ name: "", email: "", body: "" });
    } catch (err: unknown) {
      const message =
        (err as { response?: { data?: { detail?: string } } })?.response?.data
          ?.detail || "";
      toast({ title: "Failed", description: message });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#fffbeb]">
        <Loader2 className="w-6 h-6 animate-spin text-[#10b981]" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-5 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-bold text-[#1a1a2e]">
          Article not found
        </h1>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 mt-8 text-[#059669] font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all articles
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#fffbeb] text-[#1a1a2e]">
      <section className="max-w-4xl mx-auto px-5 lg:px-8 pt-12 pb-6">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#4a4a5e] hover:text-[#059669] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to journal
        </Link>
      </section>

      <section className="max-w-4xl mx-auto px-5 lg:px-8 pb-10">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#5a5a6b]">
            <span className="px-3 h-6 flex items-center rounded-full bg-[#facc15]/25 text-[#854d0e] font-semibold uppercase tracking-wider">
              {article.category}
            </span>
            <span>{article.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {article.readTime}
            </span>
            {article.views != null && (
              <span className="text-[#5a5a6b]">
                &middot; {article.views} views
              </span>
            )}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-5 text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight">
            {article.title}
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-5 text-lg md:text-xl text-[#3a3a4e] leading-relaxed">
            {article.excerpt}
          </p>
        </Reveal>
        {article.author && (
          <Reveal delay={280}>
            <div className="mt-8 flex items-center gap-3 pt-6 border-t border-[#fde68a]">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-11 h-11 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-bold text-[#1a1a2e]">
                  {article.author.name}
                </p>
                <p className="text-xs text-[#5a5a6b]">
                  {article.author.role}
                </p>
              </div>
            </div>
          </Reveal>
        )}
      </section>

      <section className="max-w-5xl mx-auto px-5 lg:px-8 pb-12">
        <Reveal variant="scale">
          <div className="rounded-3xl overflow-hidden aspect-[16/9] bg-[#fffbeb]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>

      <article className="max-w-3xl mx-auto px-5 lg:px-8 pb-12">
        <Reveal>
          {article.body_md ? (
            <MarkdownBody markdown={article.body_md} />
          ) : (
            <div>
              {(article.content || []).map((block, i) => (
                <BlockRenderer key={i} block={block} />
              ))}
            </div>
          )}
        </Reveal>
      </article>

      {/* Comments */}
      <section className="max-w-3xl mx-auto px-5 lg:px-8 pb-20">
        <div className="flex items-center gap-2 mb-6">
          <MessageCircle className="w-5 h-5 text-[#10b981]" />
          <h2 className="text-2xl font-bold">
            Comments ({comments.length})
          </h2>
        </div>

        <form
          onSubmit={submitComment}
          className="bg-[#fffbeb] border border-[#fde68a] rounded-2xl p-6 space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input
              placeholder="Your name*"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-white border-[#fde68a] h-11 rounded-lg"
            />
            <Input
              type="email"
              placeholder="Email (optional)"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-white border-[#fde68a] h-11 rounded-lg"
            />
          </div>
          <Textarea
            placeholder="Share your thoughts…"
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
            className="bg-white border-[#fde68a] rounded-lg min-h-[110px]"
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={submitting}
              className="btn-shine rounded-full bg-[#10b981] hover:bg-[#059669] text-white font-semibold px-5 h-11"
            >
              {submitting ? "Posting…" : "Post comment"}
            </Button>
          </div>
        </form>

        <div className="mt-8 space-y-4">
          {comments.map((c) => (
            <div
              key={c.id}
              className="bg-[#fffbeb] border border-[#fde68a] rounded-xl p-5"
            >
              <div className="flex items-center justify-between">
                <p className="font-bold text-sm text-[#1a1a2e]">{c.name}</p>
                <p className="text-[10px] text-[#5a5a6b]">
                  {c.created_at
                    ? new Date(c.created_at).toLocaleDateString()
                    : ""}
                </p>
              </div>
              <p className="text-sm text-[#3a3a4e] mt-2 leading-relaxed whitespace-pre-line">
                {c.body}
              </p>
            </div>
          ))}
          {comments.length === 0 && (
            <p className="text-sm text-[#5a5a6b]">
              Be the first to leave a comment.
            </p>
          )}
        </div>
      </section>

      {/* Related */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#059669] uppercase">
              Keep Reading
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              More from the journal
            </h2>
          </div>
          <Link
            href="/blogs"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[#059669] hover:text-[#047857]"
          >
            All articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((a) => (
            <Link
              key={a.slug}
              href={`/blogs/${a.slug}`}
              className="group bg-[#fffbeb] border border-[#fde68a] rounded-2xl overflow-hidden card-lift block h-full"
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
                </div>
                <h3 className="text-lg font-bold mt-3 leading-snug group-hover:text-[#10b981] transition-colors">
                  {a.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
