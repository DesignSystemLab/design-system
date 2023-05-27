import { createContext, SetStateAction } from 'react';
import { Dispatch } from 'react';

interface ReturnContext {
  open: boolean;
  isOpen?: boolean;
  hasCloseIcon?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onOpen?: () => void;
  onClose?: () => void;
}
export const ModalContext = createContext<ReturnContext>({
  open: false,
  isOpen: false,
  setOpen: () => {},
  hasCloseIcon: true,
  onOpen: () => {},
  onClose: () => {}
});
