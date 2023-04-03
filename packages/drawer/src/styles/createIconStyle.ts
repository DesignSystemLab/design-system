import { css } from '@emotion/react';
import type { Placement } from '../types';

const createIconStyle = (placement: Placement) => {
  if (placement === 'left' || placement == 'right') {
    return css({
      position: 'absolute',
      right: '0',
      top: '8px'
    });
  }
  return css({
    position: 'absolute',
    right: '44px'
  });
};

export default createIconStyle;
