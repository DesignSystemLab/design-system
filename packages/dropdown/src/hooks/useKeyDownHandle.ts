import React, { useContext, useCallback, RefObject } from 'react';
import { DropdownContext } from '../context';

const useDropdownKeyDownHandle = () => {
  const { setOpen } = useContext(DropdownContext);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>, menuItemRef: RefObject<HTMLLIElement>, onClick: any) => {
      if (!menuItemRef.current) return;

      const menuItemEls = menuItemRef.current.parentNode?.querySelectorAll<HTMLElement>('.menuitem');
      if (menuItemEls) {
        const menuItemCount = menuItemEls.length;
        const currIndex = Array.from(menuItemEls).indexOf(event.currentTarget); // sub1의 currIndex를 못찾음
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
          default:
            return;
        }
      }
    },
    [setOpen]
  );

  return handleKeyDown;
};

export default useDropdownKeyDownHandle;
