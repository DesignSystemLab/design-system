import { css } from '@emotion/react';
import type { HEX } from '@jdesignlab/theme';
const createBodyStyle = (border: HEX) => {
  return css({
    margin: 0,
    padding: '8px 0',
    fontSize: '16px',
    textAlign: 'left',
    borderBottom: `1px solid ${border}`,
    wordWrap: 'break-word'
  });
};

export default createBodyStyle;
