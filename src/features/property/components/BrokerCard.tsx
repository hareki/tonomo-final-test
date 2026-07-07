import Image from 'next/image';

import { Container } from '@/src/components/ui/Container';
import { Body, Figure } from '@/src/components/ui/Typography';
import type { PropertyBroker } from '@/src/features/property/data/types';

type BrokerCardProps = {
  broker: PropertyBroker;
};

export function BrokerCard({ broker }: BrokerCardProps) {
  const contacts = [
    { href: `tel:${broker.phone.replace(/\D/g, '')}`, label: broker.phone },
    { href: `mailto:${broker.email}`, label: broker.email },
  ];

  return (
    <Container className='revealing-bottom text-foreground'>
      <div className='bg-muted p-8'>
        <h2 className='sr-only'>Listing broker</h2>
        <div
          className={`
            flex flex-col gap-6
            md:flex-row md:items-center md:gap-8
          `}
        >
          {/* Empty alt: the broker's name is the adjacent text. */}
          <Image
            src={broker.photo}
            alt=''
            width={144}
            height={144}
            placeholder={typeof broker.photo === 'string' ? 'empty' : 'blur'}
            className='size-39 shrink-0 object-cover'
          />

          <div className='flex flex-col gap-2.5'>
            <Body>
              {broker.role} / {broker.agency}
            </Body>
            <Figure>{broker.name}</Figure>
          </div>

          <div
            className={`
              flex flex-col gap-2.5 text-base font-medium
              md:ms-auto
            `}
          >
            <p>{broker.licenseNumber}</p>
            {contacts.map((contact) => (
              <a
                key={contact.href}
                href={contact.href}
                className={`
                  w-fit transition-colors
                  hover:text-primary
                `}
              >
                {contact.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
