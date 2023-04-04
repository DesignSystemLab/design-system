/** @jsxImportSource @emotion/react */
import { flexGrow } from '../styles/createFlexStyle';
import type { DrawerChildrenProps } from '../types';

export const DrawerBody = (props: DrawerChildrenProps) => {
  return (
    <div aria-label="drawer body" css={flexGrow(2)}>
      {props.children}
    </div>
  );
};
