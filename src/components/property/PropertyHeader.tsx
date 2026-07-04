'use client';

import Link from 'next/link';

import { BrandLogo } from '@/src/components/BrandLogo';
import { Container } from '@/src/components/ui/Container';
import { NavLink } from '@/src/components/ui/NavLink';
import { NavMenu } from '@/src/components/ui/NavMenu';
import { useScrolled } from '@/src/hooks/useScrolled';
import { cn } from '@/src/lib/tailwind/utils';

import { isNavGroup, PROPERTY_NAV } from './nav-items';
import { NavMenuButton } from './NavMenuButton';
import { ContactButton, DocumentsButton } from './PropertyActions';

export function PropertyHeader() {
  const scrolled = useScrolled();
  const tone = scrolled ? 'default' : 'inverse';

  return (
    <header
      className={cn(
        `
          fixed inset-x-0 top-0 z-40 transition-colors duration-300
          motion-reduce:transition-none
        `,
        scrolled ? 'bg-background/50 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <Container
        className={`
          flex items-center justify-between gap-4 py-4
          sm:gap-6 sm:py-6
        `}
      >
        <Link
          href='/'
          aria-label='Home'
          className={cn(
            `
              focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4
              focus-visible:outline-current
            `,
            scrolled ? 'text-foreground' : 'text-white',
          )}
        >
          <BrandLogo
            className={`
              h-5 w-auto
              sm:h-6
            `}
          />
        </Link>

        <nav
          aria-label='Property sections'
          className={`
            hidden items-center gap-12
            xl:flex
          `}
        >
          {PROPERTY_NAV.map((entry) =>
            isNavGroup(entry) ? (
              <NavMenu key={entry.label} tone={tone} label={entry.label} items={entry.items} />
            ) : (
              <NavLink key={entry.label} tone={tone} href={entry.href}>
                {entry.label}
              </NavLink>
            ),
          )}
        </nav>

        <div
          className={`
            flex items-center gap-3
            sm:gap-4
          `}
        >
          <DocumentsButton
            tone={tone}
            className={`
              hidden
              md:inline-flex
            `}
          />
          <ContactButton
            className={`
              hidden
              sm:inline-flex
            `}
          />

          <div className='xl:hidden'>
            <NavMenuButton tone={tone} />
          </div>
        </div>
      </Container>
    </header>
  );
}
