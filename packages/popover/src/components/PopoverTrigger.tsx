/** @jsxImportSource @emotion/react */
import * as Style from '../styles';
import React, { useContext, Children, useEffect, useRef } from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import usePopoverControl from '../hooks/usePopoverControl';
import { PopoverContext } from '../context';

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
      css={Style.trigger}
      aria-pressed={context.isOpen}
      aria-expanded={context.isOpen}
      onClick={onTogglePopover}
    >
      {children}
    </div>
  );
};
