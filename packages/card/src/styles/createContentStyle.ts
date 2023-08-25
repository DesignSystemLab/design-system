import { css } from '@emotion/react';
import type { ColorToken } from '@jdesignlab/theme';
import type { Direction } from '../types';

const createContentStyle = (direction: Direction, borderColor: ColorToken) => {
  if (direction === 'horizontal') {
    return css({
      boxSizing: 'border-box',
      borderRight: `1px solid ${borderColor}`,
      maxWidth: '33%',
      wordWrap: 'break-word'
    });
  }

  return css({
    borderTop: `1px solid ${borderColor}`,
    wordWrap: 'break-word',
    maxWidth: '100%',
    boxSizing: 'border-box'
  });
};

export default createContentStyle;
