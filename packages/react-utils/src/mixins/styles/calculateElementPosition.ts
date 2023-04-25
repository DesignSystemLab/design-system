import { css } from '@emotion/react';
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

// visibility: visible & hidden 으로 control해야함
// display로 컨트롤 할 경우 content의 width, height를 받아올 수 없음

export const calculateElementPosition = (
  targetRef: React.RefObject<HTMLDivElement>,
  contentRef: React.RefObject<HTMLDivElement>,
  placement: TooltipAnchor,
  gap?: number
) => {
  if (!targetRef?.current || !contentRef?.current) return;
  if (gap === undefined) {
    gap = 4;
  }

  const targetW = targetRef.current.offsetWidth;
  const targetH = targetRef.current.offsetHeight;

  const contentW = contentRef.current.offsetWidth;
  const contentH = contentRef.current.offsetHeight;

  const centerX = { left: targetW / 2, transform: `translateX(-${contentW / 2}px)` };
  const centerY = { bottom: targetH / 2, transform: `translateY(${contentH / 2}px)` };
  const moveTop = { bottom: `${targetH + gap}px` };
  const moveBottom = { top: `${targetH + gap}px` };
  const moveRight = { left: `${targetW + gap}px` };
  const moveLeft = { left: `-${contentW + gap}px` };
  const onRight = { left: targetW - contentW };
  const onBottom = { top: targetH - contentH };

  switch (placement) {
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
