import { themePreset } from '@jdesignlab/j-provider';
import type { HEX } from '@jdesignlab/theme';

const RADIO_ID_PREFIX: string = 'j-radio';
const RADIO_NAME_PREFIX: string = 'j-radio-name';
const DEFAULT_COLOR: HEX = themePreset.color.primary;
const DEFAULT_FONT_COLOR: HEX = themePreset.color.fontColor;
const DEFAULT_DISABLED_COLOR: HEX = themePreset.color.disabled;

export { RADIO_ID_PREFIX, RADIO_NAME_PREFIX, DEFAULT_COLOR, DEFAULT_DISABLED_COLOR, DEFAULT_FONT_COLOR };
