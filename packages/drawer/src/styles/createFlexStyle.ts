import { css } from '@emotion/react';

export const flex = () => {
  return css({
    display: 'flex',
    flexDirection: 'column'
  });
};

export const flexGrow = (grow: number) => {
  return css({
    flexGrow: `${grow}`
  });
};
