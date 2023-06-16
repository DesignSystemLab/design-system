import { useEffect, useContext, useRef } from 'react';
import { DropdownContext } from '../context';
import type { DropdownTriggerProps } from '../types';
import useOpenKeyDown from '../hooks/useOpenKeyDown';
import useToggleOpen from '../hooks/useToggleOpen';

export const Trigger = (props: DropdownTriggerProps) => {
  const { children, ...otherProps } = props;
  const { setTriggerWidth, setTriggerHeight } = useContext(DropdownContext);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (triggerRef.current) {
      const style = getComputedStyle(triggerRef.current);
      setTriggerWidth(parseInt(style.width, 10));
      setTriggerHeight(parseInt(style.height, 10));
    }
  }, [triggerRef]);

  const onClickHandle = () => {
    if (triggerRef?.current) {
      const el = triggerRef.current as HTMLElement;
      useToggleOpen(el);
    }
  };

  return (
    <div
      ref={triggerRef}
      onClick={onClickHandle}
      onKeyDown={e => {
        useOpenKeyDown(e);
      }}
      {...otherProps}
    >
      {children}
    </div>
  );
};

Trigger.displayName = 'Dropdown.Trigger';
