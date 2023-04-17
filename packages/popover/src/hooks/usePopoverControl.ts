import { useCallback } from 'react';
import type { ReturnContext } from '../types';

const usePopoverControl = (context: ReturnContext) => {
  const { setOpen } = context;

  const onTogglePopover = useCallback(() => {
    setOpen(prev => !prev);
  }, [setOpen]);

  const onClosePopover = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onOpenPopover = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  return { onTogglePopover, onClosePopover, onOpenPopover };
};

export default usePopoverControl;
