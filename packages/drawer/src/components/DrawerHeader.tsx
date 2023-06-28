/** @jsxImportSource @emotion/react */
import { createClassVariant } from '@jdesignlab/theme';
import { flexGrow } from '../styles/createFlexStyle';
import type { DrawerChildrenProps } from '../types';

export const DrawerHeader = (props: DrawerChildrenProps) => {
  return (
    <header
      aria-label="drawer header"
      css={[flexGrow(1), { width: '100%' }]}
      className={createClassVariant('drawer', 'header')}
    >
      {props.children}
    </header>
  );
};
