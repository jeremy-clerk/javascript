import cn from 'clsx';
import * as React from 'react';

import { Spinner } from './spinner';

export const TextButton = React.forwardRef(function TextButton(
  {
    busy,
    children,
    className,
    disabled,
    icon,
    ...props
  }: React.ButtonHTMLAttributes<HTMLButtonElement> & { icon?: React.ReactNode; busy?: boolean },
  forwardedRef: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      ref={forwardedRef}
      {...props}
      className={cn(
        'flex items-center justify-center gap-2 w-full bg-transparent text-gray-12 font-medium rounded-md bg-clip-padding border border-transparent py-1.5 px-2.5 outline-none focus-visible:ring-[0.1875rem] focus-visible:ring-gray-a3 focus-visible:border-gray-a8 text-base',
        busy ? 'cursor-wait' : disabled ? 'disabled:cursor-not-allowed disabled:opacity-50' : 'hover:underline',
        className,
      )}
      disabled={busy || disabled}
    >
      {icon ? <span className='text-base'>{busy ? <Spinner>Loading…</Spinner> : <span>{icon}</span>}</span> : null}
      {children}
    </button>
  );
});