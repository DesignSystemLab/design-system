/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { useContext } from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import { CardContext } from './CardContext';
import createContentStyle from '../styles/createContentStytle';
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
