/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import { ThemeContext } from './context';
import { preset } from './preset';
import reset from './styles/reset';

export const ThemeProvider = (props: { children: React.ReactNode; presetConfig?: any }) => {
  return (
    <ThemeContext.Provider value={preset[preset.theme]}>
      <Global styles={reset} />
      {props.children}
    </ThemeContext.Provider>
  );
};
