import { css } from '@emotion/react';
import { HEX } from '@jdesignlab/theme';
import type { FontTransformToken, FontStyleToken, FontDecoration, FontAlign } from '../types';

export const createFontStyle = (
  transform: FontTransformToken,
  style: FontStyleToken,
  decoration: FontDecoration,
  align: FontAlign,
  color: HEX,
  truncate: boolean
) => {
  let truncateStyle = {};
  if (truncate) {
    truncateStyle = {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    };
  }
  return css({
    ...truncateStyle,
    textTransform: transform,
    fontStyle: style,
    textDecoration: decoration,
    textAlign: align,
    color
  });
};
