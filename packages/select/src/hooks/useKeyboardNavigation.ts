import { KeyboardEvent, KeyboardEventHandler, RefObject } from 'react';

export const useKeyboardNavigation = (ref: RefObject<HTMLElement> | null) => {
  const selectItems = ref?.current?.querySelectorAll(
    '[role="listitem"]:not([data-disabled="true"])'
  ) as NodeListOf<HTMLLIElement>;

  const getFocusIndex = (isNext: boolean) => {
    if (selectItems) {
      let focusIndex = Array.from(selectItems).findIndex((item: any) => {
        return item.dataset.focus;
      });

      return isNext
        ? (focusIndex = focusIndex + 1 > selectItems.length - 1 ? 0 : focusIndex + 1)
        : (focusIndex = focusIndex - 1 < 0 ? selectItems.length - 1 : focusIndex - 1);
    }
    return 0;
  };

  const handleKeydown: KeyboardEventHandler<HTMLElement> = (e: KeyboardEvent) => {
    const { key } = e;
    e.stopPropagation();

    if (e.nativeEvent.isComposing) {
      return;
    }

    if (selectItems.length) {
      if (key === 'ArrowDown') {
        selectItems[getFocusIndex(true)].focus();
        return;
      }

      if (key === 'ArrowUp') {
        selectItems[getFocusIndex(false)].focus();
        return;
      }
    }
  };

  return handleKeydown;
};
