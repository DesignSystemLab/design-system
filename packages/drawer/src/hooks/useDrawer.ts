import { Dispatch, SetStateAction } from 'react';
import type { MouseEventHandler, MouseEvent } from 'react';

export const useDrawer = () => {
  const closeDrawer = (event: MouseEvent<HTMLElement>, setState: Dispatch<SetStateAction<boolean>>) => {
    setState(false);
    event.stopPropagation();
  };

  const stopEventHandler: MouseEventHandler<HTMLDivElement> = event => {
    event.stopPropagation();
  };

  return { stopEventHandler, closeDrawer };
};
