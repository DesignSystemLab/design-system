import { useEffect } from 'react';
const useDrawerEffect = (open: boolean, init: boolean, onClose?: () => void, onOpen?: () => void) => {
  useEffect(() => {
    if (!init) {
      if (!open && onClose) {
        onClose();
      }

      if (open && onOpen) {
        onOpen();
      }
    }
  }, [open]);
};

export default useDrawerEffect;
