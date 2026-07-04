'use client';

import { type SVGProps } from 'react';

import { useBrand } from '@/src/branding/BrandContext';

/**
 * The active agency's logo, resolved from brand context. Swapping the brand
 * swaps the mark with no change to consumers.
 */
export function BrandLogo(props: SVGProps<SVGSVGElement>) {
  const { Logo, name } = useBrand();

  return <Logo aria-label={name} {...props} />;
}
