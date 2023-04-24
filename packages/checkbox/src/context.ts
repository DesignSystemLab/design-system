import { createContext } from 'react';
import type { CheckboxValue } from './types';
export const CheckboxGroupContext = createContext({
  defaultValues: undefined as CheckboxValue
});
