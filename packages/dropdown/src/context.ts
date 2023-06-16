import { createContext } from 'react';

export const DropdownContext = createContext({
  width: 0,
  placement: 'top',
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
