import { createContext } from 'react';

const TooltipContext = createContext({
  targetWidth: 0,
  setTargetWidth: (w: number) => {},
  targetHeight: 0,
  setTargetHeight: (h: number) => {},
  isHovering: false,
  setIsHovering: (value: boolean) => {},
  gap: 0
});
export default TooltipContext;
