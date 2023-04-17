import { css } from '@emotion/react';
import type { TooltipAnchor } from './types';
import { getColorByToken } from '@jdesignlab/theme';

export const tooltipWrapperStyle = css({
  position: 'relative'
});
export const tooltipContentStyle = css({
  position: 'absolute',
  display: 'block',
  backgroundColor: '#000000ad',
  color: '#ffffffc7',
  zIndex: '100',
  visibility: 'hidden',
  // display: 'none',
  padding: '4px 8px',
  border: 'solid gray 1px',
  borderRadius: '2px',
  whiteSpace: 'pre',
  '&.tooltip_open': {
    visibility: 'visible'
    // display: 'inline'
  }
});

export const tooltipLocationStyle = (
  labelRef: React.RefObject<HTMLDivElement>,
  targetW: number,
  targetH: number,
  gap: number,
  on: TooltipAnchor | undefined
) => {
  const labelW = labelRef.current ? labelRef.current.offsetWidth : 0;
  const labelH = labelRef.current ? labelRef.current.offsetHeight : 0;
  const centerX = { left: targetW / 2, transform: `translateX(-${labelW / 2}px)` };
  const centerY = { bottom: targetH / 2, transform: `translateY(${labelH / 2}px)` };
  const moveTop = { bottom: `${targetH + gap}px` };
  const moveBottom = { top: `${targetH + gap}px` };
  const moveRight = { left: `${targetW + gap}px` };
  const moveLeft = { left: `-${labelW + gap}px` };
  const onRight = { left: targetW - labelW };
  const onBottom = { top: targetH - labelH };

  switch (on) {
    case 'top':
      return css({ ...moveTop, ...centerX });
    case 'right':
      return css({ ...moveRight, ...centerY });
    case 'left':
      return css({ ...moveLeft, ...centerY });
    case 'bottom':
      return css({ ...moveBottom, ...centerX });
    case 'top-left':
      return css({ ...moveTop });
    case 'top-right':
      return css({ ...moveTop, ...onRight });
    case 'bottom-left':
      return css({ ...moveBottom });
    case 'bottom-right':
      return css({ ...moveBottom, ...onRight });
    case 'right-top':
      return css({ ...moveRight });
    case 'right-bottom':
      return css({ ...moveRight, ...onBottom });
    case 'left-top':
      return css({ ...moveLeft });
    case 'left-bottom':
      return css({ ...moveLeft, ...onBottom });
    default: //top
      return css({ ...moveBottom, ...centerX });
  }
};

export const tooltipTargetStyle = {};
