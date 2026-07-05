import { notFound } from 'next/navigation';

import { PropertyLanding } from '@/src/components/property/PropertyLanding';
import { getPropertyBySlug, properties } from '@/src/data';

import type { Metadata } from 'next';

type PropertyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {};
  }

  return {
    title: property.name,
    description: `${property.name}, ${property.location}`,
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return <PropertyLanding property={property} />;
}
