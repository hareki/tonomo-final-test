import type { ComponentPropsWithoutRef, ElementType } from 'react';

import { cn } from '@/src/lib/tailwind/utils';

type TextProps<T extends ElementType> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>;

/**
 * Shared text styles. Every component is colour-agnostic (inherits
 * `currentColor`), so the surface decides the palette, and polymorphic via `as`
 * so it can adopt the right element (`h1`, `dd`, `dt`, ...).
 */

/** Hero-scale headline. */
export function Display<T extends ElementType = 'h1'>({ as, className, ...props }: TextProps<T>) {
  const Comp: ElementType = as ?? 'h1';

  return (
    <Comp
      className={cn(
        `
          text-5xl font-bold tracking-tight
          sm:text-6xl
          md:text-7xl
          lg:text-display
        `,
        className,
      )}
      {...props}
    />
  );
}

/** Supporting line beneath a Display headline. */
export function Lead<T extends ElementType = 'p'>({ as, className, ...props }: TextProps<T>) {
  const Comp: ElementType = as ?? 'p';

  return (
    <Comp
      className={cn(
        `
          text-base font-medium
          sm:text-lg
          lg:text-xl
        `,
        className,
      )}
      {...props}
    />
  );
}

/** Small uppercase overline for section labels. */
export function Eyebrow<T extends ElementType = 'p'>({ as, className, ...props }: TextProps<T>) {
  const Comp: ElementType = as ?? 'p';

  return (
    <Comp
      className={cn(
        'text-xs font-semibold tracking-wide text-muted-foreground uppercase',
        className,
      )}
      {...props}
    />
  );
}

/** Prominent figure: stat values, a broker's name. */
export function Figure<T extends ElementType = 'p'>({ as, className, ...props }: TextProps<T>) {
  const Comp: ElementType = as ?? 'p';

  return (
    <Comp
      className={cn(
        `
          text-2xl font-medium
          md:text-3xl
        `,
        className,
      )}
      {...props}
    />
  );
}

/** Default body copy. */
export function Body<T extends ElementType = 'p'>({ as, className, ...props }: TextProps<T>) {
  const Comp: ElementType = as ?? 'p';

  return <Comp className={cn('text-base', className)} {...props} />;
}
