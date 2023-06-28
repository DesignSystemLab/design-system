/** @jsxImportSource @emotion/react */
import { createClassVariant } from '@jdesignlab/theme';
import { flexGrow } from '../styles/createFlexStyle';
import type { DrawerChildrenProps } from '../types';

export const DrawerBody = (props: DrawerChildrenProps) => {
  return (
    <div
      aria-label="drawer body"
      css={[flexGrow(2), { width: '100%' }]}
      className={createClassVariant('drawer', 'article')}
    >
      {props.children}
    </div>
  );
};
