import type { NavMenuItem } from '@/src/components/ui/NavMenu';

/** A submenu: a labelled group of links (renders as a dropdown on desktop). */
export type NavGroup = {
  label: string;
  items: NavMenuItem[];
};

/** A top-level nav entry: either a single link or a group of links. */
export type NavEntry = NavMenuItem | NavGroup;

export function isNavGroup(entry: NavEntry): entry is NavGroup {
  return 'items' in entry;
}

/**
 * The property nav, shared by the desktop header (`NavLink`/`NavMenu`) and the
 * mobile drawer (`NavMenuButton`) so both stay in sync. Targets are hash
 * placeholders until the corresponding page sections exist.
 */
export const PROPERTY_NAV: NavEntry[] = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'Overview', href: '#overview' },
  { label: '3D tour', href: '#tour' },
  {
    label: 'Floor Plans',
    items: [
      { label: 'Main Level', href: '#floor-plans' },
      { label: 'Upper Level', href: '#floor-plans' },
    ],
  },
  {
    label: 'Videos',
    items: [
      { label: 'Walkthrough', href: '#videos' },
      { label: 'Drone Tour', href: '#videos' },
    ],
  },
];
