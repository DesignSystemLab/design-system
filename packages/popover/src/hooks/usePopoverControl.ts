import { useCallback } from 'react';
import type { ReturnContext } from '../types';

const usePopoverControl = (context: ReturnContext) => {
  const { setOpen, popoverProps } = context;
  const { onOpen, onClose } = popoverProps;

  const onTogglePopover = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  const onClosePopover = useCallback(() => {
    setOpen(false);
    if (onClose) {
      onClose();
      return;
    }
  }, [onClose]);

  const onOpenPopover = useCallback(() => {
    setOpen(false);
  }, [onOpen]);

  return { onTogglePopover, onClosePopover, onOpenPopover };
};

export default usePopoverControl;
