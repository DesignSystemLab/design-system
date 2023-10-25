import { toggleOpen } from './toggleOpen';
import { NOT_DISABLED_DROPDOWN_MENU_QUERY, DROPDOWN_MENU_WRAPPER_CLASS } from '../constants';

export const openKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
  const el = event.currentTarget;
  switch (event.key) {
    case 'ArrowUp':
    case 'ArrowDown':
    case 'ArrowLeft':
    case 'ArrowRight':
    case 'Space':
    case ' ':
    case 'Enter':
      {
        event.preventDefault();
        toggleOpen(el);
        const firstItem = el
          .closest(DROPDOWN_MENU_WRAPPER_CLASS)
          ?.querySelector<HTMLElement>(NOT_DISABLED_DROPDOWN_MENU_QUERY);
        firstItem?.focus();
      }
      break;
    default:
      break;
  }
};
