/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { useContext } from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import { CardContext } from '../context';
import createContentStyle from '../styles/createContentStyle';
import type { CardHeaderProps } from '../types';
import { DEFAULT_BORDER_COLOR } from '../constants';

export const CardHeader = (props: CardHeaderProps) => {
  const { children, as = 'header', role = 'heading', className = '', ...restProps } = props;
  const { direction } = useContext(CardContext).styleProps;

  return jsx(
    as,
    {
      css: [createContentStyle(direction, DEFAULT_BORDER_COLOR)],
      className: `${className} ${createClassVariant('card', 'footer')}`,
      ...restProps
    },
    children
  );
};

CardHeader.displayName = 'CardHeader';
