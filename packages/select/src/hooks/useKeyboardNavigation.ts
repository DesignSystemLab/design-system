import { KeyboardEvent, KeyboardEventHandler, RefObject, useContext } from 'react';
import { SelectContext } from './SelectContext';

export const useKeyboardNavigation = () => {
  const { selectRef } = useContext(SelectContext);

  const getNextOrPrevFocusIndex = (isNext: boolean, listElements: NodeListOf<HTMLElement>) => {
    if (listElements) {
      let focusIndex = Array.from(listElements).findIndex(listElement => {
        return listElement.dataset.focus;
      });

      return isNext
        ? (focusIndex = focusIndex + 1 > listElements.length - 1 ? 0 : focusIndex + 1)
        : (focusIndex = focusIndex - 1 < 0 ? listElements.length - 1 : focusIndex - 1);
    }
    return 0;
  };

  const getNextOrPrevHoverIndex = (isNext: boolean, comboboxItems: NodeListOf<HTMLLIElement>) => {
    if (comboboxItems.length) {
      let hoverIndex = Array.from(comboboxItems).findIndex(listElement => {
        return listElement.dataset.hover;
      });

      return isNext
        ? (hoverIndex = hoverIndex + 1 > comboboxItems.length - 1 || hoverIndex < 0 ? 0 : hoverIndex + 1)
        : (hoverIndex = hoverIndex - 1 < 0 ? comboboxItems.length - 1 : hoverIndex - 1);
    }
    return 0;
  };

  const clearComboboxHover = (hoverIndex: number, comboboxItems: NodeListOf<HTMLLIElement>) => {
    comboboxItems.forEach((listElement, index) => {
      if (index !== hoverIndex) {
        listElement.dataset.hover = '';
      }
    });
  };

  const handleInputKeydown: KeyboardEventHandler<HTMLElement> = (e: KeyboardEvent) => {
    const { key } = e;

    const comboboxItems = selectRef?.current?.querySelectorAll(
      'li:not([data-disabled="true"]'
    ) as NodeListOf<HTMLLIElement>;

    if (e.nativeEvent.isComposing) {
      return;
    }

    if (comboboxItems.length && (key === 'ArrowDown' || key === 'ArrowUp')) {
      const hoverIndex = getNextOrPrevHoverIndex(key === 'ArrowDown', comboboxItems);
      comboboxItems[hoverIndex].dataset.hover = 'hover';
      clearComboboxHover(hoverIndex, comboboxItems);
    }

    e.stopPropagation();
  };

  const handleKeydown: KeyboardEventHandler<HTMLElement> = (e: KeyboardEvent) => {
    const { key } = e;

    const selectOptions = selectRef?.current?.querySelectorAll(
      '[role="option"]:not([data-disabled="true"])'
    ) as NodeListOf<HTMLLIElement>;

    if (e.nativeEvent.isComposing) {
      return;
    }

    if (selectOptions.length) {
      if (key === 'ArrowDown') {
        selectOptions[getNextOrPrevFocusIndex(true, selectOptions)].focus();
        return;
      }

      if (key === 'ArrowUp') {
        selectOptions[getNextOrPrevFocusIndex(false, selectOptions)].focus();
        return;
      }
    }
  };

  return { handleKeydown, handleInputKeydown };
};
