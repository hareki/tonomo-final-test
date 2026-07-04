import { PropertyLanding } from '@/src/components/property/PropertyLanding';
import { featuredProperty } from '@/src/data';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: featuredProperty.name,
  description: `${featuredProperty.name}, ${featuredProperty.location}`,
};

export default function Home() {
  return <PropertyLanding property={featuredProperty} />;
}
