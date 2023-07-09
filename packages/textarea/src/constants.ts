import { StyleProps } from './types';
import type { ColorToken, HEX } from '@jdesignlab/theme';

const DEFAULT_STYLE: Required<StyleProps> = {
  label: '',
  resize: 'none',
  color: 'grey-base',
  appearance: 'standard',
  width: 320,
  height: 64,
  maxWidth: 480,
  maxHeight: 120,
  maxLength: null
};

const TEXTAREA_TEXT_COLOR: HEX = '#444444';
const TEXTAREA_PLACEHOLDER_COLOR: ColorToken = 'grey-lighten1';
const TEXTAREA_LABEL_COLOR: ColorToken = 'grey-darken2';
const TEXTAREA_ID_PREFIX: string = 'jds-textarea';

export { TEXTAREA_TEXT_COLOR, DEFAULT_STYLE, TEXTAREA_ID_PREFIX, TEXTAREA_LABEL_COLOR, TEXTAREA_PLACEHOLDER_COLOR };
