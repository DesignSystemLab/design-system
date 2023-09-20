/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { useContext } from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import * as Style from '../styles';
import { DEFAULT_BORDER_COLOR } from '../constants';
import { CardContext } from '../context';
import type { CardFooterProps } from '../types';

export const CardFooter = (props: CardFooterProps) => {
  const { direction } = useContext(CardContext).styleProps;
  const { children, as = 'footer', className = '', ...restProps } = props;
  return jsx(
    as,
    {
      css: Style.createBorderDirection(direction, DEFAULT_BORDER_COLOR),
      className: `${className} ${createClassVariant('card', 'footer')}`,
      ...restProps
    },
    children
  );
};

CardFooter.displayName = 'CardFooter';
