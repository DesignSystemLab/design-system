import { css } from '@emotion/react';
import type { ColorToken } from '@jdesignlab/theme';
import type { Direction } from '../types';

const createContentStyle = (divider: boolean, direction: Direction, borderColor: ColorToken) => {
  if (divider) {
    if (direction === 'horizontal') {
      return css({
        boxSizing: 'border-box',
        borderRight: `1px solid ${borderColor}`,
        wordWrap: 'break-word'
      });
    }

    return css({
      borderTop: `1px solid ${borderColor}`,
      wordWrap: 'break-word',
      boxSizing: 'border-box'
    });
  }
  return css({ padding: '0', borderStyle: 'none', wordWrap: 'break-word' });
};

export default createContentStyle;
