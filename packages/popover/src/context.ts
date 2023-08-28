import { createContext, RefObject, useState } from 'react';
import { DEFAULT_OPTIONS } from './constants';
import type { ReturnContext } from './types';

export const defaultContextValues: ReturnContext = {
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
