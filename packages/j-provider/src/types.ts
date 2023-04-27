import type { HEX } from '@jdesignlab/theme';
export interface ThemePreset {
  color: {
    background: HEX;
    fontColor: HEX;
    primary: HEX;
    secondary: HEX;
    success: HEX;
    info: HEX;
    warning: HEX;
    error: HEX;
    disabled: HEX;
  };
  effect: {
    disabledOpacity: string | number;
    hoverGhostOpacity: string | number;
    hoverSolidOpacity: string | number;
    focusOpacity: string | number;
    selectedOpacity: string | number;
    activatedOpacity: string | number;
    pressedOpacity: string | number;
    draggedOpacity: string | number;
  };
}
export interface Preset {
  theme: 'light' | 'dark';
  light: ThemePreset;
  dark: ThemePreset;
}
