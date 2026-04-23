import { Button } from '@/components/ui/button';

export function CtaBand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center md:gap-12">
          <h2 className="font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Want to build community in your buildings?
          </h2>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-12 px-8 text-base"
          >
            <a href="/contact">Get in touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
