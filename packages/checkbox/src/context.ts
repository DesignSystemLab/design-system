import { createContext } from 'react';
import type { CheckboxValue } from './types';
export const CheckboxGroupContext = createContext({
  checkedValues: undefined as CheckboxValue
});
