import { createContext } from 'react';
interface ModalContext {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
  hasCloseIcon: boolean;
  disableOverlayClose: boolean;
}

export const ModalContext = createContext<ModalContext>({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  hasCloseIcon: true,
  disableOverlayClose: false
});
