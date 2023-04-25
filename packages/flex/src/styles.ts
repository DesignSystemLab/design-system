import { css } from '@emotion/react';
import type { FlexContainerProps, Self } from './types';

export const containerStyle = (props: FlexContainerProps) => {
  return css({
    ...props.style,
    display: 'flex',
    flexDirection: props.direction || 'row',
    flexWrap: props.wrap || 'nowrap',
    justifyContent: props.justify,
    alignItems: props.items,
    alignContent: props.content,
    gap: props.gap
  });
};

export const itemStyle = (flex?: number, self?: Self, order?: number) => {
  return css({
    flexGrow: flex,
    alignSelf: self,
    order: order
  });
};
