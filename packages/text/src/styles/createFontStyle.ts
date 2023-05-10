import { css } from '@emotion/react';
import { HEX } from '@jdesignlab/theme';
import type { FontTransformToken, FontStyleToken, FontDecoration, FontAlign } from '../types';

export const createFontStyle = (
  transform: FontTransformToken,
  style: FontStyleToken,
  decoration: FontDecoration,
  align: FontAlign,
  color: HEX
) => {
  return css({
    textTransform: transform,
    fontStyle: style,
    textDecoration: decoration,
    textAlign: align,
    color
  });
};
