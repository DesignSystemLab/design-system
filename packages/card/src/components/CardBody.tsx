/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { useContext } from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import { CardContext } from '../context';
import createContentStyle from '../styles/createContentStyle';
import { DEFAULT_BORDER_COLOR } from '../constants';
import type { CardBodyProps } from '../types';

export const CardBody = (props: CardBodyProps) => {
  const { children, as = 'div', className = '', ...restProps } = props;
  const { direction } = useContext(CardContext).styleProps;
  return jsx(
    as,
    {
      css: createContentStyle(direction, DEFAULT_BORDER_COLOR),
      className: `${createClassVariant('card', 'content')} ${className}`,
      ...restProps
    },
    children
  );
};

CardBody.displayName = 'CardBody';
