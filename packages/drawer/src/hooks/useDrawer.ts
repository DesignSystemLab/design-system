import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { Children, isValidElement, MouseEventHandler, MouseEvent, Dispatch, SetStateAction, useContext } from 'react';

export const useDrawer = () => {
  const filterChildren = (
    children: React.ReactNode | React.ReactNode[],
    compoenent: (props: unknown) => EmotionJSX.Element,
    isEqual: boolean
  ) => {
    return Children.toArray(children).filter(child => {
      if (isValidElement(child)) {
        return isEqual ? child.type === compoenent : child.type !== compoenent;
      }
    });
  };

  const closeDrawer = (event: MouseEvent<HTMLElement>, setState: Dispatch<SetStateAction<boolean>>) => {
    setState(false);
    event.stopPropagation();
  };

  const stopEventHandler: MouseEventHandler<HTMLDivElement> = event => {
    event.stopPropagation();
  };

  return { filterChildren, stopEventHandler, closeDrawer };
};
