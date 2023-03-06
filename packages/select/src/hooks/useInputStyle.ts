import { css } from '@emotion/react';

export const useSelectStyle = () => {
  return {
    inputStyle: css({
      width: '228px',
      fontSize: '16px',
      borderStyle: 'none',
      padding: '0',
      '&:focus': {
        outline: 'none'
      }
    })
  };
};
