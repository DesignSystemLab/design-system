import { useMemo } from 'react';
import { defaultContextValues, CardContext } from '../context';
import type { FlexToken, Direction, Size, Variant } from '../types';
import type { ColorToken } from '@jdesignlab/theme';

interface CardProps {
  align?: FlexToken;
  justify?: FlexToken;
  color?: ColorToken;
  direction?: Direction;
  size?: Size;
  variant?: Variant;
}

interface CardProviderProps {
  cardProps: CardProps;
  children: React.ReactNode;
}

export const CardProvider = ({ ...props }: CardProviderProps) => {
  const { cardProps } = props;
  const defaultStyleProps = defaultContextValues.styleProps;

  const {
    align = defaultStyleProps.align,
    color = defaultStyleProps.color,
    direction = defaultStyleProps.direction,
    justify = defaultStyleProps.justify,
    size = defaultStyleProps.size,
    variant = defaultStyleProps.variant,
    ...restProps
  } = cardProps;

  const providerValue = useMemo(
    () => ({
      styleProps: {
        align,
        color,
        direction,
        justify,
        size,
        variant
      },
      cardProps: restProps
    }),
    [align, color, direction, justify, restProps, size, variant]
  );

  return <CardContext.Provider value={providerValue}>{props.children}</CardContext.Provider>;
};
