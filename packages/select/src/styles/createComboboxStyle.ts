import { css } from '@emotion/react';
import { hexToRgba, getColorByToken } from '@jdesignlab/theme';
import { FONT_COLOR, DISABLED_COLOR } from '../constants';
import type { StyleProps } from '../types';

export const createComboboxStyle = (styleProps: StyleProps) => {
  const color = styleProps?.color || null;
  const selectColor = getColorByToken(color || FONT_COLOR);
  const disabledColor = getColorByToken(DISABLED_COLOR);

  const comboboxStyle = css({
    width: '228px',
    fontSize: '16px',
    borderStyle: 'none',
    padding: '0',
    '&:focus': {
      outlineColor: `${selectColor}`,
      outline: `${selectColor}`
    },
    '&:hover': {
      cursor: 'pointer'
    }
  });

  const activeItemStyle = css({
    color: `${getColorByToken(FONT_COLOR)}`,
    padding: '4px 8px',
    '&[data-hover="hover"]': {
      backgroundColor: `${hexToRgba(selectColor, 0.6)}`
    },
    '&:hover': {
      cursor: 'pointer',
      outline: `${selectColor}`
    }
  });

  const disabledItemStyle = css({
    color: `${disabledColor}`,
    padding: '4px 8px',
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
