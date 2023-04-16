import type { RefObject } from 'react';

const calculateSize = (triggerRef: RefObject<HTMLElement> | null) => {
  let height = 0;
  let width = 0;
  if (triggerRef?.current) {
    width = parseFloat(getComputedStyle(triggerRef.current).width);
    height = parseFloat(getComputedStyle(triggerRef.current).height);
  }

  return {
    height: Math.round(height),
    width: Math.round(width)
  };
};

export default calculateSize;
