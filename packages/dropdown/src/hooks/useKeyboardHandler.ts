import type { Dispatch, SetStateAction } from 'react';
import { spaceKeyToggleHandler, arrowKeyNavigationHandler } from '@jdesignlab/react-utils';
import { useSelectItem } from './useSelectItem';

export const useKeyboardHandler = (props: {
  event: React.KeyboardEvent<HTMLElement>;
  parentScope: string;
  selectorOfList: string;
  state?: boolean;
  setState?: Dispatch<SetStateAction<boolean>>;
  onClick?: () => void;
}) => {
  const { event, parentScope, selectorOfList, setState, onClick } = props;
  if (event.key === 'Enter' && onClick) {
    useSelectItem(event, onClick);
  }
  spaceKeyToggleHandler({ event, setState });
  arrowKeyNavigationHandler({ event, parentScope, selectorOfList });
};
