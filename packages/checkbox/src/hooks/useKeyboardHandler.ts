import { spaceKeyToggleHandler, arrowKeyNavigationHandler } from '@jdesignlab/react-utils';

export const useKeyboardHandler = (props: {
  event: React.KeyboardEvent<HTMLElement>;
  parentScope: string;
  selectorOfList: string;
}) => {
  const { event, parentScope, selectorOfList } = props;
  const el = event.target as HTMLInputElement;

  const spaceKeyAction = () => {
    el.checked = !el.checked;
  };

  spaceKeyToggleHandler({ event, action: spaceKeyAction });
  arrowKeyNavigationHandler({ event, parentScope, selectorOfList });
};
