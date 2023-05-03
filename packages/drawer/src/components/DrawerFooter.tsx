/** @jsxImportSource @emotion/react */
import { createClassVariant } from '@jdesignlab/theme';
import { flexGrow } from '../styles/createFlexStyle';
import type { DrawerChildrenProps } from '../types';

export const DrawerFooter = (props: DrawerChildrenProps) => {
  return (
    <footer aria-label="drawer footer" css={flexGrow(1)} className={createClassVariant('drawer', 'footer')}>
      {props.children}
    </footer>
  );
};
