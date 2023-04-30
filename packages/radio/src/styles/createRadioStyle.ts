import { css } from '@emotion/react';
import type { HEX } from '@jdesignlab/theme';
import type { RadioSize } from '../types';

const createRadioStyle = (color: HEX, disabledColor: HEX, disabled: boolean, size: RadioSize) => {
  const radioStyle = css({
    position: 'absolute',
    display: 'block',
    borderRadius: '50%',
    cursor: 'pointer',
    appearance: 'none',
    verticalAlign: 'middle',
    opacity: '0',
    transition: 'opacity 0.3s, transform 0.2s',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    '&:checked': {
      opacity: '0'
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: '0'
    },
    '&:checked + span::after': {
      visibility: 'visible'
    },
    '&:checked + span::before': {
      borderColor: `${color}`,
      backgroundColor: `${color}`
    },
    '&:hover': {
      cursor: 'pointer',
      visibility: 'visible',
      opacity: '1'
    },
    '&:focus-visible': {
      outline: `2px solid ${color}`
    }
  });

  const disabledStyle = () => {
    if (disabled) {
      return css({
        opacity: '0',
        cursor: 'not-allowed',
        '&:hover': {
          cursor: 'not-allowed',
          visibility: 'visible',
          opacity: '0'
        },
        '& + span': {
          color: `${disabledColor}`,
          cursor: 'not-allowed',
          '&::before': {
            borderColor: 'currentcolor'
          }
        },
        '&:checked': {
          borderStyle: `none`
        }
      });
    }
    return css({
      cursor: 'pointer'
    });
  };

  const radioSizeStyle = () => {
    switch (size) {
      case 'sm':
        return css({
          width: '24px',
          height: '24px',
          left: '2px',
          top: '-6px',
          borderWidth: '1px'
        });
      case 'lg':
        return css({
          width: '40px',
          height: '40px',
          left: '-2px',
          top: '-10px',
          borderWidth: `4px solid ${color}`,
          '&:focus-visible': {
            outline: `4px solid ${color}`
          }
        });
      default:
        return css({
          width: '32px',
          height: '32px',
          left: '0',
          top: '-8px',
          borderWidth: `2px solid ${color}`,
          '&:checked': {
            borderWidth: `4px solid ${color}`
          },
          '&:focus-visible': {
            outline: `2px solid ${color}`
          }
        });
    }
  };

  return [radioStyle, disabledStyle(), radioSizeStyle()];
};

export default createRadioStyle;
