import { defaultContextValues, CardContext } from '../context';

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
