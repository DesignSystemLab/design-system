import { css } from '@emotion/react';
import type { HEX } from '@jdesignlab/theme';
const createFooterStyle = (border: HEX) => {
  return css({
    margin: 0,
    padding: '8px 0',
    fontSize: '16px',
    textAlign: 'left',
    minHeight: '16px',
    wordWrap: 'break-word'
  });
};

export default createFooterStyle;
