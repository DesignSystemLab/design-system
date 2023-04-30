import { css } from '@emotion/react';
import type { HEX } from '@jdesignlab/theme';
import type { RadioSize } from '../types';

const createLabelStyle = (size: RadioSize, fontColor: HEX) => {
  const labelStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: `${fontColor}`,
    boxSizing: 'border-box',
    padding: '0 4px',
    whiteSpace: 'nowrap',
    transition: 'border 0.5s ease-in-out',
    '& span': {
      cursor: 'pointer',
      verticalAlign: 'middle',
      margin: '0 4px',
      '&::before': {
        content: '""',
        verticalAlign: 'top',
        marginRight: '4px',
        display: 'inline-block',
        boxSizing: 'border-box',
        border: `solid 2px ${fontColor}`,
        borderRadius: '50%',
        width: '18px',
        height: '18px',
        transition: 'border-color 0.2s, background-color 0.2s'
      },
      '&::after': {
        visibility: 'hidden',
        content: '""',
        display: 'block',
        position: 'absolute',
        top: '4px',
        left: '12px',
        width: '4px',
        height: '4px',
        backgroundColor: '#fff',
        border: 'solid 2px #fff',
        borderRadius: '50%'
      }
    }
  });

  const labelFontSize = () => {
    switch (size) {
      case 'lg':
        return css({
          fontSize: '18px',
          lineHeight: '18px',
          '& span': {
            '&::before': {
              width: '20px',
              height: '20px'
            },
            '&::after': {
              top: '4px',
              left: '12px',
              width: '8px',
              height: '8px'
            }
          }
        });
      case 'md':
        return css({
          fontSize: '16px',
          lineHeight: '16px',
          '& span': {
            '&::before': {
              width: '16px',
              height: '16px'
            }
          }
        });
      default:
        return css({
          fontSize: '14px',
          lineHeight: '12px',
          '& span': {
            '&::before': {
              width: '12px',
              height: '12px'
            },
            '&::after': {
              top: '2px',
              left: '10px',
              width: '4px',
              height: '4px'
            }
          }
        });
    }
  };

  return [labelStyle, labelFontSize()];
};

export default createLabelStyle;
