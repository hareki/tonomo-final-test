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
    <section className='relative isolate flex h-[max(680px,70svh)] grow flex-col'>
      <Image
        src={property.heroImage}
        alt={property.heroImageAlt}
        fill
        preload
        placeholder={typeof property.heroImage === 'string' ? 'empty' : 'blur'}
        sizes='100vw'
        quality={100}
        className='-z-10 object-cover object-right'
      />

      <PropertyHeader />

      <Container
        className='
          relative pt-32
          sm:pt-36
          md:pt-40
          lg:pt-44
        '
      >
        <Display className='revealing-left text-white'>{property.name}</Display>
        <Lead className='revealing-right text-white'>{property.location}</Lead>
      </Container>

      <div className='mt-auto px-8'>
        <PropertyStats
          stats={property.stats}
          priceLabel={property.priceLabel}
          price={property.price}
        />
      </div>
    </section>
  );
}
