/** @jsxImportSource @emotion/react */
import * as Style from '../styles';
import { useContext } from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import { PopoverContext } from '../context';
import usePopoverControl from '../hooks/usePopoverControl';

export const PopoverOverlay = () => {
  const context = useContext(PopoverContext);
  const { onClosePopover } = usePopoverControl(context);

  return (
    <div
      role="presentation"
      className={createClassVariant('popover', 'overlay')}
      css={Style.overlay}
      onClick={onClosePopover}
    />
  );
};

PopoverOverlay.displayName = 'PopoverOverlay';
