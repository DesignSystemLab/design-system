/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import { PopoverContext } from '../context';
import usePopoverControl from '../hooks/usePopoverControl';
import createOverlayStyle from '../styles/createOverlayStyle';

export const PopoverOverlay = () => {
  const context = useContext(PopoverContext);
  const { onClosePopover } = usePopoverControl(context);

  return (
    <div
      role="presentation"
      className={createClassVariant('popover', 'overlay')}
      css={createOverlayStyle}
      onClick={onClosePopover}
    />
  );
};

PopoverOverlay.displayName = 'PopoverOverlay';
