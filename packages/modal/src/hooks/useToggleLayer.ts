import { useCallback, useEffect, useState } from 'react';

export const useToggleLayer = (
  openProp: boolean | undefined,
  onOpenProp: (() => void) | undefined,
  onCloseProp: (() => void) | undefined
) => {
  const [isOpen, setIsOpen] = useState<boolean>(!!openProp);
  const isControlled = openProp !== undefined;

  useEffect(() => {
    setIsOpen(!!openProp);
  }, [openProp]);

  const onToggle = useCallback(() => {
    setIsOpen(prev => !prev);
    if (isOpen) onCloseProp?.();
    else onOpenProp?.();
  }, [isOpen, onOpenProp, onCloseProp]);

  const onOpen = () => {
    isControlled ? onOpenProp?.() : onToggle();
  };

  const onClose = () => {
    isControlled ? onCloseProp?.() : onToggle();
  };

  return { isOpen, onOpen, onClose };
};
