import type { Dispatch, SetStateAction } from 'react';

export const spaceKeyToggleHandler = (props: {
  event: React.KeyboardEvent<HTMLElement>;
  setState?: Dispatch<SetStateAction<boolean>>;
  action?: () => void;
}) => {
  const { event, setState, action } = props;
  if (event.key === 'Space' || event.key === ' ') {
    event.preventDefault();
    action && action();
    setState && setState((prev: boolean) => !prev);
  }
};
