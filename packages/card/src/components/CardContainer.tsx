/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { useContext } from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import { DEFAULT_BORDER_COLOR } from '../constants';
import { CardContext } from '../context';
import * as Style from '../styles';
import { CardProps, CardStyle } from '../types';

export const CardContainer = (props: Omit<CardProps, CardStyle>) => {
  const { children, as = 'div', role = 'article', className = '', ...restProps } = props;
  const { size, variant, color, justify, align, direction } = useContext(CardContext).styleProps;
  const cardBaseStyle = Style.createCardVariant(size, variant, color, DEFAULT_BORDER_COLOR);
  const flexStyle = Style.createFlexStyle(justify, align, direction);
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
