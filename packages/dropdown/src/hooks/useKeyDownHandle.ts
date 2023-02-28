import React, { useContext, useCallback } from 'react';
import { DropdownContext } from '../context';

const useDropdownKeyDownHandle = () => {
  const { setOpen } = useContext(DropdownContext);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>, menuItemRef: any, onClick: any) => {
      if (!menuItemRef.current) return;

      const menuItemEls = menuItemRef.current.parentNode?.querySelectorAll('[role="menuitem"]');
      const menuItemCount = menuItemEls?.length;
      const currIndex = Array.from(menuItemEls!).indexOf(event.currentTarget);

      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          if (currIndex < menuItemCount! - 1) {
            event.preventDefault();
            menuItemEls[currIndex + 1].focus();
          }
          return;
        case 'ArrowUp':
        case 'ArrowLeft':
          if (currIndex > 0) {
            event.preventDefault();
            menuItemEls[currIndex - 1].focus();
          }
          return;
        case 'Escape':
          event.preventDefault();
          setOpen(false);
          return;
        case 'Enter':
          onClick();
          return;
        default:
          return;
      }
    },
    [setOpen]
  );

  return handleKeyDown;
};

export default useDropdownKeyDownHandle;
