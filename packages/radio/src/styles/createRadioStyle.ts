import { css } from '@emotion/react';
import type { HEX } from '@jdesignlab/theme';
import type { RadioSize } from '../types';

const createRadioStyle = (color: HEX, disabledColor: HEX, disabled: boolean, size: RadioSize) => {
  const radioStyle = css({
    width: '16px',
    height: '16px',
    border: `2px solid ${color}`,
    borderRadius: '50%',
    cursor: 'pointer',
    appearance: 'none',
    verticalAlign: 'middle',
    '&:checked': {
      border: `4px solid ${color}`
    },
    '&:focus-visible': {
      outline: `2px solid ${color}`
    }
  });

  const disabledStyle = () => {
    if (disabled) {
      return css({
        cursor: 'not-allowed',
        backgroundColor: `${disabledColor}`,
        border: `4px solid ${disabledColor}`,
        opacity: '0.7',
        '&:checked': {
          borderStyle: `none`
        }
      });
    }
    return css({
      cursor: 'pointer',
      border: `2px solid ${color}`
    });
  };

  const radioSizeStyle = () => {
    switch (size) {
      case 'sm':
        return css({
          width: '12px',
          height: '12px',
          borderWidth: '1px'
        });
      case 'lg':
        return css({
          width: '20px',
          height: '20px',
          borderWidth: `4px solid ${color}`,
          '&:focus-visible': {
            outline: `4px solid ${color}`
          }
        });
      default:
        return css({
          width: '16px',
          height: '16px',
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
