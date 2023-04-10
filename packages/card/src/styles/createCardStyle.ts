import { css } from '@emotion/react';
import { hexToRgba, getColorByToken } from '@jdesignlab/theme';
import type { ColorToken } from '@jdesignlab/theme';
import type { Direction, Size, Variant } from '../types';

const createCardStyle = (size: Size, variant: Variant, backgroundColor: ColorToken, borderColor: ColorToken) => {
  const hexBorderColor = getColorByToken(borderColor);

  const variantStyle = () => {
    switch (variant) {
      case 'filled':
        return css({
          boxShadow: 'none',
          backgroundColor: `${getColorByToken(backgroundColor)}`
        });
      case 'outlined':
        return css({ border: `1px solid ${hexBorderColor}` });
      default:
        return css({
          boxSizing: 'border-box',
          boxShadow: `0 3px 6px ${hexToRgba(hexBorderColor, 0.16)}, 0 3px 6px ${hexToRgba(hexBorderColor, 0.2)}`
        });
    }
  };

  const sizeStyle = () => {
    switch (size) {
      case 'lg':
        return css({
          fontSize: '20px',
          padding: '18px',
          maxWidth: '1024px'
        });
      case 'sm':
        return css({
          fontSize: '12px',
          padding: '8px',
          maxWidth: '480px'
        });
      default:
        return css({
          fontSize: '16px',
          padding: '8px',
          maxWidth: '720px'
        });
    }
  };

  return [variantStyle(), sizeStyle()];
};

export default createCardStyle;
