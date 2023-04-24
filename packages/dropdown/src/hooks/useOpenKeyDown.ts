import type { Dispatch, SetStateAction } from 'react';
import React, { useContext, useCallback, RefObject } from 'react';

const MENU_WRAPPER_SELECTOR = '.menu_wrapper';
const MENU_ITEM_SELECTOR = '.menu_item:not([disabled])';

const useOpenKeyDown = () => {
  const handleKeyDown = useCallback(
    (
      event: React.KeyboardEvent<HTMLElement>,
      triggerRef: RefObject<HTMLElement>,
      open: boolean,
      setOpen: (value: boolean) => void
    ) => {
      if (!triggerRef.current) return;

      switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'Enter':
          event.preventDefault();
          if (!open) setOpen(!open);
          triggerRef.current.closest(MENU_WRAPPER_SELECTOR)?.querySelector<HTMLElement>(MENU_ITEM_SELECTOR)?.focus();
          return;
      }
    },
    []
  );

  return handleKeyDown;
};

export default useOpenKeyDown;
