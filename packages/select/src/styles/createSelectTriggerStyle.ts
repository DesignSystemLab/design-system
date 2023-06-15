import { css } from '@emotion/react';
import { BORDER_COLOR, BORDER_RADIUS, FONT_COLOR } from '../constants';
import { getColorByToken } from '@jdesignlab/theme';
import type { ColorToken } from '@jdesignlab/theme';

export const createSelectTriggerStyle = (color: ColorToken, isDisabled: boolean) => {
  const fontColor = getColorByToken(FONT_COLOR);
  const borderRadius = `${BORDER_RADIUS}px`;
  const borderColor = getColorByToken(color || BORDER_COLOR);

  const flexStyle = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  });

  const triggerStyle = {
    disabled() {
      if (isDisabled) {
        return css({
          fontWeight: 'normal',
          border: `1px solid ${borderColor}`,
          color: `${fontColor}`,
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
        border: `1px solid ${borderColor}`,
        color: `${fontColor}`,
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
      borderRadius,
      width: 'auto',
      maxWidth: '200px',
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
    flexStyle,
    color
  };
};
