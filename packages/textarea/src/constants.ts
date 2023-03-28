import { StyleProps } from './types';
import type { ColorToken } from '@jdesignlab/theme';

const DEFAULT_STYLE: Required<StyleProps> = {
  label: '',
  resize: 'none',
  color: 'teal-base',
  appearance: 'standard',
  width: 480,
  maxWidth: 640,
  maxHeight: 480,
  maxLength: null
};
const TEXTAREA_PLACEHOLDER_COLOR: ColorToken = 'grey-lighten1';
const TEXTAREA_LABEL_COLOR: ColorToken = 'grey-darken2';
const TEXTAREA_ID_PREFIX: string = 'jds-textarea';

export { DEFAULT_STYLE, TEXTAREA_ID_PREFIX, TEXTAREA_LABEL_COLOR, TEXTAREA_PLACEHOLDER_COLOR };
