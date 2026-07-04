import { Fragment } from 'react/jsx-runtime';

import type { Property } from '@/src/data/types';

import { BrokerCard } from './BrokerCard';
import { PropertyHero } from './PropertyHero';

type PropertyLandingProps = {
  property: Property;
};

export function PropertyLanding({ property }: PropertyLandingProps) {
  return (
    <Fragment>
      <PropertyHero property={property} />

      <section
        className={`
          bg-background px-8 pb-8
          sm:pb-12
          lg:pb-16
        `}
      >
        <BrokerCard broker={property.broker} />
      </section>
    </Fragment>
  );
}
