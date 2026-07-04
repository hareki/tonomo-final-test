import { type ReactNode } from 'react';

import { cn } from '@/src/lib/tailwind/utils';

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

/** Shared horizontal gutter so every page band aligns on the same axis. */
export function Container({ className, children }: ContainerProps) {
  // Content width stretches as much as possible, capped at w-page, have gutter padding
  return (
    <div
      className={cn(
        `
          mx-auto box-content w-[calc(100%-2*var(--gutter))] max-w-page px-(--gutter)
          [--gutter:2rem]
        `,
        className,
      )}
    >
      {children}
    </div>
  );
}
