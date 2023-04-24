import { css } from '@emotion/react';

export const createResponsiveStyle = (responsive: boolean = false, mqMaxWidth: string) => {
  const responsiveStyle = () => {
    if (responsive) {
      return css({
        [mqMaxWidth]: {
          flexDirection: 'column'
        }
      });
    }
    return css({});
  };

  return responsiveStyle();
};
