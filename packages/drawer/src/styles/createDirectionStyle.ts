import { css } from '@emotion/react';
import { getColorByToken } from '@jdesignlab/theme';
import type { ColorToken } from '@jdesignlab/theme';
import type { Placement } from '../types';

const createDirectionStyle = (placement: Placement, backgroundColor: ColorToken) => {
  if (placement === 'left' || placement == 'right') {
    return css({
      overflow: 'auto',
      zIndex: '1000',
      padding: '16px',
      backgroundColor: `${getColorByToken(backgroundColor)}`,
      position: 'absolute',
      [placement]: '0',
      width: '304px',
      height: '100vh'
    });
  }

  return css({
    [placement]: '0',
    zIndex: '1000',
    padding: '16px',
    overflow: 'auto',
    backgroundColor: `${getColorByToken(backgroundColor)}`,
    position: 'absolute',
    width: '100vw',
    minHeight: '128px',
    maxHeight: '512px'
  });
};

export default createDirectionStyle;
