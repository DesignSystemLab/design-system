/** @jsxImportSource @emotion/react */
import { flexGrow } from '../styles/createFlexStyle';
import type { DrawerChildrenProps } from '../types';

export const DrawerFooter = (props: DrawerChildrenProps) => {
  return <div css={flexGrow(1)}>{props.children}</div>;
};
