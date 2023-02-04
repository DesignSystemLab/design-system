import { SpacingType } from './spacingTypes';

const BASE_SPACING: number = 4;
const SAPCING_LENGTH: number = 16;

const generateSpacingToken = (spacing: number) => {
    return `${spacing * BASE_SPACING}px`;
};

const spacingFactory = (length: number): SpacingType => {
    let spacingTokens: SpacingType = {};
    for (let i = 1; i <= length; i++) {
        spacingTokens[i] = generateSpacingToken(i);
    }
    return spacingTokens;
};

export default Object.freeze(spacingFactory(SAPCING_LENGTH));
