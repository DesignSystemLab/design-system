/** @jsxImportSource @emotion/react */
import React, { useContext, Children, useEffect, useRef } from 'react';
import { PopoverContext } from './popoverContext';

export const PopoverTrigger = (props: { children: React.ReactNode }) => {
  const context = useContext(PopoverContext);
  const ref = useRef<HTMLDivElement | null>(null);
  const children = Children.only(props.children);

  useEffect(() => {
    if (ref.current) {
      const { width, height } = window.getComputedStyle(ref.current);
      context?.setTriggerSize({
        width: parseInt(width) / 2,
        height: parseInt(height) / 2
      });
      return;
    }
  }, []);

  return (
    <div
      css={context?.style.inlineBlock}
      ref={ref}
      onClick={() => {
        context?.setIsOpen(true);
      }}
    >
      {children}
    </div>
  );
};
