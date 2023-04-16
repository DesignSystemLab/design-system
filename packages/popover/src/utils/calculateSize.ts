import type { RefObject } from 'react';

const calculateSize = (ref: RefObject<HTMLElement> | null) => {
  let height = 0;
  let width = 0;
  if (ref?.current) {
    width = parseFloat(getComputedStyle(ref.current).width);
    height = parseFloat(getComputedStyle(ref.current).height);
  }

  return {
    height: Math.round(height),
    width: Math.round(width)
  };
};

export default calculateSize;
