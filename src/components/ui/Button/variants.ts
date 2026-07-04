import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  `
    inline-flex shrink-0 cursor-pointer items-center justify-center border font-semibold
    whitespace-nowrap transition-colors outline-none select-none
    focus-visible:outline-2 focus-visible:outline-offset-2
    disabled:pointer-events-none disabled:opacity-50
    [&_svg]:pointer-events-none [&_svg]:shrink-0
  `,
  {
    variants: {
      variant: {
        outline: `
          border-border bg-background text-foreground
          hover:bg-muted
          focus-visible:outline-ring
        `,
        ghost: `
          border-transparent text-foreground
          hover:bg-muted
          focus-visible:outline-ring
        `,
        solid: `
          border-transparent bg-foreground text-background
          hover:bg-foreground/90
          focus-visible:outline-ring
        `,
      },
      /* `inverse` is for buttons over photography/hero, where text is always
       * white regardless of brand (see the hero note in theme.css). */
      tone: {
        default: '',
        inverse: '',
      },
      size: {
        icon: `
          size-12
          [&_svg:not([class*='size-'])]:size-6
        `,
        default: `
          h-12 gap-2 px-8 text-base
          [&_svg:not([class*='size-'])]:size-6
        `,
      },
    },
    compoundVariants: [
      {
        variant: 'outline',
        tone: 'inverse',
        class: `
          border-white/80 bg-transparent text-white
          hover:bg-white/15
          focus-visible:outline-white
        `,
      },
      {
        variant: 'ghost',
        tone: 'inverse',
        class: `
          text-white
          hover:bg-white/15
          focus-visible:outline-white
        `,
      },
    ],
    defaultVariants: {
      variant: 'outline',
      tone: 'default',
      size: 'default',
    },
  },
);
