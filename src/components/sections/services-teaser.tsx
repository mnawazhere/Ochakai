import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'The tea gathering',
    subtitle: 'お茶会',
    description:
      'A single, quiet matcha ceremony hosted for the residents of your building. Everything included — we bring the tools and the practice.',
  },
  {
    title: 'Between gatherings',
    subtitle: '日常のつながり',
    description:
      'Communication tools and small rituals that carry the connection forward in the weeks and months between events.',
  },
  {
    title: 'Over a season',
    subtitle: '季節を通して',
    description:
      'A longer engagement — pilot programmes, research with residents, and frameworks your team can continue running without us.',
  },
];

export function ServicesTeaser() {
  return (
    <section className="border-border/60 bg-card border-t">
      <div className="container py-20 md:py-28">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <p className="text-muted-foreground mb-4 text-xs font-medium tracking-[0.16em] uppercase">
            Services — サービス
          </p>
          <h2 className="font-display text-foreground text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Three ways to bring neighbours into the same room.
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3 md:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="border-border/70 bg-background flex flex-col border p-8 md:p-10"
            >
              <p
                className="text-muted-foreground mb-6 font-medium"
                lang="ja"
              >
                {service.subtitle}
              </p>
              <h3 className="font-display text-foreground mb-4 text-2xl leading-tight tracking-tight md:text-[26px]">
                {service.title}
              </h3>
              <p className="text-muted-foreground flex-1 text-base leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center md:mt-16">
          <a
            href="/services"
            className="text-foreground hover:text-primary inline-flex items-center gap-2 text-base font-medium transition-colors"
          >
            See all services
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
