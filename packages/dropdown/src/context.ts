import { createContext, useRef } from 'react';

export const DropdownContext = createContext({
  open: false,
  setOpen: (value: boolean) => {},
  mode: '',
  on: 'bottom',
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
