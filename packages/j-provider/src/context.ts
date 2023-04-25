import { preset } from './preset';
import { createContext } from 'react';
import type { Preset } from './types';

export const themePreset = preset[preset.theme];
export const ThemeContext = createContext(themePreset);
