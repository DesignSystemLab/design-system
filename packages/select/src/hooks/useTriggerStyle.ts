import { css } from '@emotion/react';
import { getColorByToken } from '@jdesignlab/theme';
import type { ColorToken } from '@jdesignlab/theme';

export const useTriggerStyle = (colorToken: ColorToken, isDisabled: boolean) => {
  const color = isDisabled ? getColorByToken('grey-base') : getColorByToken(colorToken);
  const triggerStyle = {
    disabled() {
      if (isDisabled) {
        return css({
          fontWeight: 'normal',
          border: `1px solid ${color}`,
          color: `${color}`,
          cursor: 'not-allowed',
          '&:focus': {
            outline: 'none'
          },
          '& button': {
            color: 'yellow',
            cursor: 'not-allowed'
          }
        });
      }
      return css({
        fontWeight: '500',
        border: `1px solid ${color}`,
        color: `${color}`,
        cursor: 'pointer',
        '& button': {
          color: 'yellow',
          cursor: 'pointer'
        }
      });
    },
    default: css({
      position: 'relative',
      padding: '0 8px',
      borderRadius: '4px',
      width: 'auto',
      maxWidth: '256px',
      '&:focus': {
        outline: `1px solid ${color}`
      },
      '& span': {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
      },
      '& button': {
        backgroundColor: 'transparent',
        borderStyle: 'none'
      }
    })
  };

  return {
    triggerStyle: [triggerStyle.default, triggerStyle.disabled()],
    color
  };
};
