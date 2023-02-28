import { createContext, useRef } from 'react';

export const DropdownContext = createContext({
  open: false,
  setOpen: (value: any) => {},
  mode: '',
  on: 'bottom',
  triggerWidth: 0,
  setTriggerWidth: (w: any) => {},
  triggerHeight: 0,
  setTriggerHeight: (h: any) => {},
  gap: 0
});
