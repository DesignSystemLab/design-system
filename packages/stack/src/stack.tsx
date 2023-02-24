/** @jsxImportSource @emotion/react */
import { useStyle } from './useStyle';
import { jsx } from '@emotion/react';
import type { StackProps } from './stackTypes';

export const Stack = (stackProps: StackProps) => {
  const { styleProps, cloneElements } = useStyle(stackProps);
  return jsx(stackProps.as || 'div', { css: styleProps }, cloneElements);
};
