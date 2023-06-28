import type { ColorToken } from '@jdesignlab/theme';
import type { DrawerProps } from './types';

type DrwaerOption = Pick<DrawerProps, 'open' | 'placement' | 'full'>;

const DEFAULT_OPTIONS: Required<DrwaerOption> = {
  open: false,
  full: false,
  placement: 'left'
};

const DRAWER_OVERRAY_BACKGROUND: ColorToken = 'shades-black';
const DRAWER_BACKROUND: ColorToken = 'shades-white';
const DRAWER_ID_PREFIX: string = 'jds-drawer';

export { DEFAULT_OPTIONS, DRAWER_OVERRAY_BACKGROUND, DRAWER_BACKROUND, DRAWER_ID_PREFIX };
