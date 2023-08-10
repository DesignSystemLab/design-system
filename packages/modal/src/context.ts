import { createContext } from 'react';
interface ModalContext {
  id: string;
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
  hasCloseIcon: boolean;
  disableOverlayClose: boolean;
}

export const ModalContext = createContext<ModalContext>({
  id: '',
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  hasCloseIcon: true,
  disableOverlayClose: false
});
