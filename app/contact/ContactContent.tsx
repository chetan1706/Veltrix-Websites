"use client";

import React from "react";
import { Mail, MessageSquare, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CalendlyInlineEmbed from "@/common/calendly/components/CalendlyInlineEmbed";
import { getCalendlyConfig } from "@/common/calendly/config";

export default function ContactContent() {
  const { schedulingUrl } = getCalendlyConfig();

  return (
    <div className="bg-[#fffbeb] text-[#1a1a2e]">
      <PageHeader
        eyebrow="Let's Build"
        title="Book a call"
        description="Pick a time that works for you. If you prefer email, reach us anytime."
      />

      <section className="max-w-6xl mx-auto px-5 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)] gap-8">
          {/* Side info */}
          <Reveal>
            <div className="space-y-5">
              <div className="bg-white border border-[#fde68a] rounded-2xl p-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#10b981]/15 text-[#10b981] mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <p className="font-bold">Senior, end-to-end</p>
                <p className="text-sm text-[#4a4a5e] mt-1">
                  You&apos;ll work directly with a senior team — no handoffs to
                  juniors.
                </p>
              </div>
              <div className="bg-white border border-[#fde68a] rounded-2xl p-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#facc15]/30 text-[#854d0e] mb-3">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <p className="font-bold">Reply within 24 hours</p>
                <p className="text-sm text-[#4a4a5e] mt-1">
                  We&apos;ll send a written response with next steps and a call
                  slot.
                </p>
              </div>
              <div className="bg-white border border-[#fde68a] rounded-2xl p-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#10b981]/15 text-[#10b981] mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <p className="font-bold">Or email us</p>
                <a
                  href="mailto:Info@veltrixinnovation.org"
                  className="text-sm text-[#059669] underline underline-offset-4 mt-1 inline-block"
                >
                  Info@veltrixinnovation.org
                </a>
              </div>
            </div>
          </Reveal>

          {/* Booking */}
          <Reveal delay={120}>
            {schedulingUrl ? (
              <CalendlyInlineEmbed url={schedulingUrl} />
            ) : (
              <div className="bg-white border border-[#fde68a] rounded-3xl p-7 md:p-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#facc15]/30 text-[#854d0e]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold">Booking isn’t configured yet</p>
                    <p className="text-sm text-[#4a4a5e] mt-1">
                      Set <span className="font-mono">NEXT_PUBLIC_CALENDLY_URL</span>{" "}
                      in the frontend environment.
                    </p>
                    <a
                      href="mailto:Info@veltrixinnovation.org"
                      className="text-sm text-[#059669] underline underline-offset-4 mt-4 inline-block"
                    >
                      Email: Info@veltrixinnovation.org
                    </a>
                  </div>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
