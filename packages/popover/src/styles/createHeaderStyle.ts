import { css } from '@emotion/react';
import type { HEX } from '@jdesignlab/theme';
const createHeaderStyle = (border: HEX) => {
  return css({
    margin: 0,
    padding: '8px 0',
    fontSize: '16px',
    fontWeight: 700,
    textAlign: 'left',
    borderBottom: `1px solid ${border}`,
    wordWrap: 'break-word'
  });
};

export default createHeaderStyle;
