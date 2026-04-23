import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  href?: string;
}

export default function Logo({ className, href = '/' }: LogoProps) {
  return (
    <a
      href={href}
      className={cn('flex items-center gap-2.5 leading-none', className)}
      aria-label="Ochakai — home"
    >
      <img
        src="/brand/icon.png"
        alt=""
        aria-hidden="true"
        className="size-8 shrink-0 object-contain"
      />
      <span className="flex items-baseline gap-2">
        <span className="font-display text-2xl font-medium tracking-tight">
          Ochakai
        </span>
        <span
          className="text-muted-foreground text-base font-normal"
          lang="ja"
        >
          お茶会
        </span>
      </span>
    </a>
  );
}
