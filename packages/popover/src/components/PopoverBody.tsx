/** @jsxImportSource @emotion/react */
import { POPOVER_BORDER_COLOR } from '../constants';
import bodyStyle from '../styles/createBodyStyle';

export const PopoverBody = (props: { children: React.ReactNode }) => {
  return <section css={bodyStyle(POPOVER_BORDER_COLOR)}>{props.children}</section>;
};
