import { createContext, RefObject, useState } from 'react';
import { DEFAULT_OPTIONS } from '../constants';
import type { ReturnContext } from '../types';

const defaultContextValues: ReturnContext = {
  isOpen: false,
  setOpen: () => {},
  triggerRef: null,
  setTriggerRef: () => {},
  popoverProps: {
    onClose: () => {},
    onOpen: () => {},
    arrow: DEFAULT_OPTIONS.arrow,
    open: DEFAULT_OPTIONS.open,
    placement: DEFAULT_OPTIONS.placement
  }
};

export const PopoverContext = createContext<ReturnContext>(defaultContextValues);

export const PopoverProvider = ({ ...props }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [triggerRef, setTriggerRef] = useState<RefObject<HTMLDivElement> | null>(null);
  const { popoverProps } = props;
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
