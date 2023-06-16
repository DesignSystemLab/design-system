import { css } from '@emotion/react';
import { getColorByToken } from '@jdesignlab/theme';
import { DEFAULT_BORDER_COLOR } from '../constants';
import { Direction } from '../types';
import type { ColorToken } from '@jdesignlab/theme';

const createDividerStyle = (direction: Direction) => {
  const dividerColor = getColorByToken(DEFAULT_BORDER_COLOR);

  if (direction === 'vertical') {
    return css({
      width: '100%',
      height: 0,
      margin: '12px 0',
      borderTop: `${dividerColor} solid 1px`
    });
  }
  return css({
    height: '64px',
    width: '1px',
    margin: '0 4px',
    borderLeft: `${dividerColor} solid 1px`
  });
};

export default createDividerStyle;
