import { type ReactNode } from 'react';

import { cn } from '@/src/lib/tailwind/utils';

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

/** Shared horizontal gutter so every page band aligns on the same axis. */
export function Container({ className, children }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-page px-8', className)}>{children}</div>;
}
