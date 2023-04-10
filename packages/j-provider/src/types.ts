import type { HEX } from '@jdesignlab/theme';
export interface Preset {
  theme: 'light' | 'dark';
  light: {
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
      disabledOpacity: number;
      hoverGhostOpacity: string;
      hoverSolidOpacity: string;
      focusOpacity: number;
      selectedOpacity: number;
      activatedOpacity: number;
      pressedOpacity: number;
      draggedOpacity: number;
    };
  };
  dark: {
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
      disabledOpacity: number;
      hoverGhostOpacity: string;
      hoverSolidOpacity: string;
      focusOpacity: number;
      selectedOpacity: number;
      activatedOpacity: number;
      pressedOpacity: number;
      draggedOpacity: number;
    };
  };
}
