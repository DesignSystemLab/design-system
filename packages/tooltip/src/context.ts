import { createContext } from 'react';
import type { TooltipAnchor } from './types';

const TooltipContext = createContext({
  targetRef: { current: null },
  placement: 'top' as TooltipAnchor,
  isHovering: false,
  setIsHovering: (value: boolean) => {},
  gap: 0
});
export default TooltipContext;
