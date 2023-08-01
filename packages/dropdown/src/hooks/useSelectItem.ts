import { useToggleOpen } from './useToggleOpen';

export const useSelectItem = (
  event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
  onClick?: () => void
) => {
  if (onClick) onClick();
  useToggleOpen(event.currentTarget);
};
