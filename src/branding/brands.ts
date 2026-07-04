import { TonomoLogo } from '@/src/components/icons/TonomoLogo';

import type { BrandConfig } from './types';

export const tonomoBrand: BrandConfig = {
  id: 'tonomo',
  name: 'Tonomo',
  colors: {
    primary: 'var(--color-blue-600)',
    primaryForeground: 'var(--color-white)',
  },
  fonts: {
    sans: 'var(--font-ibm-plex-sans)',
    heading: 'var(--font-ibm-plex-sans)',
  },
  Logo: TonomoLogo,
};

const brands: Record<string, BrandConfig> = {
  [tonomoBrand.id]: tonomoBrand,
};

/**
 * Resolve a brand by its (serializable) id. Falls back to the default Tonomo
 * brand for unknown tenants. Register new agencies by adding a `BrandConfig`
 * here; a bespoke font is loaded via `next/font` and referenced through its CSS
 * variable in that brand's `fonts`.
 */
export function getBrand(id = tonomoBrand.id): BrandConfig {
  return brands[id] ?? tonomoBrand;
}
