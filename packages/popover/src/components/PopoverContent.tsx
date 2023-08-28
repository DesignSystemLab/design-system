/** @jsxImportSource @emotion/react */
import * as Style from '../styles';
import { useContext, useEffect, useRef, useState } from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import { POPOVER_BACKGROUND, POPOVER_BORDER_COLOR } from '../constants';
import { PopoverOverlay } from './PopoverOverlay';
import { PopoverContext } from '../context';
import useOpenClosePopover from '../hooks/useOpenClosePopover';
import usePopoverControl from '../hooks/usePopoverControl';
import useInitialRender from '../hooks/useInitialRender';
import handleEscapeKey from '../utils/handleEscapeKey';
import calculateSize from '../utils/calculateSize';
import type { SerializedStyles } from '@emotion/react';

export const PopoverContent = (props: { children: React.ReactNode }) => {
  const [positionStyle, setPositionStyle] = useState<SerializedStyles | null>(null);
  const context = useContext(PopoverContext);
  const { placement, arrow } = context.popoverProps;
  const { onClosePopover } = usePopoverControl(context);
  const isInitialRendered = useInitialRender();
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const triggerSize = calculateSize(context.triggerRef);
  const popoverContentStyle = Style.createPopover(placement, arrow, POPOVER_BACKGROUND, POPOVER_BORDER_COLOR);
  useOpenClosePopover(context, isInitialRendered);

  useEffect(() => {
    if (popoverRef.current) {
      popoverRef.current.focus();
      const popoverSize = calculateSize(popoverRef);
      setPositionStyle(Style.createPosition(placement, triggerSize, popoverSize));
    }
  }, [popoverRef, context.isOpen]);

  return context.isOpen ? (
    <>
      <PopoverOverlay />
      <div
        className={createClassVariant('popover', 'content', 'modal')}
        role="dialog"
        aria-modal="true"
        aria-hidden="false"
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

PopoverContent.displayName = 'PopoverContent';
