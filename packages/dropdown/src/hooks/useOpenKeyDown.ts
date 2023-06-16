import type { Dispatch, SetStateAction } from 'react';
import React, { useContext, useCallback, RefObject } from 'react';
import useToggleOpen from './useToggleOpen';

const MENU_WRAPPER_SELECTOR = '.menu_wrapper';
const MENU_ITEM_SELECTOR = '.menu_item:not([disabled])';

const useOpenKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
  const el = event.currentTarget;
  switch (event.key) {
    case 'ArrowUp':
    case 'ArrowDown':
    case 'ArrowLeft':
    case 'ArrowRight':
    case 'Space':
    case ' ':
    case 'Enter':
      event.preventDefault();
      useToggleOpen(el);
      const firstItem = el.closest(MENU_WRAPPER_SELECTOR)?.querySelector<HTMLElement>(MENU_ITEM_SELECTOR);
      firstItem?.focus();
  }
};

export default useOpenKeyDown;
