import type { ColorToken } from '@jdesignlab/theme';
import type { DrawerProps } from './types';

type DrwaerOption = Pick<DrawerProps, 'open' | 'placement'>;

const DEFAULT_OPTIONS: Required<DrwaerOption> = {
  open: false,
  placement: 'left'
};

const DRAWER_OVERRAY_BACKGROUND: ColorToken = 'shades-black';
const DRAWER_BACKROUND: ColorToken = 'shades-white';

export { DEFAULT_OPTIONS, DRAWER_OVERRAY_BACKGROUND, DRAWER_BACKROUND };
