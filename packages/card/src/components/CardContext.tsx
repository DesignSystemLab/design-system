import { createContext } from 'react';
import { DEFAULT_CARD_STYLE } from '../constants';
import type { ReturnContext } from '../types';

const defaultContextValues: ReturnContext = {
  cardProps: {},
  styleProps: DEFAULT_CARD_STYLE
};

export const CardContext = createContext<ReturnContext>(defaultContextValues);

export const CardProvider = ({ ...props }) => {
  const { children, cardProps } = props;
  const defaultStyleProps = defaultContextValues.styleProps;
  const {
    align = defaultStyleProps.align,
    color = defaultStyleProps.color,
    direction = defaultStyleProps.direction,
    divider = defaultStyleProps.divider,
    justify = defaultStyleProps.justify,
    size = defaultStyleProps.size,
    variant = defaultStyleProps.variant,
    ...restProps
  } = cardProps;
  return (
    <CardContext.Provider
      value={{
        styleProps: { align, color, direction, divider, justify, size, variant },
        cardProps: restProps
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
