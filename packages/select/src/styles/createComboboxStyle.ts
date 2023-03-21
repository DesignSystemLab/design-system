import { css } from '@emotion/react';
import { hexToRgba, getColorByToken } from '@jdesignlab/theme';
import type { StyleProps } from '../types';

export const createComboboxStyle = (styleProps: StyleProps) => {
  const color = getColorByToken(styleProps.color || 'green-base');
  const listColor = getColorByToken('shades-black');
  const disabledColor = getColorByToken('grey-lighten1');

  const comboboxStyle = css({
    width: '228px',
    fontSize: '16px',
    borderStyle: 'none',
    padding: '0',
    '&:focus': {
      outlineColor: `${color}`,
      outline: `${color}`
    },
    '&:hover': {
      cursor: 'pointer'
    }
  });

  const activeItemStyle = css({
    color: `${listColor}`,
    padding: '4px 8px',
    borderRadius: '8px',
    '&[data-hover="hover"]': {
      backgroundColor: `${hexToRgba(color, 0.8)}`
    },
    '&:hover': {
      cursor: 'pointer',
      outline: `${color}`
    }
  });

  const disabledItemStyle = css({
    color: `${disabledColor}`,
    padding: '4px 8px',
    borderRadius: '8px',
    '&:hover': {
      background: 'none',
      outline: `${disabledColor}`,
      cursor: 'not-allowed'
    }
  });

  return {
    comboboxStyle,
    activeItemStyle,
    disabledItemStyle
  };
};
