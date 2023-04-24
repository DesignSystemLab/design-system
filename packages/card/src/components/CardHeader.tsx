/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { createClassVariant } from '@jdesignlab/theme';
import type { CardHeaderProps } from '../types';

export const CardHeader = (props: CardHeaderProps) => {
  const { children, as = 'header', role = 'heading', className = '', ...restProps } = props;

  return jsx(
    as,
    {
      role,
      className: `${className} ${createClassVariant('card', 'header')}`,
      ...restProps
    },
    children
  );
};
