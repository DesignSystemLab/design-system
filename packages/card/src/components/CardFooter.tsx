/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { useContext } from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import { DEFAULT_BORDER_COLOR } from '../constants';
import { CardContext } from './CardContext';
import createContentStyle from '../styles/createContentStytle';
import type { CardFooterProps } from '../types';

export const CardFooter = (props: CardFooterProps) => {
  const { children, as = 'footer', className = '', ...restProps } = props;
  const { divider, direction } = useContext(CardContext).styleProps;
  return jsx(
    as,
    {
      css: createContentStyle(divider, direction, DEFAULT_BORDER_COLOR),
      className: `${className} ${createClassVariant('card', 'footer')}`,
      ...restProps
    },
    children
  );
};
