import { DROPDOWN_MENU_WRAPPER_CLASS, DROPDOWN_ROLE_QUERY } from '../constants';

export const toggleOpen = (el: HTMLElement) => {
  const dropdownMenu = el
    .closest(DROPDOWN_MENU_WRAPPER_CLASS)
    ?.querySelector<HTMLElement>(DROPDOWN_ROLE_QUERY) as HTMLDivElement;

  dropdownMenu?.classList.toggle('menu_close');
  dropdownMenu?.classList.toggle('menu_open');
};
