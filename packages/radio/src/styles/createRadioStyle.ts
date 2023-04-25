import { css } from '@emotion/react';
import { getColorByToken } from '@jdesignlab/theme';
import type { ColorToken } from '@jdesignlab/theme';
import type { RadioSize } from '../types';

const createRadioStyle = (color: ColorToken, disabledColor: ColorToken, disabled: boolean, size: RadioSize) => {
  const hexColor = getColorByToken(color);
  const hexDisabledColor = getColorByToken(disabledColor);

  const radioStyle = css({
    width: '16px',
    height: '16px',
    border: `2px solid ${hexColor}`,
    borderRadius: '50%',
    cursor: 'pointer',
    appearance: 'none',
    verticalAlign: 'middle',
    '&:checked': {
      border: `4px solid ${hexColor}`
    },
    '&:focus-visible': {
      outline: `2px solid ${hexColor}`
    }
  });

  const disabledStyle = () => {
    if (disabled) {
      return css({
        cursor: 'not-allowed',
        backgroundColor: `${hexDisabledColor}`,
        border: `4px solid ${hexDisabledColor}`,
        opacity: '0.7',
        '&:checked': {
          borderStyle: `none`
        }
      });
    }
    return css({
      cursor: 'pointer',
      border: `2px solid ${hexColor}`
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
          borderWidth: `4px solid ${hexColor}`,
          '&:focus-visible': {
            outline: `4px solid ${hexColor}`
          }
        });
      default:
        return css({
          width: '16px',
          height: '16px',
          borderWidth: `2px solid ${hexColor}`,
          '&:checked': {
            borderWidth: `4px solid ${hexColor}`
          },
          '&:focus-visible': {
            outline: `2px solid ${hexColor}`
          }
        });
    }
  };

  return [radioStyle, disabledStyle(), radioSizeStyle()];
};

export default createRadioStyle;
