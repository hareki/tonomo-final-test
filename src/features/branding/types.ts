import type { ComponentType, SVGProps } from 'react';

/**
 * The serializable half of a brand: safe to resolve on the server and pass
 * across the RSC boundary to the client `BrandProvider` (all strings).
 */
export type BrandTokens = {
  id: string;
  name: string;
  colors: {
    primary: string;
    primaryForeground: string;
  };
  fonts: {
    sans: string;
    heading: string;
  };
};

/**
 * A brand plus its logo component. The logo is a component (not serializable),
 * so a full `BrandConfig` is only ever resolved on the client from the registry
 * in `brands.ts` (keyed by the serializable `id`).
 */
export type BrandConfig = BrandTokens & {
  Logo: ComponentType<SVGProps<SVGSVGElement>>;
};
