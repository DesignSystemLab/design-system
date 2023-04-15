import { preset } from './preset';
import { createContext } from 'react';
export const themePreset = preset[preset.theme];
export const ThemeContext = createContext(themePreset);
