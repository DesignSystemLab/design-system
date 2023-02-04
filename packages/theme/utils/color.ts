import { ColorToken } from '../token/colorTypes';

export const getColorToken = (colorToken: ColorToken): string[] => {
    return colorToken.split('-');
};
