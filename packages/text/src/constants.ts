import { LineHeightMapType, FontSizeMap, ElementMap } from './types';
import { themePreset } from '@jdesignlab/j-provider';
import type { HEX } from '@jdesignlab/theme';

const DEFAULT_COLOR: HEX = themePreset.color.fontColor;
const ELEMENT_MAP: ElementMap = {
  paragraph: 'p',
  label: 'p',
  'heading-2xl': 'h1',
  'heading-xl': 'h2',
  'heading-lg': 'h3',
  'heading-md': 'h4',
  'heading-sm': 'h5'
};
const LINE_HEIGHT_MAP: LineHeightMapType = {
  heading: '1.4',
  label: '1.5',
  paragraph: '1.6'
};

const FONT_SIZE_MAP: FontSizeMap = {
  sm: '12',
  md: '16',
  lg: '21',
  xl: '28',
  '2xl': '38'
};

export { LINE_HEIGHT_MAP, FONT_SIZE_MAP, ELEMENT_MAP, DEFAULT_COLOR };
