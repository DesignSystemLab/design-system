/** @jsxImportSource @emotion/react */
import { flexGrow } from '../styles/createFlexStyle';
import type { DrawerChildrenProps } from '../types';

export const DrawerBody = (props: DrawerChildrenProps) => {
  return <div css={flexGrow(2)}>{props.children}</div>;
};
