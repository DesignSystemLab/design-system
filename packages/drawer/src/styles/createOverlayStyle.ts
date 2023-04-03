import { css } from '@emotion/react';
import { getColorByToken, hexToRgba } from '@jdesignlab/theme';

const createOverlayStyle = () => {
  return css({
    zIndex: '999',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: `${hexToRgba(getColorByToken('shades-black'), 0.1)}`
  });
};

export default createOverlayStyle;
