import type { Dispatch, SetStateAction } from 'react';

export const spaceKeyToggleHandler = (props: {
  event: React.KeyboardEvent<HTMLElement>;
  setState?: Dispatch<SetStateAction<boolean>>;
}) => {
  const { event, setState } = props;
  if (event.key === 'Space' || event.key === ' ') {
    event.preventDefault();
    setState && setState((prev: boolean) => !prev);
  }
};
