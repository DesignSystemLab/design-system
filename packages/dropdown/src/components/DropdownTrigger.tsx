import { useEffect, useContext, useRef } from 'react';
import { DropdownContext } from '../context';
import type { DropdownTriggerProps } from '../types';
import useOpenKeyDown from '../hooks/useOpenKeyDown';

export const Trigger = (props: DropdownTriggerProps) => {
  const { children, ...otherProps } = props;
  const { open, setOpen, setTriggerWidth, setTriggerHeight } = useContext(DropdownContext);
  const keyDownHandle = useOpenKeyDown();
  const triggerRef = useRef(null);

  useEffect(() => {
    if (triggerRef.current) {
      const style = getComputedStyle(triggerRef.current);
      setTriggerWidth(parseInt(style.width, 10));
      setTriggerHeight(parseInt(style.height, 10));
    }
  }, [triggerRef]);

  const onClickHandle = () => {
    setOpen(!open);
  };

  return (
    <div
      ref={triggerRef}
      onClick={onClickHandle}
      onKeyDown={e => {
        keyDownHandle(e, triggerRef, open, setOpen);
      }}
      {...otherProps}
    >
      {children}
    </div>
  );
};

Trigger.displayName = 'Dropdown.Trigger';
