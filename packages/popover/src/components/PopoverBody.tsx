/** @jsxImportSource @emotion/react */
import * as Style from '../styles';
import { createClassVariant } from '@jdesignlab/theme';
import { POPOVER_BORDER_COLOR } from '../constants';

export const PopoverBody = (props: { children: React.ReactNode }) => {
  return (
    <section className={createClassVariant('popover', 'content')} css={Style.createBody(POPOVER_BORDER_COLOR)}>
      {props.children}
    </section>
  );
};

PopoverBody.displayName = 'PopoverBody';
