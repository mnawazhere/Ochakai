import { ArrowUpRight } from 'lucide-react';

export function AboutTeaser() {
  return (
    <section className="border-border/60 bg-card border-t">
      <div className="container py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p
            className="text-muted-foreground mb-6 text-xs font-medium tracking-[0.16em] uppercase"
            lang="ja"
          >
            About — お茶会について
          </p>
          <p className="font-display text-foreground text-2xl leading-snug md:text-[28px]">
            Ochakai was started by Aya Toriyama in her own residential building
            in The Hague in 2024, after noticing how rarely neighbours connected
            despite sharing the same physical spaces. It grew out of research
            into urban belonging and everyday social infrastructure at Erasmus
            University / IHS, and from years of cross-cultural community work
            across Japan, the Middle East, and Europe.
          </p>

          <a
            href="/about"
            className="text-foreground hover:text-primary mt-10 inline-flex items-center gap-2 text-base font-medium transition-colors"
          >
            Read more about how we work
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
