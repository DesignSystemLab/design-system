/** @jsxImportSource @emotion/react */
import { useDrawerStyle } from '../hooks/useDrawerStyle';
import type { DrawerChildrenProps } from '../types';

export const DrawerHeader = (props: DrawerChildrenProps) => {
  const { drawerFlexGrow } = useDrawerStyle();
  return <div css={drawerFlexGrow(1)}>{props.children}</div>;
};
