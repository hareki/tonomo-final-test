import { type ComponentProps } from 'react';

import Link from 'next/link';

import { cn } from '@/src/lib/tailwind/utils';

import { navLinkVariants } from './variants';

import type { VariantProps } from 'class-variance-authority';

type NavLinkProps = ComponentProps<typeof Link> & VariantProps<typeof navLinkVariants>;

export function NavLink({ className, tone, ...props }: NavLinkProps) {
  return <Link className={cn(navLinkVariants({ tone, className }))} {...props} />;
}
