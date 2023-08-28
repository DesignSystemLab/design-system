import { RefObject, useState } from 'react';
import { PopoverContext, defaultContextValues } from '../context';

export const PopoverProvider = ({ ...props }) => {
  const [triggerRef, setTriggerRef] = useState<RefObject<HTMLDivElement> | null>(null);
  const { popoverProps } = props;
  const [isOpen, setOpen] = useState<boolean>(popoverProps.open);
  const defaultPopoverProps = defaultContextValues.popoverProps;
  const {
    open = defaultPopoverProps.open,
    placement = defaultPopoverProps.placement,
    arrow = defaultPopoverProps.arrow
  } = popoverProps;

  return (
    <PopoverContext.Provider
      value={{
        isOpen,
        setOpen,
        triggerRef,
        setTriggerRef,
        popoverProps: { open, placement, arrow, ...popoverProps }
      }}
    >
      {props.children}
    </PopoverContext.Provider>
  );
};
