import { variantPresetColors } from '../token/colors';
import type { HEX, ColorToken } from '../types/color';

export const getColorByToken = (colorToken: ColorToken): HEX => {
  const [prefix, suffix] = colorToken.split('-');
  return prefix && suffix ? variantPresetColors[prefix][suffix] : variantPresetColors[prefix];
};

export const hexToRgba = (hex: HEX, opacity: number) => {
  return `rgba(${parseInt(hex.substring(1, 3), 16)},${parseInt(hex.substring(3, 5), 16)},${parseInt(
    hex.substring(5, 7),
    16
  )},${opacity})`;
};
