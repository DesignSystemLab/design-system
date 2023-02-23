import type { ColorToken, HEX } from '@jdesignlab/theme';
import type { RadioProps, RadioSize } from './radioTypes';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { getColorByToken } from '@jdesignlab/theme';

export const useStyle = (radioProps: RadioProps) => {
  const defaultColorToken: ColorToken = 'green-base';
  const disabledColorToken: ColorToken = 'grey-lighten1';
  const focusColorToken: ColorToken = 'blue-lighten2';
  const defaultSize: RadioSize = 'md';

  const [color, setColor] = useState<HEX>(getColorByToken(defaultColorToken));
  const [size, setSize] = useState<RadioSize>(defaultSize);

  useEffect(() => {
    setColor(radioProps.color ? getColorByToken(radioProps.color) : getColorByToken(defaultColorToken));
    setSize(radioProps.size ?? defaultSize);
  }, []);

  const styleTheme = {
    defultRadioStyle() {
      return css({
        color: `${getColorByToken('grey-darken4')}`,
        fontSize: '16px',
        boxSizing: 'border-box',
        padding: 0,
        whiteSpace: 'nowrap',
        display: 'block',
        transition: 'border 0.5s ease-in-out',
        '& span': {
          verticalAlign: 'middle'
        },
        '& input[type="radio"]': {
          width: '16px',
          height: '16px',
          border: `2px solid ${color}`,
          borderRadius: '50%',
          cursor: 'pointer',
          appearance: 'none',
          verticalAlign: 'middle'
        },
        '& input[type="radio"]:checked': {
          border: `4px solid ${color}`
        },
        '& input[type="radio"]:focus-visible': {
          outline: `2px solid ${getColorByToken(focusColorToken)}`
        }
      });
    },
    disabledRadioStyle(isDisabled: boolean) {
      if (isDisabled) {
        return css({
          color: `${getColorByToken(disabledColorToken)}`,
          '& input[type="radio"]': {
            cursor: 'not-allowed',
            backgroundColor: `${getColorByToken(disabledColorToken)}`,
            border: `4px solid ${getColorByToken(disabledColorToken)}`,
            opacity: '0.7'
          },
          '& input[type="radio"]:checked': {
            borderStyle: `none`
          }
        });
      }

      return css({
        '& input[type="radio"]': {
          cursor: 'pointer',
          border: `2px solid ${color}`
        }
      });
    },
    radioSizeStyle() {
      switch (size) {
        case 'sm':
          return css({
            fontSize: '12px',
            '& input[type="radio"]': {
              width: '12px',
              height: '12px',
              borderWidth: '1px'
            }
          });
        case 'lg':
          return css({
            fontSize: '20px',
            '& input[type="radio"]': {
              width: '20px',
              height: '20px',
              borderWidth: `4px solid ${color}`
            },

            '& input[type="radio"]:focus-visible': {
              outline: `4px solid ${getColorByToken(focusColorToken)}`
            }
          });
        default:
          return css({
            '& input[type="radio"]': {
              width: '16px',
              height: '16px',
              borderWidth: `2px solid ${color}`
            },
            '& input[type="radio"]:checked': {
              borderWidth: `4px solid ${color}`
            },
            '& input[type="radio"]:focus-visible': {
              outline: `2px solid ${getColorByToken(focusColorToken)}`
            }
          });
      }
    }
  };

  return { styleTheme };
};
