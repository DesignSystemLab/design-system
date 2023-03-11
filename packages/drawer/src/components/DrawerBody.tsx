/** @jsxImportSource @emotion/react */
import { useDrawerStyle } from '../hooks/useDrawerStyle';
import type { DrawerChildrenProps } from '../types';

export const DrawerBody = (props: DrawerChildrenProps) => {
  const { drawerFlexGrow } = useDrawerStyle();
  return <div css={drawerFlexGrow(2)}>{props.children}</div>;
};
