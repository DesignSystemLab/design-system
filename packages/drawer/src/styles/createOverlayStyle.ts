import { css } from '@emotion/react';
import { getColorByToken, hexToRgba } from '@jdesignlab/theme';
import type { ColorToken } from '@jdesignlab/theme';

const createOverlayStyle = (overlayColor: ColorToken) => {
  return css({
    zIndex: '999',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: `${hexToRgba(getColorByToken(overlayColor), 0.1)}`
  });
};

export default createOverlayStyle;
