import { css } from '@emotion/react';

export const createWrapperStyle = (width: number) => {
  return css({
    position: 'relative',
    display: 'inline-block',
    width: width ? `${width}px` : '100%'
  });
};
