import type { ComponentProps } from 'react';

export type LegendSize = 'lg' | 'md' | 'sm';

export const legendSizeStyle: { [key in LegendSize]: string } = {
  lg: 'text-std-18B-160',
  md: 'text-std-17B-170',
  sm: 'text-std-16B-170',
};

export type LegendProps = ComponentProps<'legend'> & {
  size?: LegendSize;
};

export const Legend = (props: LegendProps) => {
  const { children, className, size = 'md', ...rest } = props;

  return (
    <legend
      className={`
        flex w-fit items-center gap-2 text-solid-gray-800
        ${legendSizeStyle[size]}
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </legend>
  );
};
