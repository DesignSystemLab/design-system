/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { useContext } from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import * as Style from '../styles';
import { CardContext } from '../context';
import { DEFAULT_BORDER_COLOR } from '../constants';
import type { CardHeaderProps } from '../types';

export const CardHeader = (props: CardHeaderProps) => {
  const { children, as = 'header', className = '', ...restProps } = props;
  const { direction } = useContext(CardContext).styleProps;

  return jsx(
    as,
    {
      css: [Style.createBorderDirection(direction, DEFAULT_BORDER_COLOR)],
      className: `${className} ${createClassVariant('card', 'footer')}`,
      ...restProps
    },
    children
  );
};

CardHeader.displayName = 'CardHeader';
