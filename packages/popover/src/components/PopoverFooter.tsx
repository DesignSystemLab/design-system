/** @jsxImportSource @emotion/react */
import { createClassVariant } from '@jdesignlab/theme';
import { POPOVER_BORDER_COLOR } from '../constants';
import footerStyle from '../styles/createFooterStyle';

export const popoverFooter = (props: { children: React.ReactNode }) => {
  return (
    <footer className={createClassVariant('popover', 'footer')} css={footerStyle(POPOVER_BORDER_COLOR)}>
      {props.children}
    </footer>
  );
};
