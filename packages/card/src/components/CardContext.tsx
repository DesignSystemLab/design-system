import { createContext } from 'react';
import { DEFAULT_CARD_STYLE } from '../constants';
import type { ReturnContext } from '../types';

const defaultContextValues: ReturnContext = {
  cardProps: {},
  styleProps: DEFAULT_CARD_STYLE
};

export const CardContext = createContext<ReturnContext>(defaultContextValues);

export const CardProvider = ({ ...props }) => {
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

  return (
    <CardContext.Provider
      value={{
        styleProps: { align, color, direction, justify, size, variant },
        cardProps: restProps
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};
