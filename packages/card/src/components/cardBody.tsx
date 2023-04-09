/** @jsxImportSource @emotion/react */

import { useContext } from 'react';
import { CardContext } from './cardContext';

export const CardBody = (props: { children: React.ReactNode }) => {
  const context = useContext(CardContext);
  return <div css={context?.style.bodyStyle}>{props.children}</div>;
};
