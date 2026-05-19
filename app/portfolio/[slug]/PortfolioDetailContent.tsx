"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Tag,
  TrendingUp,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import type { PortfolioProjectDetail } from "@/types";

interface PortfolioDetailContentProps {
  project: PortfolioProjectDetail;
}

export default function PortfolioDetailContent({
  project,
}: PortfolioDetailContentProps) {
  const metrics = project.metrics ?? [];

  return (
    <div className="bg-[#fffbeb] text-[#1a1a2e]">
      <section className="relative overflow-hidden bg-[#1a1a2e] pt-24 pb-12 lg:pt-28 lg:pb-16 text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16,185,129,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-40 opacity-80 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,185,129,0.2), rgba(26,26,46,0))",
          }}
        />
        <div
          aria-hidden
          className="absolute -right-28 top-24 h-80 w-80 rounded-full bg-[#10b981]/15 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute -left-28 bottom-10 h-72 w-72 rounded-full bg-[#0ea5e9]/10 blur-3xl pointer-events-none"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:px-8">
          <div>
            <Reveal>
              <nav
                className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/45"
                aria-label="Breadcrumb"
              >
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
                <span>/</span>
                <Link
                  href="/portfolio/"
                  className="transition-colors hover:text-white"
                >
                  Portfolio
                </Link>
                <span>/</span>
                <span className="text-white/70">{project.title}</span>
              </nav>
            </Reveal>

            <Reveal delay={60}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#6ee7b7]">
                {project.industryLabel || project.industry}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mb-5 max-w-2xl text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[3.25rem]">
                {project.title}
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="max-w-xl text-lg leading-relaxed text-white/64">
                {project.subtitle}
              </p>
            </Reveal>

            {(project.duration || project.teamSize) && (
              <Reveal delay={180}>
                <div className="mt-7 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
                  {project.duration ? (
                    <div className="flex min-h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.045] px-4 py-3 text-sm text-white/70 backdrop-blur">
                      <Clock className="h-3.5 w-3.5 shrink-0 text-[#6ee7b7]" />
                      {project.duration}
                    </div>
                  ) : null}
                  {project.teamSize ? (
                    <div className="flex min-h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.045] px-4 py-3 text-sm text-white/70 backdrop-blur">
                      <Users className="h-3.5 w-3.5 shrink-0 text-[#6ee7b7]" />
                      {project.teamSize}
                    </div>
                  ) : null}
                </div>
              </Reveal>
            )}

            {metrics.length > 0 && (
              <Reveal delay={220}>
                <div className="mt-4 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
                  {metrics.map((m) => (
                    <div
                      key={`${m.label}-${m.value}`}
                      className="flex min-h-24 flex-col items-start justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 backdrop-blur"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#10b981]/25 bg-[#10b981]/15 text-[#6ee7b7]">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-lg font-black leading-snug text-[#6ee7b7]">
                          {m.value}
                        </div>
                        <div className="mt-1 text-xs leading-tight text-white/45">
                          {m.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          <Reveal delay={120} className="relative lg:pl-4">
            <div className="absolute -inset-3 rounded-[2rem] border border-[#10b981]/25 bg-[#10b981]/10 blur-sm" />
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#fde68a]/30 bg-[#0f172a] shadow-[0_28px_80px_rgba(0,0,0,0.42)] lg:aspect-[16/9]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {project.technologies.length > 0 && (
        <section className="border-b border-[#fde68a] bg-white py-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-5 lg:px-8">
            <div className="flex shrink-0 items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#5a5a6b]">
              <Tag className="h-3.5 w-3.5" />
              Tech Stack
            </div>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-[#fde68a] bg-[#fffbeb] px-3 py-1.5 text-xs font-medium text-[#374151]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      <section className="bg-[#fffbeb] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_300px]">
            <div>
              {project.contentHtml ? (
                <div
                  className="portfolio-prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: project.contentHtml }}
                />
              ) : (
                <p className="text-[#4a4a5e] leading-relaxed">{project.subtitle}</p>
              )}

              <div className="mt-12 border-t border-[#fde68a] pt-8">
                <Link
                  href="/portfolio/"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#5a5a6b] transition-colors hover:text-[#10b981]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Portfolio
                </Link>
              </div>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-24">
              <Reveal>
                <div className="rounded-2xl border border-[#fde68a] bg-[#fef3c7]/40 p-6">
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#5a5a6b]">
                    Project Info
                  </h3>
                  <dl className="space-y-3.5">
                    {project.industry ? (
                      <div>
                        <dt className="mb-0.5 text-xs font-medium text-[#5a5a6b]">
                          Industry
                        </dt>
                        <dd className="text-sm font-medium capitalize text-[#1a1a2e]">
                          {project.industryLabel || project.industry}
                        </dd>
                      </div>
                    ) : null}
                    {project.duration ? (
                      <div>
                        <dt className="mb-0.5 text-xs font-medium text-[#5a5a6b]">
                          Duration
                        </dt>
                        <dd className="text-sm font-medium text-[#1a1a2e]">
                          {project.duration}
                        </dd>
                      </div>
                    ) : null}
                    {project.teamSize ? (
                      <div>
                        <dt className="mb-0.5 text-xs font-medium text-[#5a5a6b]">
                          Team Size
                        </dt>
                        <dd className="text-sm font-medium text-[#1a1a2e]">
                          {project.teamSize}
                        </dd>
                      </div>
                    ) : null}
                    {project.services.length > 0 ? (
                      <div>
                        <dt className="mb-2 text-xs font-medium text-[#5a5a6b]">
                          Services
                        </dt>
                        <dd className="flex flex-wrap gap-1.5">
                          {project.services.map((svc) => (
                            <span
                              key={svc}
                              className="rounded-lg border border-[#fde68a] bg-white px-2.5 py-1 text-[11px] font-medium text-[#4a4a5e]"
                            >
                              {svc}
                            </span>
                          ))}
                        </dd>
                      </div>
                    ) : null}
                  </dl>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="rounded-2xl border border-[#fde68a] bg-white p-6 text-center">
                  <p className="mb-1.5 text-sm font-bold text-[#1a1a2e]">
                    Want similar results?
                  </p>
                  <p className="mb-4 text-xs text-[#5a5a6b]">
                    Let&apos;s discuss your project and get started.
                  </p>
                  <Link
                    href="/contact/"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#10b981] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#059669] hover:shadow-[0_8px_24px_rgba(16,185,129,0.35)]"
                  >
                    Book a call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services/"
                    className="mt-2.5 inline-flex w-full items-center justify-center rounded-xl border border-[#fde68a] px-5 py-2.5 text-sm font-medium text-[#4a4a5e] transition-all hover:border-[#10b981]/50 hover:text-[#10b981]"
                  >
                    Our Services
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1a1a2e] py-20 text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(at 60% 50%, rgba(16,185,129,0.2) 0%, transparent 70%), radial-gradient(at 20% 20%, rgba(14,165,233,0.12) 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Want Similar Results?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70">
              Let&apos;s discuss your project and deliver measurable outcomes.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-xl bg-[#10b981] px-8 py-4 font-semibold text-white shadow-[0_18px_45px_rgba(16,185,129,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#059669]"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/portfolio/"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
