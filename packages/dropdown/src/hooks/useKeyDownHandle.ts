import type { Dispatch, SetStateAction } from 'react';
import React, { useContext, useCallback, RefObject } from 'react';
import { DropdownContext } from '../context';

const useDropdownKeyDownHandle = () => {
  const { setOpen } = useContext(DropdownContext);

  const handleKeyDown = useCallback(
    (
      event: React.KeyboardEvent<HTMLElement>,
      menuItemRef: RefObject<HTMLLIElement>,
      setSubOpen?: Dispatch<SetStateAction<boolean>>
    ) => {
      if (!menuItemRef.current) return;

      const menuItemEls = menuItemRef.current
        .closest('.menu')
        .querySelectorAll<HTMLElement>('.menu_item:not(.disabled)');

      if (menuItemEls) {
        const menuItemCount = menuItemEls.length;
        const currItemIndex = Array.from(menuItemEls).indexOf(event.currentTarget);
        const currSubItemEls = menuItemEls[currItemIndex]?.querySelectorAll<HTMLElement>('.sub_item:not(.disabled)');

        if (currSubItemEls && event.target.classList.contains('sub_item')) {
            const currSubCount = currSubItemEls.length;
            const currSubIndex = Array.from(currSubItemEls).indexOf(event.target);

            switch (event.key) {
              case 'ArrowDown':
                event.preventDefault();
                if (currSubIndex < currSubCount - 1) {
                  currSubItemEls[currSubIndex + 1].focus();
                } else {
                  currSubItemEls[0].focus();
                }
                return;
              case 'ArrowUp':
                event.preventDefault();
                if (currSubIndex > 0) {
                  currSubItemEls[currSubIndex - 1].focus();
                } else {
                  currSubItemEls[currSubItemEls.length - 1].focus();
                }
                return;
              case 'ArrowLeft':
                event.preventDefault();
                setSubOpen && setSubOpen(false);
                menuItemEls[currItemIndex].focus();
                return;
            }
        } else {
          switch (event.key) {
            case 'ArrowDown':
              event.preventDefault();
              if (currItemIndex < menuItemCount - 1) {
                menuItemEls[currItemIndex + 1].focus();
              } else {
                menuItemEls[0].focus();
              }
              return;
            case 'ArrowUp':
              event.preventDefault();
              if (currItemIndex > 0) {
                menuItemEls[currItemIndex - 1].focus();
              } else {
                menuItemEls[menuItemEls.length - 1].focus();
              }
              return;
            case 'ArrowRight':
              event.preventDefault();
              if (currSubItemEls && ) {
                setSubOpen && setSubOpen(true);
                currSubItemEls[0].focus();
              }
              return;
          }
        }
      }
    },
    [setOpen]
  );

  return handleKeyDown;
};

export default useDropdownKeyDownHandle;
