/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { createClassVariant } from '@jdesignlab/theme';
import { MAX_WIDTH_MEDIA_QUERY } from '../constants';
import { createStackStyle } from '../styles/createStackStyle';
import { createResponsiveStyle } from '../styles/createResponsiveStyle';
import { setMarginStyle } from '../styles/setMarginStyle';
import type { StackProps } from '../types';

export const Stack = (stackProps: StackProps) => {
  const { as = 'div', children, ...styleProps } = stackProps;
  const baseStyle = createStackStyle(styleProps);
  const responsiveStyle = createResponsiveStyle(styleProps.responsive, MAX_WIDTH_MEDIA_QUERY);
  const cloneElements = setMarginStyle(styleProps, MAX_WIDTH_MEDIA_QUERY, children);

  return jsx(
    as,
    { css: [baseStyle, responsiveStyle], className: `${createClassVariant('stack', 'ul')}`, role: 'list' },
    cloneElements
  );
};
