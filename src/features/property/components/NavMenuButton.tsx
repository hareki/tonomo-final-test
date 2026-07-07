'use client';

import { IconMenu2, IconX } from '@tabler/icons-react';

import { buttonVariants } from '@/src/components/ui/Button/variants';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@/src/components/ui/Drawer';
import { NavLink } from '@/src/components/ui/NavLink';
import { Eyebrow } from '@/src/components/ui/Typography';

import { isNavGroup, PROPERTY_NAV } from './nav-items';
import { ContactButton, DocumentsButton } from './PropertyActions';

import type { NavEntry } from './nav-items';
import type { VariantProps } from 'class-variance-authority';

type NavMenuButtonProps = Pick<VariantProps<typeof buttonVariants>, 'tone'>;

/** A single drawer entry: a labelled group of links, or one link. */
function NavDrawerItem({ entry }: { entry: NavEntry }) {
  if (isNavGroup(entry)) {
    const groupId = `nav-group-${entry.label.toLowerCase().replace(/\s+/g, '-')}`;

    return (
      <div role='group' aria-labelledby={groupId} className='flex flex-col gap-1'>
        <Eyebrow id={groupId} className='px-3 pt-4 pb-1 text-muted-foreground'>
          {entry.label}
        </Eyebrow>
        {entry.items.map((item) => (
          <DrawerClose key={item.label} asChild>
            <NavLink href={item.href} className='px-3 py-2.5'>
              {item.label}
            </NavLink>
          </DrawerClose>
        ))}
      </div>
    );
  }

  return (
    <DrawerClose asChild>
      <NavLink href={entry.href} className='px-3 py-2.5'>
        {entry.label}
      </NavLink>
    </DrawerClose>
  );
}

export function NavMenuButton({ tone = 'inverse' }: NavMenuButtonProps) {
  return (
    <Drawer direction='left'>
      <DrawerTrigger
        aria-label='Open navigation menu'
        className={buttonVariants({
          variant: 'ghost',
          tone,
          size: 'icon',
        })}
      >
        <IconMenu2 aria-hidden />
      </DrawerTrigger>

      <DrawerContent>
        <div className='flex items-center justify-between border-b border-border px-5 py-4'>
          <DrawerTitle asChild>
            <Eyebrow as='h2'>Menu</Eyebrow>
          </DrawerTitle>
          <DrawerClose
            aria-label='Close navigation menu'
            className={buttonVariants({ size: 'icon', variant: 'ghost' })}
          >
            <IconX aria-hidden />
          </DrawerClose>
        </div>

        <nav aria-label='Property sections' className='flex flex-col gap-1 overflow-y-auto p-3'>
          {PROPERTY_NAV.map((entry) => (
            <NavDrawerItem key={entry.label} entry={entry} />
          ))}

          <div className='mt-4 flex flex-col gap-3 px-2.5'>
            <DrawerClose asChild>
              <ContactButton
                className={`
                  w-full
                  sm:hidden
                `}
              />
            </DrawerClose>
            <DrawerClose asChild>
              <DocumentsButton
                tone='default'
                className={`
                  w-full
                  md:hidden
                `}
              />
            </DrawerClose>
          </div>
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
