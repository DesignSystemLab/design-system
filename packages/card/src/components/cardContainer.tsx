/** @jsxImportSource @emotion/react */

import { jsx } from '@emotion/react';
import { useContext } from 'react';
import { CardContext } from './cardContext';

export const CardContainer = (props: { children: React.ReactNode; as?: React.ElementType }) => {
  const { children, as } = props;
  const context = useContext(CardContext);
  return jsx(as ?? 'div', { css: context?.style.baseStyle }, children);
};
