import { useState, useEffect, RefObject } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { calculateElementPosition } from '@jdesignlab/utils';

type TooltipAnchor =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'right-top'
  | 'right-bottom'
  | 'left'
  | 'left-top'
  | 'left-bottom'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left';

export interface PlacementStyleProps {
  contentEl: HTMLElement | null;
  triggerEl: HTMLElement | null;
  isHovering: boolean;
  contentStyle?: SerializedStyles;
  placement?: TooltipAnchor | string;
  gap?: number;
}

export const usePlacementStyle = ({
  contentEl,
  triggerEl,
  isHovering,
  contentStyle = css({}),
  placement = 'top',
  gap = 4
}: PlacementStyleProps) => {
  const [style, setStyle] = useState<SerializedStyles>(contentStyle);

  useEffect(() => {
    if (contentEl && triggerEl) {
      const { centerX, centerY, moveTop, moveBottom, moveRight, moveLeft, onRight, onBottom } =
        calculateElementPosition(triggerEl, contentEl, gap);
      let positionStyle = {};
      switch (placement) {
        case 'top':
          positionStyle = {
            ...moveTop,
            ...centerX
          };
          break;
        case 'right':
          positionStyle = {
            ...moveRight,
            ...centerY
          };
          break;
        case 'left':
          positionStyle = {
            ...moveLeft,
            ...centerY
          };
          break;
        case 'bottom':
          positionStyle = {
            ...moveBottom,
            ...centerX
          };
          break;
        case 'top-left':
          positionStyle = {
            ...moveTop
          };
          break;
        case 'top-right':
          positionStyle = {
            ...moveTop,
            ...onRight
          };
          break;
        case 'bottom-left':
          positionStyle = {
            ...moveBottom
          };
          break;
        case 'bottom-right':
          positionStyle = {
            ...moveBottom,
            ...onRight
          };
          break;
        case 'right-top':
          positionStyle = {
            ...moveRight
          };
          break;
        case 'right-bottom':
          positionStyle = {
            ...moveRight,
            ...onBottom
          };
          break;
        case 'left-top':
          positionStyle = {
            ...moveLeft
          };
          break;
        case 'left-bottom':
          positionStyle = {
            ...moveLeft,
            ...onBottom
          };
          break;
        default: //top
          positionStyle = {
            ...moveBottom,
            ...centerX
          };
          break;
      }
      setStyle(css({ ...positionStyle, position: 'absolute' }, contentStyle));
    }
  }, [contentEl, isHovering]);

  return style;
};
