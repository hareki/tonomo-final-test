import { Stat } from '@/src/components/ui/Stat';
import type { PropertyStat } from '@/src/data/types';

import { Container } from '../ui/Container';

type PropertyStatsProps = {
  stats: PropertyStat[];
  priceLabel: string;
  price: string;
};

export function PropertyStats({ stats, priceLabel, price }: PropertyStatsProps) {
  return (
    <Container className='revealing-top'>
      <div
        className='
          flex flex-col gap-5 bg-foreground/70 px-8 py-6 text-white
          md:flex-row md:items-start md:gap-12
        '
      >
        <dl
          aria-label='Property details'
          className='
            grid grid-cols-2 justify-items-start gap-x-12 gap-y-5
            md:flex md:basis-[55%] md:justify-between
          '
        >
          {stats.map((stat) => (
            <Stat key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </dl>

        <dl aria-label='Price' className='md:ml-auto'>
          <Stat label={priceLabel} value={price} />
        </dl>
      </div>
    </Container>
  );
}
