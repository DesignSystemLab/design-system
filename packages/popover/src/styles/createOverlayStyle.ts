import { css } from '@emotion/react';

const createOverlayStyle = () => {
  return css({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh'
  });
};

export default createOverlayStyle;
