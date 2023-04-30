import { ColorToken, HEX } from '../types/color';
import { getColorByToken } from './getColorbyToken';

const isHexType = (color: ColorToken | HEX): color is HEX => {
  const hexRegex = /^#([A-Fa-f0-9]{3}){1,2}$/;
  return hexRegex.test(color);
};

export const getColorByTokenOrHex = (color: ColorToken | HEX) => {
  if (isHexType(color)) {
    return color;
  }
  return getColorByToken(color);
};
