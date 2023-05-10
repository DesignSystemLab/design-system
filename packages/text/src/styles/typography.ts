import { css } from '@emotion/react';
import { FONT_SIZE_MAP, LINE_HEIGHT_MAP } from '../constants';
import { FontSize, Variant } from '../types';

export const typography = (fontsize: FontSize, variant: Variant) => {
  const createFontWeight = (variant: Variant) => {
    switch (variant) {
      case 'label':
        return {
          fontWeight: '500'
        };
      case 'heading':
        return {
          fontWeight: '700'
        };
      default:
        return {
          fontWeight: '400'
        };
    }
  };
  return css({
    margin: 0,
    fontSize: `${FONT_SIZE_MAP[fontsize]}px`,
    lineHeight: `${LINE_HEIGHT_MAP[variant]}`,
    ...createFontWeight(variant)
  });
};
