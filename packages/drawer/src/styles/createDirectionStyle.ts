import { css } from '@emotion/react';
import { getColorByToken } from '@jdesignlab/theme';
import type { Placement } from '../types';

const createDirectionStyle = (placement: Placement) => {
  if (placement === 'left' || placement == 'right') {
    return css({
      overflow: 'auto',
      zIndex: '1000',
      padding: '16px',
      backgroundColor: `${getColorByToken('shades-white')}`,
      position: 'absolute',
      [placement]: '0',
      width: '304px',
      height: '100vh'
    });
  }

  return css({
    zIndex: '1000',
    padding: '16px',
    overflow: 'auto',
    backgroundColor: `${getColorByToken('shades-white')}`,
    position: 'absolute',
    [placement]: '0',
    width: '100vw',
    minHeight: '128px',
    maxHeight: '512px'
  });
};

export default createDirectionStyle;
