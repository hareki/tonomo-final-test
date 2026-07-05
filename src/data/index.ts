import brokerPhoto from './assets/broker-photo.png';
import heroImage from './assets/property-hero.png';

import type { Property } from './types';

// Real listing assets are co-located with this data module and statically
// imported, so Next optimizes them and generates a blur placeholder.
export const baederwoodProperty: Property = {
  slug: 'baederwood-16926',
  name: '16926 Baederwood',
  location: 'Rockville, Maryland 20855, USA',
  heroImage,
  heroImageAlt: 'Front exterior of 16926 Baederwood at dusk, with a lit pool in the foreground',
  stats: [
    { label: 'Beds', value: 4 },
    { label: 'Baths', value: 5 },
    { label: 'Living Area', value: 4 },
    { label: 'Lot Size', value: 11000 },
  ],
  priceLabel: 'Offered at',
  price: 1350000,
  broker: {
    role: 'Lead Broker',
    agency: 'REMAX',
    name: 'Jane Doesmith',
    licenseNumber: '#123456',
    phone: '(914) 400-5228',
    email: 'jane.doesmith@remax.com',
    photo: brokerPhoto,
  },
};

export const properties: Property[] = [baederwoodProperty];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((property) => property.slug === slug);
}

/** The listing the home page features until routing by slug lands. */
export const featuredProperty = baederwoodProperty;
