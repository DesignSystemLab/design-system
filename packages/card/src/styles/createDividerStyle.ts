import { css } from '@emotion/react';
import { getColorByToken } from '@jdesignlab/theme';
import type { ColorToken } from '@jdesignlab/theme';
import { Direction } from '../types';

const createDividerStyle = (direction: Direction) => {
  const dividerColor: ColorToken = 'grey-base';

  if (direction === 'vertical') {
    return css({
      width: '100%',
      height: 0,
      margin: '8px 0',
      borderTop: `${getColorByToken(dividerColor)} solid 1px`
    });
  }
  // return css({
  //   height: '64px',
  //   width: '1px',
  //   margin: '0 4px',
  //   borderLeft: `hotpink solid 1px`
  // });
};

export default createDividerStyle;
