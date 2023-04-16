/** @jsxImportSource @emotion/react */
import React, { useContext, Children, useEffect, useRef, useCallback } from 'react';
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
      const { height, width } = window.getComputedStyle(triggerRef.current);
    }
  }, [triggerRef]);

  return (
    <div ref={triggerRef} css={triggerStyle} role="button" aria-pressed={context.isOpen} onClick={onTogglePopover}>
      {children}
    </div>
  );
};
