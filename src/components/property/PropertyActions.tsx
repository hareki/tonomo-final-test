import { type ComponentProps } from 'react';

import Link from 'next/link';

import { Button } from '@/src/components/ui/Button';

type ButtonProps = ComponentProps<typeof Button>;

/** Primary CTA, shared by the header and the mobile drawer. */
export function ContactButton(props: ButtonProps) {
  return (
    <Button variant='solid' {...props}>
      Contact
    </Button>
  );
}

/** Links to the documents section; shared by the header and the mobile drawer. */
export function DocumentsButton(props: ButtonProps) {
  return (
    <Button variant='outline' nativeButton={false} render={<Link href='#documents' />} {...props}>
      Documents
    </Button>
  );
}
