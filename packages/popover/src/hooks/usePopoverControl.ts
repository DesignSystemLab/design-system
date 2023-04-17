import { useCallback } from 'react';
import type { ReturnContext } from '../types';

const usePopoverControl = (context: ReturnContext) => {
  const { setOpen } = context;

  const onTogglePopover = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  const onClosePopover = useCallback(() => {
    setOpen(false);
  }, []);

  const onOpenPopover = useCallback(() => {
    setOpen(true);
  }, []);

  return { onTogglePopover, onClosePopover, onOpenPopover };
};

export default usePopoverControl;
