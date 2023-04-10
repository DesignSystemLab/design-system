import { getColorByToken } from '@jdesignlab/theme';

export const preset = {
  theme: 'light',
  light: {
    color: {
      background: '#ffffff',
      fontColor: '#000000',
      primary: getColorByToken('secondary-500'),
      secondary: getColorByToken('primary-500'),
      success: getColorByToken('success'),
      info: getColorByToken('info'),
      warning: getColorByToken('warning'),
      error: getColorByToken('error'),
      disabled: getColorByToken('disabled')
    },
    effect: {
      disabledOpacity: 0.38,
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
      primary: '#4695E5',
      secondary: '#F5A402',
      success: getColorByToken('success'),
      info: getColorByToken('info'),
      warning: getColorByToken('warning'),
      error: getColorByToken('error'),
      disabled: getColorByToken('disabled')
    },
    effect: {
      disabledOpacity: 0.38,
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
