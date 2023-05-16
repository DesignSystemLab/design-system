import type { Dispatch, SetStateAction } from 'react';
import { spaceKeyToggleHandler, arrowKeyNavigationHandler } from '@jdesignlab/react-utils';

export const useKeyboardHandler = (props: {
  event: React.KeyboardEvent<HTMLElement>;
  parentScope: string;
  selectorOfList: string;
  setState?: Dispatch<SetStateAction<boolean>>;
}) => {
  const { event, parentScope, selectorOfList, setState } = props;

  spaceKeyToggleHandler({ event, setState });
  arrowKeyNavigationHandler({ event, parentScope, selectorOfList });
};
