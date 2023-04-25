/** @jsxImportSource @emotion/react */
import { containerStyle, itemStyle } from '../styles';
import type { FlexItemProps, FlexContainerProps } from '../types';
import React, { JSXElementConstructor, ReactElement } from 'react';

export const FlexItem = ({ child }: FlexItemProps) => {
  const { children, as = 'div' ?? child?.type, style, flex, self, order } = child?.props;
  return (
    <>
      {child &&
        React.createElement(
          as,
          {
            role: 'listitem',
            css: { ...itemStyle(flex, self, order), ...style },
            ...child?.props
          },
          children
        )}
    </>
  );
};
