import { arrowKeyNavigationHandler, spaceKeyToggleHandler } from '@jdesignlab/react-utils';
import { Dispatch, SetStateAction } from 'react';
import { selectItem } from './selectItem';

export const keyboardHandler = (props: {
  event: React.KeyboardEvent<HTMLElement>;
  parentScope: string;
  selectorOfList: string;
  state?: boolean;
  setState?: Dispatch<SetStateAction<boolean>>;
  onClick?: () => void;
}) => {
  const { event, parentScope, selectorOfList, setState, onClick } = props;
  if (event.key === 'Enter' && onClick) {
    selectItem(event, onClick);
  }

  spaceKeyToggleHandler({ event, setState });
  arrowKeyNavigationHandler({ event, parentScope, selectorOfList });
};
