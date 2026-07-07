'use client';

import type { CSSProperties, ReactNode } from 'react';

import { BrandContext } from './BrandContext';
import { getBrand } from '../data';

type BrandProviderProps = {
  /** Serializable brand id, resolved against the registry in `brands.ts`. */
  brandId?: string;
  children: ReactNode;
};

/**
 * Distributes the active brand through context and paints its tokens as CSS
 * custom properties so `bg-primary`, the body font, etc. re-theme per agency
 * without any component edits. The wrapper is `display: contents` (no layout
 * box) but still inherits its custom properties and font-family to the subtree.
 */
export function BrandProvider({ brandId, children }: BrandProviderProps) {
  const brand = getBrand(brandId);

  const style = {
    '--primary': brand.colors.primary,
    '--primary-foreground': brand.colors.primaryForeground,
    '--font-sans': brand.fonts.sans,
    '--font-heading': brand.fonts.heading,
    fontFamily: 'var(--font-sans)',
  } as CSSProperties;

  return (
    <BrandContext value={brand}>
      <div style={style} className='contents'>
        {children}
      </div>
    </BrandContext>
  );
}
