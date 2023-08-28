/** @jsxImportSource @emotion/react */
import * as Style from '../styles';
import { createClassVariant } from '@jdesignlab/theme';

export const popoverFooter = (props: { children: React.ReactNode }) => {
  return (
    <footer className={createClassVariant('popover', 'footer')} css={Style.footer}>
      {props.children}
    </footer>
  );
};

popoverFooter.displayName = 'PopoverFooter';
