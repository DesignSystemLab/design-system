import { useEffect } from 'react';
import type { ReturnContext } from '../types';

const useOpenClosePopover = (context: ReturnContext, init: boolean) => {
  const { popoverProps, isOpen, setOpen } = context;
  const { onOpen, onClose, open } = popoverProps;

  useEffect(() => {
    setOpen(open);
  }, [open]);

  useEffect(() => {
    if (isOpen && onOpen) {
      onOpen();
      return;
    }
    if (!init) {
      if (!isOpen && onClose) {
        onClose();
      }

      if (isOpen && onOpen) {
        onOpen();
      }
    }
  }, [isOpen]);
};

export default useOpenClosePopover;
