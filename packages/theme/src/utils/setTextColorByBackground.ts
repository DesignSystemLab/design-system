import { variantPresetColors } from '../token/colors';
import type { HEX } from '../types/color';

export const setTextColorByBackground = (color: HEX | string) => {
  const hexValue = color.replace('#', '');
  const rgbValues = hexValue.match(/.{1,2}/g)?.map(value => parseInt(value, 16)) ?? [];
  const brightness = (rgbValues[0] + rgbValues[1] + rgbValues[2]) / 3;
  if (brightness < 200) {
    return variantPresetColors.font;
  } else {
    return variantPresetColors.grey.lighten4;
  }
};
