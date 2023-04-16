/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useRef, useState } from 'react';
import { PopoverContext } from './PopoverContext';
import { POPOVER_BACKGROUND, POPOVER_BORDER_COLOR } from '../constants';
import useOpenClosePopover from '../hooks/useOpenClosePopover';
import useInitialRender from '../hooks/useInitialRender';
import calculateSize from '../utils/calculateSize';
import createPopoverStyle from '../styles/createPopoverStyle';
import createPopoverPosition from '../styles/createPopoverPosition';
import type { SerializedStyles } from '@emotion/react';

export const PopoverContent = (props: { children: React.ReactNode }) => {
  const [positionStyle, setPositionStyle] = useState<SerializedStyles | null>(null);
  const context = useContext(PopoverContext);
  const { placement, arrow } = context.popoverProps;
  const isInitialRendered = useInitialRender();
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const triggerSize = calculateSize(context.triggerRef);
  const popoverContentStyle = createPopoverStyle(placement, arrow, POPOVER_BACKGROUND, POPOVER_BORDER_COLOR);
  useOpenClosePopover(context, isInitialRendered);

  useEffect(() => {
    if (popoverRef.current) {
      const popoverSizer = calculateSize(popoverRef);
      setPositionStyle(createPopoverPosition(placement, triggerSize, popoverSizer));
    }
  }, [popoverRef, context.isOpen]);

  return context.isOpen ? (
    <div css={[...popoverContentStyle, positionStyle]} ref={popoverRef}>
      {props.children}
    </div>
  ) : null;
};
