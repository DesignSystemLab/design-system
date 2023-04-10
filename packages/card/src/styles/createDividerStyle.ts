import { css } from '@emotion/react';
import { getColorByToken } from '@jdesignlab/theme';
import type { ColorToken } from '@jdesignlab/theme';

const createDividerStyle = () => {
  const dividerColor: ColorToken = 'grey-lighten3';
  return css({
    height: 0,
    width: '100%',
    margin: '4px 0',
    borderTop: `${getColorByToken(dividerColor)} solid 1px`
  });
};

export default createDividerStyle;
