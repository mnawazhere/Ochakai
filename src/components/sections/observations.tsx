const observations = [
  'Increased familiarity between residents.',
  'More frequent informal greetings and interactions, observed even a year after implementation.',
  'Small acts of mutual support emerging naturally — lending items, helping with small tasks.',
  'Improved ease of everyday communication within the building.',
];

export function Observations() {
  return (
    <section className="border-border/60 border-t">
      <div className="container py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-muted-foreground mb-6 text-xs font-medium tracking-[0.16em] uppercase">
            What organisations have observed
          </p>
          <h2 className="font-display text-foreground mb-12 text-3xl leading-[1.1] tracking-tight md:text-4xl">
            Not metrics — behaviour.
          </h2>

          <ul className="grid gap-6 md:grid-cols-2 md:gap-8">
            {observations.map((item) => (
              <li
                key={item}
                className="border-primary/40 text-foreground border-l-2 pl-5 text-lg leading-relaxed md:text-xl"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
