import { getColorByToken } from '@jdesignlab/theme';
import type { Preset } from './types';

export const preset: Preset = {
  theme: 'light',
  light: {
    color: {
      background: getColorByToken('shades-white'),
      fontColor: getColorByToken('font'),
      primary: getColorByToken('primary-500'),
      secondary: getColorByToken('secondary-500'),
      success: getColorByToken('success'),
      info: getColorByToken('info'),
      warning: getColorByToken('warning'),
      error: getColorByToken('error'),
      disabled: getColorByToken('disabled'),
      font: getColorByToken('grey-darken4')
    },
    effect: {
      disabledOpacity: '77',
      hoverGhostOpacity: '26', // 0.15
      hoverSolidOpacity: 'e5', // 0.9
      focusOpacity: 0.12,
      selectedOpacity: 0.08,
      activatedOpacity: 0.12,
      pressedOpacity: 0.16,
      draggedOpacity: 0.08
    }
  },
  dark: {
    color: {
      background: '#333333',
      fontColor: getColorByToken('grey-lighten5'),
      primary: getColorByToken('primary-500'),
      secondary: getColorByToken('secondary-500'),
      success: getColorByToken('success'),
      info: getColorByToken('info'),
      warning: getColorByToken('warning'),
      error: getColorByToken('error'),
      disabled: getColorByToken('disabled'),
      font: getColorByToken('grey-lighten4')
    },
    effect: {
      disabledOpacity: '77',
      hoverGhostOpacity: '26', // 0.15
      hoverSolidOpacity: 'e5', // 0.9
      focusOpacity: 0.12,
      selectedOpacity: 0.08,
      activatedOpacity: 0.12,
      pressedOpacity: 0.16,
      draggedOpacity: 0.08
    }
  }
};
