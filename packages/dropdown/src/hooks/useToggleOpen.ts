const useToggleOpen = (el: HTMLElement) => {
  const menu = el?.closest('.menu_wrapper')?.querySelector('[role="menu"]');
  if (menu) {
    menu.classList.toggle('menu_close');
    menu.classList.toggle('menu_open');
  }
};
export default useToggleOpen;
