/** @jsxImportSource @emotion/react */
import * as Style from '../styles';
import { createClassVariant } from '@jdesignlab/theme';
import { POPOVER_BORDER_COLOR } from '../constants';

export const PopoverHeader = (props: { children?: React.ReactNode }) => {
  return (
    <header className={createClassVariant('popover', 'header')} css={Style.createHeader(POPOVER_BORDER_COLOR)}>
      {props.children}
    </header>
  );
};

PopoverHeader.displayName = 'PopoverHeader';
