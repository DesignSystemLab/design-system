import { css } from '@emotion/react';
import { FONT_SIZE_MAP, LINE_HEIGHT_MAP } from '../constants';
import { BoldType, FontSize, Variant } from '../types';

const generateBoldStyle = (boldWeight: number) => {
  return { fontWeight: boldWeight };
};

export const typography = (fontsize: FontSize, variant: Variant, bold?: BoldType) => {
  const setFontWeight = (variant: Variant, bold?: BoldType) => {
    if (bold && typeof bold === 'number') {
      return generateBoldStyle(bold);
    } else if (bold) {
      switch (bold) {
        case 'light':
          return generateBoldStyle(300);
        case 'semi':
          return generateBoldStyle(600);
        case 'extra':
          return generateBoldStyle(800);
        default:
          return generateBoldStyle(500);
      }
    } else {
      switch (variant) {
        case 'label':
          return generateBoldStyle(500);
        case 'heading':
          return generateBoldStyle(700);
        default:
          return generateBoldStyle(400);
      }
    }
  };
  return css({
    margin: 0,
    fontSize: `${FONT_SIZE_MAP[fontsize]}px`,
    lineHeight: `${LINE_HEIGHT_MAP[variant]}`,
    ...setFontWeight(variant, bold)
  });
};
