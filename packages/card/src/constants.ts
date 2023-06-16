import type { ColorToken } from '@jdesignlab/theme';
import type { StyleProps } from './types';

const REQUIRED_CARD_PROPS: (keyof StyleProps)[] = ['align', 'color', 'direction', 'justify', 'size', 'variant'];
const DEFAULT_CARD_STYLE: Required<StyleProps> = {
  color: 'lightBlue-lighten5',
  align: 'start',
  justify: 'start',
  direction: 'vertical',
  size: 'md',
  variant: 'elevated'
};
const DEFAULT_BORDER_COLOR: ColorToken = 'border';

export { REQUIRED_CARD_PROPS, DEFAULT_CARD_STYLE, DEFAULT_BORDER_COLOR };
