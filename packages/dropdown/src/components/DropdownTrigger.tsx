import { useEffect, useContext, useRef } from 'react';
import { DropdownContext } from '../context';
import { toggleOpen } from '../utils/toggleOpen';
import { openKeyDown } from '../utils/openKeyDown';
import type { DropdownTriggerProps } from '../types';

export const DropdownTrigger = (props: DropdownTriggerProps) => {
  const { children, ...restProps } = props;
  const { setTriggerWidth, setTriggerHeight } = useContext(DropdownContext);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (triggerRef.current) {
      const style = getComputedStyle(triggerRef.current);
      setTriggerWidth(parseInt(style.width, 10));
      setTriggerHeight(parseInt(style.height, 10));
    }
  }, [setTriggerHeight, setTriggerWidth, triggerRef]);

  const onTriggerClick = () => {
    if (triggerRef?.current) {
      toggleOpen(triggerRef.current);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      ref={triggerRef}
      onClick={onTriggerClick}
      onKeyDown={e => {
        openKeyDown(e);
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};

DropdownTrigger.displayName = 'Dropdown.Trigger';
