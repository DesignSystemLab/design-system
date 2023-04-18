import { css } from '@emotion/react';
import type { Placement } from '../types';

type Size = {
  width: number;
  height: number;
};
const createPopoverPositon = (placement: Placement, trigger: Size, popover: Size) => {
  const triggerHeight = trigger.height;
  const popoverHeight = popover.height;
  const popoverWidth = popover.width;

  switch (placement) {
    case 'top':
      return css({
        right: '50%',
        top: `${Math.round(-triggerHeight / 2 - popoverHeight - 8)}px`,
        transform: `translateX(50%)`
      });
    case 'left':
      return css({
        left: `${-popoverWidth - 12}px`,
        top: `calc(50% - ${triggerHeight / 2}px)`,
        transform: `translateY(-50%)`
      });
    case 'bottom':
      return css({
        right: '50%',
        top: `${Math.round(triggerHeight + 12)}px`,
        transform: `translateX(50%)`
      });
    default:
      return css({
        right: `${-popoverWidth - 12}px`,
        top: `calc(50% - ${triggerHeight / 2}px)`,
        transform: `translateY(-50%)`
      });
  }
};
export default createPopoverPositon;
