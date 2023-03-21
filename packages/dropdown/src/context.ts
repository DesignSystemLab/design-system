import { createContext } from 'react';

export const DropdownContext = createContext({
  open: false,
  setOpen: (value: boolean) => {},
  placement: 'bottom',
  lazy: false,
  triggerWidth: 0,
  setTriggerWidth: (w: any) => {},
  triggerHeight: 0,
  setTriggerHeight: (h: any) => {},
  gap: 0
});

export const DropdownSubContext = createContext({
  subOpen: false,
  setSubOpen: (value: boolean) => {}
});
