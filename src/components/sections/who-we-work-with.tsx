export function WhoWeWorkWith() {
  return (
    <section className="border-border/60 border-t">
      <div className="container py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p
            className="text-muted-foreground mb-6 text-xs font-medium tracking-[0.16em] uppercase"
            lang="ja"
          >
            Who we work with — 誰と
          </p>
          <h2 className="font-display text-foreground text-3xl leading-[1.1] tracking-tight md:text-4xl lg:text-[44px] lg:leading-[1.08]">
            Housing organisations and municipalities open to testing.
          </h2>
          <div className="text-foreground mt-10 space-y-6 text-lg leading-relaxed md:text-xl">
            <p>
              Ochakai works with housing organisations and municipalities that
              have an active interest in liveability and tenant wellbeing, and
              are open to testing a structured, evidence-based approach in one
              or two buildings.
            </p>
            <p>
              We bring the methodology, the facilitation, and the learning
              framework. You bring the context, the residents, and a shared
              commitment to understanding what works and what persists.
            </p>
          </div>

          <a
            href="/contact"
            className="text-foreground hover:text-primary mt-10 inline-flex items-center gap-2 text-base font-medium transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}
