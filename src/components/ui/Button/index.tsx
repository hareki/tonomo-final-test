import { Button as ButtonPrimitive } from '@base-ui/react/button';

import { cn } from '@/src/lib/tailwind/utils';

import { buttonVariants } from './variants';

import type { VariantProps } from 'class-variance-authority';

type ButtonProps = ButtonPrimitive.Props & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, tone, size, ...props }: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot='button'
      className={cn(buttonVariants({ variant, tone, size, className }))}
      {...props}
    />
  );
}
