const items = [
  { label: 'Duration', value: '8–12 weeks' },
  { label: 'Scale', value: 'Single building or small cluster' },
  { label: 'Burden on partner', value: 'Low' },
  {
    label: 'What it leaves behind',
    value: 'A resident-led system your organisation can replicate',
  },
];

export function PilotAtAGlance() {
  return (
    <section className="border-border/60 bg-card border-t">
      <div className="container py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-muted-foreground mb-6 text-xs font-medium tracking-[0.16em] uppercase">
            The pilot — at a glance
          </p>
          <h2 className="font-display text-foreground mb-12 text-3xl leading-[1.1] tracking-tight md:text-4xl">
            A small, contained commitment.
          </h2>

          <dl className="grid gap-8 md:grid-cols-2 md:gap-12">
            {items.map((item) => (
              <div
                key={item.label}
                className="border-primary/30 border-l-2 pl-6"
              >
                <dt className="text-muted-foreground text-xs font-medium tracking-[0.12em] uppercase">
                  {item.label}
                </dt>
                <dd className="text-foreground mt-2 text-lg leading-relaxed">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
