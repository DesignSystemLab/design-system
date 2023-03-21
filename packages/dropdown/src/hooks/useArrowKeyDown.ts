import type { Dispatch, SetStateAction } from 'react';
import React, { useContext, useCallback, RefObject } from 'react';

const useArrowKeyDown = () => {
  const handleKeyDown = useCallback(
    (
      event: React.KeyboardEvent<HTMLElement>,
      menuItemRef: RefObject<HTMLLIElement>,
      setSubOpen?: Dispatch<SetStateAction<boolean>>
    ) => {
      if (!menuItemRef.current) return;

      const MENU_DROPDOWN_SELECTOR = '.menu';
      const MENU_ITEM_SELECTOR = '.menu_item:not([disabled])';
      const SUB_MENU_ITEM_SELECTOR = '.sub_item:not([disabled])';

      const onArrowDown = (currIndex: number, itemEls: NodeListOf<HTMLElement>) => {
        if (itemEls) {
          if (currIndex < itemEls.length - 1) {
            itemEls[currIndex + 1].focus();
          } else {
            itemEls[0].focus();
          }
        }
      };
      const onArrowUp = (currIndex: number, itemEls: NodeListOf<HTMLElement>) => {
        if (itemEls) {
          if (currIndex > 0) {
            itemEls[currIndex - 1].focus();
          } else {
            itemEls[itemEls?.length - 1].focus();
          }
        }
      };

      const menuItemEls = menuItemRef.current
        .closest(MENU_DROPDOWN_SELECTOR)
        ?.querySelectorAll<HTMLElement>(MENU_ITEM_SELECTOR);

      if (menuItemEls) {
        const currItemIndex = Array.from(menuItemEls).indexOf(event.currentTarget);
        const currSubItemEls = menuItemEls[currItemIndex]?.querySelectorAll<HTMLElement>(SUB_MENU_ITEM_SELECTOR);
        const targetEl = event.target as HTMLElement;
        const isSubItem = targetEl.classList.contains('sub_item');

        if (isSubItem) {
          const currSubIndex = currSubItemEls ? Array.from(currSubItemEls).indexOf(targetEl) : 0;

          switch (event.key) {
            case 'ArrowDown':
              event.preventDefault();
              onArrowDown(currSubIndex, currSubItemEls);
              return;
            case 'ArrowUp':
              event.preventDefault();
              onArrowUp(currSubIndex, currSubItemEls);
              return;
            case 'ArrowLeft':
              event.preventDefault();
              setSubOpen && setSubOpen(false);
              menuItemEls[currItemIndex]?.focus();
              return;
          }
        } else {
          switch (event.key) {
            case 'ArrowDown':
              event.preventDefault();
              onArrowDown(currItemIndex, menuItemEls);
              return;
            case 'ArrowUp':
              event.preventDefault();
              onArrowUp(currItemIndex, menuItemEls);
              return;
            case 'ArrowRight':
              event.preventDefault();
              if (currSubItemEls) {
                setSubOpen && setSubOpen(true);
                currSubItemEls[0]?.focus();
              }
              return;
          }
        }
      }
    },
    []
  );

  return handleKeyDown;
};

export default useArrowKeyDown;
