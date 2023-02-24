import { css } from '@emotion/react';
import type { ColorToken } from '@jdesignlab/theme';
import type { TooltipAnchor } from './tooltip-types';
import { getColorByToken, hexToRgba } from '@jdesignlab/theme';

export const tooltipWrapperStyle = css({
  position: 'relative'
});
export const tooltipLabelStyle = css({
  position: 'absolute',
  display: 'inline-block',
  backgroundColor: getColorByToken('grey-darken2'),
  color: getColorByToken('grey-lighten2'),
  padding: '4px 8px',
  borderRadius: '2px',
  whiteSpace: 'pre'
});

export const tooltipLocationStyle = (labelRef: React.RefObject<HTMLDivElement>, targetW: number, targetH: number, gap: number, on: TooltipAnchor | undefined) => {
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

export const tooltipTargetStyle = {
  display: 'inline-block'
};
