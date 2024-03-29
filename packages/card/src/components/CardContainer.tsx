/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { useContext } from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import { DEFAULT_BORDER_COLOR } from '../constants';
import { CardContext } from '../context';
import createCardStyle from '../styles/createCardStyle';
import createFlexStyle from '../styles/createFlexStyle';
import { CardProps, CardStyle } from '../types';

export const CardContainer = (props: Omit<CardProps, CardStyle>) => {
  const { children, as = 'div', role = 'article', className = '', ...restProps } = props;
  const { size, variant, color, justify, align, direction } = useContext(CardContext).styleProps;
  const cardBaseStyle = createCardStyle(size, variant, color, DEFAULT_BORDER_COLOR);
  const flexStyle = createFlexStyle(justify, align, direction);
  return jsx(
    as,
    {
      css: [...cardBaseStyle, flexStyle],
      role,
      className: `${createClassVariant('card', 'article')} ${className}`,
      ...restProps
    },
    children
  );
};

CardContainer.displayName = 'CardContainer';
