import { ArrowUpRight } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="border-border/60 border-t">
      <div className="container py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p
            className="text-muted-foreground mb-6 text-xs font-medium tracking-[0.16em] uppercase"
            lang="ja"
          >
            How it works — どうやって
          </p>
          <h2 className="font-display text-foreground text-3xl leading-[1.1] tracking-tight md:text-4xl lg:text-[44px] lg:leading-[1.08]">
            The Neighbour Connection Pilot.
          </h2>
          <div className="text-foreground mt-10 space-y-6 text-lg leading-relaxed md:text-xl">
            <p>
              The Neighbour Connection Pilot runs for 8–12 weeks. It introduces
              lightweight structures — small gatherings, shared communication
              spaces, recurring touchpoints — that make it easier for residents
              to meet, recognise one another, and gradually build familiarity.
            </p>
            <p className="font-display text-2xl leading-snug italic md:text-[28px]">
              By the end of the pilot, the system belongs to the residents. Not
              to Ochakai.
            </p>
            <p className="text-muted-foreground">
              This is a system activation process, not an event series.
            </p>
          </div>

          <a
            href="/offer"
            className="text-foreground hover:text-primary mt-10 inline-flex items-center gap-2 text-base font-medium transition-colors"
          >
            See full pilot structure
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
