import { useCallback } from 'react';

const moveToNext = (currIndex: number, itemEls: NodeListOf<HTMLElement>) => {
  if (itemEls) {
    if (currIndex < itemEls.length - 1) {
      itemEls[currIndex + 1].focus();
    } else {
      itemEls[0].focus();
    }
  }
};
const moveToPrev = (currIndex: number, itemEls: NodeListOf<HTMLElement>) => {
  if (itemEls) {
    if (currIndex > 0) {
      itemEls[currIndex - 1].focus();
    } else {
      itemEls[itemEls?.length - 1].focus();
    }
  }
};

export const arrowKeyNavigationHandler = (props: {
  event: React.KeyboardEvent<HTMLElement>;
  parentScope: string;
  selectorOfList: string;
}) => {
  const { event, parentScope, selectorOfList } = props;

  let direction;
  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') direction = 'next';
  if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') direction = 'prev';
  if (!direction) return;

  event.preventDefault();
  event.stopPropagation();

  const currentEl = event.currentTarget;
  const elementSet = currentEl.closest(`${parentScope}`)?.querySelectorAll<HTMLElement>(`${selectorOfList}`);
  if (elementSet) {
    const currIndex = Array.from(elementSet).indexOf(currentEl as HTMLInputElement); // ?
    if (direction === 'next') {
      moveToNext(currIndex, elementSet);
    }
    if (direction === 'prev') {
      moveToPrev(currIndex, elementSet);
    }
  }
};
