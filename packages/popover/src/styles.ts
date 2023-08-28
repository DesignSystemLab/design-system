import { css } from '@emotion/react';
import { hexToRgba } from '@jdesignlab/theme';
import type { HEX } from '@jdesignlab/theme';
import type { Placement } from './types';

type Size = {
  width: number;
  height: number;
};

export const createBody = (border: HEX) => {
  return css({
    margin: 0,
    padding: '8px 0',
    fontSize: '16px',
    textAlign: 'left',
    borderBottom: `1px solid ${border}`,
    wordWrap: 'break-word'
  });
};

export const footer = css({
  margin: 0,
  padding: '8px 0',
  fontSize: '16px',
  textAlign: 'left',
  minHeight: '16px',
  wordWrap: 'break-word'
});

export const createHeader = (border: HEX) => {
  return css({
    margin: 0,
    padding: '8px 0',
    fontSize: '16px',
    fontWeight: 700,
    textAlign: 'left',
    borderBottom: `1px solid ${border}`,
    wordWrap: 'break-word'
  });
};

export const overlay = css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh'
});

export const createPosition = (placement: Placement, trigger: Size, popover: Size) => {
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

export const createPopover = (placement: Placement, arrow: boolean, background: HEX, border: HEX) => {
  const baseStyle = () => {
    return css({
      padding: '8px',
      position: 'absolute',
      boxSizing: 'border-box',
      backgroundColor: 'white',
      border: `1px solid ${border}`,
      boxShadow: `0 3px 6px ${hexToRgba(border, 0.16)}, 0 3px 6px ${hexToRgba(border, 0.2)}`,
      zIndex: 10
    });
  };
  const directionStyle = () => {
    switch (placement) {
      case 'left':
        return css({
          width: '260px',
          marginTop: '12px',
          transform: `translateX(0)`,
          background: `${background}`,
          borderRadius: '4px'
        });
      case 'right':
        return css({
          width: '260px',
          marginTop: '12px',
          right: 0,
          background: `${background}`,
          borderRadius: '4px'
        });
      case 'top':
        return css({
          width: '260px',
          marginTop: '12px',
          transform: `translateX(0)`,
          background: `${background}`,
          borderRadius: '4px'
        });
      default:
        return css({
          width: '260px',
          transform: `translateX(0)`,
          background: `${background}`,
          borderRadius: '4px'
        });
    }
  };

  const arrowStyle = () => {
    if (arrow) {
      switch (placement) {
        case 'right':
          return css({
            '&::after': {
              content: '""',
              position: 'absolute',
              width: '0.5rem',
              height: '0.5rem',
              backgroundColor: 'white',
              left: '-0.5px',
              top: '50%',
              borderLeft: `1px solid ${border}`,
              borderBottom: `1px solid ${border}`,
              transform: `translate(-50%, -50%) rotate(45deg)`
            }
          });
        case 'bottom':
          return css({
            '&::after': {
              content: '""',
              position: 'absolute',
              width: '0.5rem',
              height: '0.5rem',
              backgroundColor: 'white',
              left: '50%',
              top: '-0.5px',
              borderLeft: `1px solid ${border}`,
              borderTop: `1px solid ${border}`,
              transform: `translate(-50%, -50%) rotate(45deg)`
            }
          });
        case 'left':
          return css({
            '&::after': {
              content: '""',
              position: 'absolute',
              width: '0.5rem',
              height: '0.5rem',
              backgroundColor: 'white',
              top: '50%',
              right: '0',
              borderRight: `1px solid ${border}`,
              borderTop: `1px solid ${border}`,
              transform: `translate(50%, -50%) rotate(45deg)`
            }
          });
        default:
          return css({
            '&::after': {
              content: '""',
              position: 'absolute',
              width: '0.5rem',
              height: '0.5rem',
              backgroundColor: 'white',
              bottom: '-10px',
              left: '50%',
              borderRight: `1px solid ${border}`,
              borderBottom: `1px solid ${border}`,
              transform: `translate(-50%, -50%) rotate(45deg)`
            }
          });
      }
    }

    return css({
      '$::after': {
        content: 'none',
        display: 'none'
      }
    });
  };

  return [baseStyle(), directionStyle(), arrowStyle()];
};

export const trigger = css({
  display: 'inline-block',
  position: 'relative'
});
