/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { createClassVariant } from '@jdesignlab/theme';
import { DEFAULT_BORDER_COLOR } from '../constants';
import { useContext } from 'react';
import { CardContext } from './CardContext';
import createCardStyle from '../styles/createCardStyle';
import createFlexStyle from '../styles/createFlexStyle';
import type { CardProps, CardStyle } from '../types';

export const CardContainer = (props: Omit<CardProps, CardStyle>) => {
  const { children, as = 'div', role = 'article', className, ...restProps } = props;
  const { size, variant, color, justify, align, direction } = useContext(CardContext).styleProps;
  const cardBaseStyle = createCardStyle(size, variant, color, DEFAULT_BORDER_COLOR);
  const flexStyle = createFlexStyle(justify, align, direction);

  return jsx(
    as,
    {
      css: [...cardBaseStyle, flexStyle],
      role,
      className: `${className} ${createClassVariant('card', 'article')}`,
      ...restProps
    },
    children
  );
};
