import { Body, Figure } from '@/src/components/ui/Typography';
import { cn } from '@/src/lib/tailwind/utils';

type StatProps = {
  label: string;
  value: string;
  className?: string;
};

/** A label-over-value figure. Must be rendered inside a `<dl>`. */
export function Stat({ label, value, className }: StatProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <Body as='dt' className='md:text-right'>
        {label}
      </Body>
      <Figure as='dd' className='md:text-right'>
        {value}
      </Figure>
    </div>
  );
}
