import { css } from '@emotion/react';
import type { HEX } from '@jdesignlab/theme';
import type { Placement } from '../types';

const createPopoverStyle = (placement: Placement, arrow: boolean, background: HEX, border: HEX) => {
  const baseStyle = () => {
    return css({
      padding: '8px',
      position: 'absolute',
      boxSizing: 'border-box',
      backgroundColor: 'white',
      border: `1px solid ${border}`,
      top: 0
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

export default createPopoverStyle;
