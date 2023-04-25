/** @jsxImportSource @emotion/react */
import React, { useContext, Children, useEffect, useRef } from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import triggerStyle from '../styles/createTriggerStyle';
import usePopoverControl from '../hooks/usePopoverControl';
import { PopoverContext } from './PopoverContext';

export const PopoverTrigger = (props: { children: React.ReactNode }) => {
  const context = useContext(PopoverContext);
  const children = Children.only(props.children);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const { onTogglePopover } = usePopoverControl(context);

  useEffect(() => {
    if (triggerRef.current) {
      context.setTriggerRef(triggerRef);
    }
  }, [triggerRef]);

  return (
    <div
      ref={triggerRef}
      className={createClassVariant('popover', 'trigger')}
      css={triggerStyle}
      aria-pressed={context.isOpen}
      aria-expanded={context.isOpen}
      onClick={onTogglePopover}
    >
      {children}
    </div>
  );
};
