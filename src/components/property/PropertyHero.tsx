import Image from 'next/image';

import { Container } from '@/src/components/ui/Container';
import { Display, Lead } from '@/src/components/ui/Typography';
import type { Property } from '@/src/data/types';

import { PropertyHeader } from './PropertyHeader';
import { PropertyStats } from './PropertyStats';

type PropertyHeroProps = {
  property: Property;
};

export function PropertyHero({ property }: PropertyHeroProps) {
  return (
    <section className='relative isolate flex h-[max(680px,70svh)] grow flex-col justify-between'>
      <Image
        src={property.heroImage}
        alt={property.heroImageAlt}
        fill
        preload
        fetchPriority='high'
        placeholder={typeof property.heroImage === 'string' ? 'empty' : 'blur'}
        sizes='100vw'
        quality={75}
        className='-z-10 object-cover object-right'
      />

      <PropertyHeader />

      <Container
        className={`
          relative pt-33
          sm:pt-37
          md:pt-41
          lg:pt-45
        `}
      >
        <Display className='mb-3 revealing-left text-white'>{property.name}</Display>
        <Lead className='revealing-right text-white'>{property.location}</Lead>
      </Container>

      <PropertyStats
        stats={property.stats}
        priceLabel={property.priceLabel}
        price={property.price}
      />
    </section>
  );
}
