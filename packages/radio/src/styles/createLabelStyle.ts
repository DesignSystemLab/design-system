import { css } from '@emotion/react';
import type { HEX } from '@jdesignlab/theme';
import type { RadioSize } from '../types';

const createLabelStyle = (size: RadioSize, fontColor: HEX) => {
  const labelStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: `${fontColor}`,
    boxSizing: 'border-box',
    padding: 0,
    whiteSpace: 'nowrap',
    transition: 'border 0.5s ease-in-out',
    '& span': {
      verticalAlign: 'middle'
    }
  });

  const labelFontSize = () => {
    switch (size) {
      case 'lg':
        return css({
          fontSize: '18px',
          lineHeight: '-0.02em'
        });
      case 'md':
        return css({
          fontSize: '16px',
          lineHeight: '-0.01em'
        });
      default:
        return css({
          fontSize: '14px',
          lineHeight: '-0.01em'
        });
    }
  };

  return [labelStyle, labelFontSize()];
};

export default createLabelStyle;
