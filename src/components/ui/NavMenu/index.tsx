import { type ComponentProps } from 'react';

import { Menu } from '@base-ui/react/menu';
import { IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';

import { cn } from '@/src/lib/tailwind/utils';

import { navLinkVariants } from '../NavLink/variants';

import type { VariantProps } from 'class-variance-authority';

export type NavMenuItem = {
  label: string;
  href: ComponentProps<typeof Link>['href'];
};

type NavMenuProps = {
  label: string;
  items: NavMenuItem[];
} & VariantProps<typeof navLinkVariants>;

/** A nav item that opens a dropdown of links, styled to sit beside `NavLink`s. */
export function NavMenu({ label, items, tone }: NavMenuProps) {
  return (
    <Menu.Root>
      <Menu.Trigger className={cn(navLinkVariants({ tone }), 'inline-flex items-center gap-2')}>
        {label}
        <IconChevronDown aria-hidden className='size-4' stroke={3} />
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Positioner sideOffset={8}>
          <Menu.Popup
            className={`
              min-w-40 rounded-md border border-border bg-background py-1 shadow-lg
              data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95
            `}
          >
            {items.map((item) => (
              <Menu.LinkItem
                key={item.label}
                closeOnClick
                render={<Link href={item.href} />}
                className={`
                  block px-4 py-2 text-sm text-foreground outline-none
                  data-highlighted:bg-muted
                `}
              >
                {item.label}
              </Menu.LinkItem>
            ))}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
