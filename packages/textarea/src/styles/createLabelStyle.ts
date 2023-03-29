import { css } from '@emotion/react';
import { getColorByToken } from '@jdesignlab/theme';
import type { ColorToken } from '@jdesignlab/theme';

export const createLabelStyle = (labelColor: ColorToken) => {
  const upsideLabel = {
    top: 0,
    lineHeight: '0.3',
    fontSize: '14px',
    background: 'white',
    color: `${getColorByToken(labelColor)}`
  };

  return css({
    ...upsideLabel,
    fontWeight: 'bold',
    position: 'absolute',
    left: '16px',
    display: 'block',
    transform: 'translateY(-50%)',
    transition: 'all .15s'
  });
};
