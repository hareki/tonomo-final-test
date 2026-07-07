# Tonomo - Multi-tenant Property Landing Page

A faithful, responsive implementation of the real-estate listing UI in the
[Figma design](https://www.figma.com/design/vWjXCs58sFkrUqLCTGzv0R/Middle-developer-test?node-id=0-1):
a full-bleed property hero with the listing address, a floating stats bar (Beds / Baths / Living
Area / Lot Size / Offered at), a broker card, and a responsive nav that collapses to a drawer on
smaller screens.

**Live demo:** https://tu-nguyen-tonomo-final-test.vercel.app/

The app is built **white-label**: one set of components renders any agency's branding (logo, colors,
fonts) from a config context, with no per-tenant component edits. See
[Multi-tenant branding](#multi-tenant-branding) below.

## Running locally

Requires Node 20+ and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Other scripts:

```bash
pnpm build      # production build
pnpm start      # serve the production build
pnpm cleanup    # typecheck + format + lint
```

## Stack

- **Next.js 16** (App Router, React 19, React Compiler, Turbopack). Server Components keep the UI
  off the client bundle; the small amount of interactivity (the mobile nav drawer) is the only
  client code.
- **Tailwind CSS v4**, driven by CSS custom properties. Brand tokens are plain CSS variables, which
  is what makes per-tenant theming possible without touching components. The design is flat by
  intent: `--radius: 0px` collapses the whole rounded scale.
- **[`@base-ui/react`](https://base-ui.com)** and **[`vaul`](https://vaul.emilkowal.ski/)** for
  headless component logic (the mobile nav drawer); all visual styling is hand-written.
- **[`class-variance-authority`](https://cva.style/)** for typed component variants
  (Button, NavLink).
- **[`@tabler/icons-react`](https://tabler.io/icons)** for icons.
- **[`next/font`](https://nextjs.org/docs/app/api-reference/components/font)** loads IBM Plex Sans as
  the default brand typeface; an agency can swap in its own face through the brand config.

Styling is **mobile-first**: base classes target mobile, and below `lg` the header collapses from
the full inline nav to a logo + Contact CTA + a hamburger that opens a nav drawer.

## Architecture

```
src/
  app/
    layout.tsx        Root shell: fonts + BrandProvider, skip link, <main>
    properties/
      [slug]/page.tsx Dynamic listing route: renders PropertyLanding for a slug
    icon.png          Favicon
  proxy.ts            Redirects / to the featured listing's /properties/[slug]
  features/
    branding/         Multi-tenant core
      components/     BrandProvider, BrandContext, BrandLogo
      data.ts         Brand registry
      types.ts
    property/         Property listing feature
      components/     PropertyLanding, PropertyHero, PropertyHeader, PropertyStats,
                      BrokerCard, PropertyActions, NavMenuButton, nav-items.ts
      data/           index.ts (listing data + queries), types.ts, assets/
  components/
    ui/               Reusable primitives (Button, NavLink, NavMenu, Stat,
                      Container, Drawer, Typography)
    icons/            TonomoLogo
  hooks/              useScrolled
  lib/                format/utils.ts (number/price formatters), tailwind/utils.ts (cn)
  styles/             theme.css (tokens), utilities.css, index.css
```

## Multi-tenant branding

The same components render any agency's brand without forking. A brand is a `BrandConfig`
(`src/branding/brands.ts`): an `id`, a display `name`, `colors` (primary / primary-foreground),
`fonts` (sans / heading, as CSS-variable strings), and a `Logo` component.

`BrandProvider` (`src/branding/BrandProvider.tsx`) resolves the active brand by `brandId` and paints
its tokens as CSS custom properties (`--primary`, `--font-sans`, ...) on a `display: contents`
wrapper, then shares the resolved brand through `BrandContext`. Utility classes like `bg-primary` and
the body font re-theme per tenant with zero component edits.

Only the serializable `brandId` crosses the server/client boundary; the logo component is resolved
client-side from the registry. To onboard an agency you register a new `BrandConfig` in `brands.ts`
(and load its font via `next/font`) => never by editing components.

## Interactive effects and animations

Optional per the brief, but a few touches were added to bring the UI to life. All motion is gated
behind `prefers-reduced-motion`.

- **Reveal animations.** On mount, the hero title and location fade in while sliding into place
  (`revealing-left` / `revealing-right`). The `revealing-*` utilities in `src/styles/utilities.css`
  compose a fade with a directional slide (left / right / top / bottom).
- **Header link hover underline.** Nav links over the hero photo carry an underline that sweeps in
  from the left on hover, animated with a scaling `::after` pseudo-element (the `link-underline`
  utility), not a static border.
- **Header dropdown menu.** Nav items with sub-pages (`NavMenu`, built on `@base-ui/react`) open a
  keyboard-accessible dropdown of links that fades and zooms in on open.
- **Mobile burger menu.** Below `lg`, the header collapses to a hamburger button (`NavMenuButton`)
  that opens a left-sliding [`vaul`](https://vaul.emilkowal.ski/) drawer with the full navigation,
  closing on selection.

## Brand assets

The **navbar wordmark** and the **favicon** (`src/app/icon.png`) are Tonomo's own brand assets,
reused for this exercise; all rights reserved by Tonomo. The listing photos (hero and broker) are
images from the Figma design, statically imported under `src/data/assets/` and served through `next/image`
with generated blur placeholders.
