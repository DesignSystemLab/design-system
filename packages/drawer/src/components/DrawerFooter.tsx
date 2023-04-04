/** @jsxImportSource @emotion/react */
import { flexGrow } from '../styles/createFlexStyle';
import type { DrawerChildrenProps } from '../types';

export const DrawerFooter = (props: DrawerChildrenProps) => {
  return (
    <footer aria-label="drawer footer" css={flexGrow(1)}>
      {props.children}
    </footer>
  );
};
