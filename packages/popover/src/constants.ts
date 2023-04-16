import { getColorByToken } from '@jdesignlab/theme';
import type { PopoverProps } from './types';

type PopoverOption = Required<Pick<PopoverProps, 'placement' | 'arrow' | 'open'>>;

const DEFAULT_OPTIONS: PopoverOption = {
  arrow: true,
  open: false,
  placement: 'top'
};

const POPOVER_BACKGROUND = getColorByToken('shades-white');
const POPOVER_BORDER_COLOR = getColorByToken('grey-lighten1');

export { DEFAULT_OPTIONS, POPOVER_BACKGROUND, POPOVER_BORDER_COLOR };
