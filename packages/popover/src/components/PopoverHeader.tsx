/** @jsxImportSource @emotion/react */
import { POPOVER_BORDER_COLOR } from '../constants';
import headerStyle from '../styles/createHeaderStyle';

export const PopoverHeader = (props: { children?: React.ReactNode }) => {
  return <header css={headerStyle(POPOVER_BORDER_COLOR)}>{props.children}</header>;
};
