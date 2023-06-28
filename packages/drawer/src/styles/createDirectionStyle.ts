import { css } from '@emotion/react';
import { getColorByToken } from '@jdesignlab/theme';
import type { ColorToken } from '@jdesignlab/theme';
import type { Placement } from '../types';

const createDirectionStyle = (placement: Placement, backgroundColor: ColorToken, open: boolean, full: boolean) => {
  if (!open) {
    return css({
      visibility: 'hidden',
      height: '0',
      zIndex: 0,
      [placement]: '-300px'
    });
  }

  const baseDrawerStyle = css({
    [placement]: 0,
    boxSizing: 'border-box',
    overflow: 'auto',
    zIndex: '1000',
    padding: '16px',
    position: `${full ? 'static' : 'absolute'}`,
    backgroundColor: `${getColorByToken(backgroundColor)}`,
    transition: `${placement} 0.2s linear;`
  });

  if (placement === 'left' || placement === 'right') {
    return [
      baseDrawerStyle,
      css({
        width: `${full ? '100vw' : '300px'}`,
        height: '100vh'
      })
    ];
  }

  return [
    baseDrawerStyle,
    css({
      width: '100vw',
      minHeight: `${full ? '100vh' : '128px'}`,
      maxHeight: `${full ? '100vh' : '512px'}`
    })
  ];
};

export default createDirectionStyle;
