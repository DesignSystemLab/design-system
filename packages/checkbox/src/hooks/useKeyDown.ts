import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useArrowKeyNavigation } from '@jdesignlab/react-utils';
import { createClassVariant } from '@jdesignlab/theme';

export const useKeyDown = () => {
  const { onArrowNext, onArrowPrev } = useArrowKeyNavigation();

  const onEnterKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>, setCheckedState: Dispatch<SetStateAction<boolean>>) => {
      event.preventDefault();
      setCheckedState((prev: boolean) => !prev);
    },
    []
  );
  const onArrowKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>, currentEl: HTMLInputElement, direction: 'next' | 'prev') => {
      event.preventDefault();
      const checkboxEls = currentEl
        .closest(`.${createClassVariant('checkbox', 'group')}`)
        ?.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
      if (checkboxEls) {
        const currIndex = Array.from(checkboxEls).indexOf(currentEl);
        if (direction === 'next') {
          onArrowNext(currIndex, checkboxEls);
        }
        if (direction === 'prev') {
          onArrowPrev(currIndex, checkboxEls);
        }
      }
    },
    []
  );

  return {
    onEnterKeyDown,
    onArrowKeyDown
  };
};

export default useKeyDown;
