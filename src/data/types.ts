import type { StaticImageData } from 'next/image';

/**
 * A single listing fact ("Beds" / "4"). Values are pre-formatted display
 * strings because formatting is a data concern, not a component one.
 */
export type PropertyStat = {
  label: string;
  value: string;
};

/**
 * Image sources accept either a statically imported asset (co-located,
 * optimized, with an auto blur placeholder) or a remote URL string for
 * listings whose media lives in a CMS.
 */
export type PropertyImage = StaticImageData | string;

export type PropertyBroker = {
  role: string;
  agency: string;
  name: string;
  licenseNumber: string;
  phone: string;
  email: string;
  photo: PropertyImage;
};

export type Property = {
  /** URL-safe identifier, ready for a future `/properties/[slug]` route. */
  slug: string;
  name: string;
  location: string;
  heroImage: PropertyImage;
  heroImageAlt: string;
  /** Flexible list: listings surface different specs (lot size, HOA, acreage, ...). */
  stats: PropertyStat[];
  /** The asking price is kept out of `stats`: it gets distinct emphasis. */
  priceLabel: string;
  price: string;
  broker: PropertyBroker;
};
