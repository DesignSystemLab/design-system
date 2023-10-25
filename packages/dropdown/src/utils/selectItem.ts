import { toggleOpen } from './toggleOpen';

export const selectItem = (
  event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
  onClick?: () => void
) => {
  onClick?.();
  toggleOpen(event.currentTarget);
};
