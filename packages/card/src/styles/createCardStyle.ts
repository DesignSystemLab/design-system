import { css } from '@emotion/react';
import { hexToRgba, getColorByToken } from '@jdesignlab/theme';
import type { ColorToken } from '@jdesignlab/theme';
import type { Size, Variant } from '../types';

const createCardStyle = (size: Size, variant: Variant, backgroundColor: ColorToken, borderColor: ColorToken) => {
  const hexBorderColor = getColorByToken(borderColor);

  const baseStyle = css({
    boxSizing: 'border-box',
    padding: '12px 24px'
  });

  const variantStyle = () => {
    switch (variant) {
      case 'filled':
        return css({
          boxSizing: 'border-box',
          boxShadow: 'none',
          backgroundColor: `${getColorByToken(backgroundColor)}`
        });
      case 'outlined':
        return css({ boxSizing: 'border-box', border: `1px solid ${hexBorderColor}` });
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
          maxWidth: '720px'
        });
      case 'sm':
        return css({
          maxWidth: '200px'
        });
      //medium
      default:
        return css({
          maxWidth: '440px'
        });
    }
  };

  return [baseStyle, variantStyle(), sizeStyle()];
};

export default createCardStyle;
