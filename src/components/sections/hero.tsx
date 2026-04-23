import { ArrowUpRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-5.5rem)] min-h-[640px] w-full overflow-hidden">
      {/* Background illustration */}
      <img
        src="/images/hero.png"
        alt="Neighbours gathered on a sunlit engawa, sharing matcha tea together"
        className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
      />

      {/* Gradient scrim — dark at bottom, soft wash at top so the pill stays legible */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#1e2a33]/85 via-[#1e2a33]/30 to-[#1e2a33]/25"
        aria-hidden="true"
      />

      {/* Overlaid content, anchored to the bottom band */}
      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="container pb-16 md:pb-20 lg:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            {/* Featured article pill — sits right above the kicker */}
            <div className="mb-6 flex justify-center">
              <a
                href="/journal/both-sides-were-waiting"
                className="group inline-flex items-center gap-2 rounded-full border border-[#F5F1E8]/25 bg-[#1e2a33]/40 px-4 py-2 text-[#F5F1E8] shadow-lg backdrop-blur-md transition-colors hover:bg-[#1e2a33]/55 md:px-5 md:py-2.5"
              >
                <span className="text-[13px] leading-tight md:text-sm">
                  Read our story
                </span>
                <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <p
              className="mb-5 text-xs font-medium tracking-[0.18em] text-[#F5F1E8]/80 uppercase md:text-sm"
              lang="ja"
            >
              お茶会 — Activating Urban Connections
            </p>

            <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-[#F5F1E8] md:text-5xl lg:text-[68px] lg:leading-[1.04]">
              Neighbours meeting over tea.
              <br className="hidden md:inline" />{' '}
              <span className="text-[#C4B896]">
                Buildings that feel like home.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[#F5F1E8]/85 md:text-lg lg:text-xl">
              Ochakai helps housing organisations build community in their
              buildings through small gatherings, communication tools, and
              long-term engagement support.
            </p>

            <div className="mt-10 flex items-center justify-center">
              <Button
                asChild
                size="lg"
                className="h-12 bg-[#F5F1E8] px-8 text-base text-[#1e2a33] hover:bg-[#FBF8F1]"
              >
                <a href="/contact">Get in touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
