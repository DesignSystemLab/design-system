/** @jsxImportSource @emotion/react */
import { createClassVariant } from '@jdesignlab/theme';
import { POPOVER_BORDER_COLOR } from '../constants';
import headerStyle from '../styles/createHeaderStyle';

export const PopoverHeader = (props: { children?: React.ReactNode }) => {
  return (
    <header className={createClassVariant('popover', 'header')} css={headerStyle(POPOVER_BORDER_COLOR)}>
      {props.children}
    </header>
  );
};

PopoverHeader.displayName = 'PopoverHeader';
