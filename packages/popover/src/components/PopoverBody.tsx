/** @jsxImportSource @emotion/react */
import { createClassVariant } from '@jdesignlab/theme';
import { POPOVER_BORDER_COLOR } from '../constants';
import bodyStyle from '../styles/createBodyStyle';

export const PopoverBody = (props: { children: React.ReactNode }) => {
  return (
    <section className={createClassVariant('popover', 'content')} css={bodyStyle(POPOVER_BORDER_COLOR)}>
      {props.children}
    </section>
  );
};

PopoverBody.displayName = 'PopoverBody';
