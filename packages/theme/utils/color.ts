import { variantPresetColors } from '@jdesignlab/theme';
import { HEX, ColorToken } from '../token/colorTypes';

export const getColorByToken = (colorToken: ColorToken): HEX => {
    const [prefix, suffix] = colorToken.split('-');
    return variantPresetColors[prefix][suffix];
};

export const hexToRgba = (hex: HEX, opacity: number) => {
    return `rgba(${parseInt(hex.substring(1, 3), 16)},${parseInt(hex.substring(3, 5), 16)},${parseInt(hex.substring(5, 7), 16)},${opacity})`;
};
