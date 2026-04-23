const observations = [
  {
    quote:
      'Neighbours who had lived on the same floor for years introduced themselves for the first time.',
  },
  {
    quote:
      'A resident began lending tools to the person across the hall the week after.',
  },
  {
    quote:
      'One building started a quiet channel for sharing what was growing on their balconies.',
  },
];

export function Impact() {
  return (
    <section className="border-border/60 border-t">
      <div className="container py-20 md:py-28">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <p className="text-muted-foreground mb-4 text-xs font-medium tracking-[0.16em] uppercase">
            Impact observed in past pilots
          </p>
          <h2 className="font-display text-foreground text-3xl leading-tight tracking-tight md:text-4xl">
            Not metrics — behaviour.
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3 md:gap-10">
          {observations.map((item) => (
            <blockquote
              key={item.quote}
              className="border-primary/40 text-foreground border-l-2 pl-5 text-lg leading-relaxed italic md:text-xl"
            >
              {item.quote}
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
