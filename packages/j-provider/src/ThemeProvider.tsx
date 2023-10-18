/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import reset from './styles/reset';
import { ThemeContext } from './context';
import { preset } from './preset';
import type { Preset } from './types';

export const ThemeProvider = (props: { children: React.ReactNode; presetConfig?: Preset }) => {
  const { children } = props;
  <ThemeContext.Provider value={preset[preset.theme]}>
    <Global styles={reset} />
    {children}
  </ThemeContext.Provider>;
};
