import { createContext } from 'react';
export const ModalContext = createContext({
  open: false,
  setOpen: (value: boolean) => {},
  hasCloseIcon: true
});
