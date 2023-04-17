/** @jsxImportSource @emotion/react */
import { POPOVER_BORDER_COLOR } from '../constants';
import footerStyle from '../styles/createFooterStyle';

export const popoverFooter = (props: { children: React.ReactNode }) => {
  return <footer css={footerStyle(POPOVER_BORDER_COLOR)}>{props.children}</footer>;
};
