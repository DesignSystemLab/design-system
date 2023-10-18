import { createContext } from 'react';
import { preset } from './preset';

export const themePreset = preset[preset.theme];
export const ThemeContext = createContext(themePreset);
