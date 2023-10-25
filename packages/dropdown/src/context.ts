import { createContext } from 'react';
import { DropdownContextProps, DropdownSubContextProps } from './types';

export const DropdownContext = createContext<DropdownContextProps>({
  width: 0,
  placement: 'top',
  triggerWidth: 0,
  setTriggerWidth: () => {},
  triggerHeight: 0,
  setTriggerHeight: () => {},
  gap: 0
});

export const DropdownSubContext = createContext<DropdownSubContextProps>({
  subOpen: false,
  setSubOpen: () => {}
});
