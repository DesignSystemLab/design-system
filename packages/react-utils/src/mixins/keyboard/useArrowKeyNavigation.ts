import { useCallback } from 'react';
export const useArrowKeyNavigation = () => {
  const onArrowNext = useCallback((currIndex: number, itemEls: NodeListOf<HTMLElement>) => {
    if (itemEls) {
      if (currIndex < itemEls.length - 1) {
        itemEls[currIndex + 1].focus();
      } else {
        itemEls[0].focus();
      }
    }
  }, []);
  const onArrowPrev = useCallback((currIndex: number, itemEls: NodeListOf<HTMLElement>) => {
    if (itemEls) {
      if (currIndex > 0) {
        itemEls[currIndex - 1].focus();
      } else {
        itemEls[itemEls?.length - 1].focus();
      }
    }
  }, []);

  return {
    onArrowNext,
    onArrowPrev
  };
};
