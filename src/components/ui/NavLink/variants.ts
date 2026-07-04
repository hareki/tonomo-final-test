import { cva } from 'class-variance-authority';

export const navLinkVariants = cva(
  `
    cursor-pointer text-base transition-colors
    focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4
    focus-visible:outline-current
  `,
  {
    variants: {
      /* `inverse` is for nav over photography/hero, where text is always
       * white regardless of brand (see the hero note in theme.css). */
      tone: {
        default: `
          text-foreground
          hover:text-primary
        `,
        inverse: `
          link-underline text-white/90
          hover:text-white
        `,
      },
    },
    defaultVariants: {
      tone: 'default',
    },
  },
);
