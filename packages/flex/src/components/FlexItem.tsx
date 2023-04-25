/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { createClassVariant } from '@jdesignlab/theme';
import { itemStyle } from '../styles';
import type { FlexItemProps } from '../types';

export const FlexItem = ({ child }: FlexItemProps) => {
  const { children, as = 'div' ?? child?.type, style, flex, self, order, ...otherProps } = child?.props;
  return (
    <>
      {child &&
        jsx(
          as,
          {
            className: createClassVariant('flex', 'item'),
            css: itemStyle(flex, self, order),
            style,
            ...otherProps
          },
          children
        )}
    </>
  );
};
