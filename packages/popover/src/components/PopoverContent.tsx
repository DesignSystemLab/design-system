/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useRef, useState } from 'react';
import { PopoverContext } from './PopoverContext';
import { PopoverOverlay } from './PopoverOverlay';
import { POPOVER_BACKGROUND, POPOVER_BORDER_COLOR } from '../constants';
import useOpenClosePopover from '../hooks/useOpenClosePopover';
import usePopoverControl from '../hooks/usePopoverControl';
import useInitialRender from '../hooks/useInitialRender';
import handleEscapeKey from '../utils/handleEscapeKey';
import calculateSize from '../utils/calculateSize';
import createPopoverStyle from '../styles/createPopoverStyle';
import createPopoverPosition from '../styles/createPopoverPosition';
import type { SerializedStyles } from '@emotion/react';

export const PopoverContent = (props: { children: React.ReactNode }) => {
  const [positionStyle, setPositionStyle] = useState<SerializedStyles | null>(null);
  const context = useContext(PopoverContext);
  const { placement, arrow } = context.popoverProps;
  const { onClosePopover } = usePopoverControl(context);
  const isInitialRendered = useInitialRender();
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const triggerSize = calculateSize(context.triggerRef);
  const popoverContentStyle = createPopoverStyle(placement, arrow, POPOVER_BACKGROUND, POPOVER_BORDER_COLOR);
  useOpenClosePopover(context, isInitialRendered);

  useEffect(() => {
    if (popoverRef.current) {
      popoverRef.current.focus();
      const popoverSize = calculateSize(popoverRef);
      setPositionStyle(createPopoverPosition(placement, triggerSize, popoverSize));
    }
  }, [popoverRef, context.isOpen]);

  return context.isOpen ? (
    <>
      <PopoverOverlay />
      <div
        tabIndex={0}
        css={[...popoverContentStyle, positionStyle]}
        ref={popoverRef}
        onKeyDown={e => handleEscapeKey(e, onClosePopover)}
      >
        {props.children}
      </div>
    </>
  ) : null;
};
