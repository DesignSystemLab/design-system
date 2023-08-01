export const useToggleOpen = (dropdownMenu: HTMLElement) => {
  if (dropdownMenu) {
    dropdownMenu.classList.toggle('menu_close');
    dropdownMenu.classList.toggle('menu_open');
  }
};
