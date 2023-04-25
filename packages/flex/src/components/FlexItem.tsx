/** @jsxImportSource @emotion/react */
import { containerStyle, itemStyle } from '../styles';
import type { FlexItemProps, FlexContainerProps } from '../types';
import React from 'react';

export const FlexItem = ({ child }: FlexItemProps) => {
  const { children, style, flex, self, order } = child?.props;
  return (
    <>
      {child && (
        <div role="listitem" css={{ ...itemStyle(flex, self, order), ...style }} {...child.props}>
          {children}
        </div>
      )}
    </>
  );
};
