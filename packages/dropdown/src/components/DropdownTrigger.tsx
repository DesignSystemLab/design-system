import { useEffect, useContext, useRef } from 'react';
import { DropdownContext } from '../context';
import type { DropdownTriggerProps } from '../types';

export const Trigger = (props: DropdownTriggerProps) => {
  const { children, ...otherProps } = props;
  const { open, setOpen, mode, setTriggerWidth, setTriggerHeight } = useContext(DropdownContext);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (triggerRef.current) {
      const style = getComputedStyle(triggerRef.current);
      setTriggerWidth(parseInt(style.width, 10));
      setTriggerHeight(parseInt(style.height, 10));
    }
  }, [triggerRef]);

  const onClickHandle = () => {
    mode === 'click' && setOpen(!open);
  };

  const onMouseHoverHandle = () => {
    mode === 'hover' && setOpen(!open);
  };

  return (
    <div
      ref={triggerRef}
      onClick={onClickHandle}
      onMouseOver={onMouseHoverHandle}
      onMouseLeave={onMouseHoverHandle}
      // onKeyDown={onKeyDown}
      {...otherProps}
    >
      {children}
    </div>
  );
};
