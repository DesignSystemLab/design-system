import { variantPresetColors } from '@jdesignlab/theme';
import { HEX, ColorToken } from '../token/colorTypes';

export const getColorByToken = (colorToken: ColorToken): HEX => {
    const [prefix, suffix] = colorToken.split('-');
    return variantPresetColors[prefix][suffix];
};
