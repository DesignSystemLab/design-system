import type { TabVariant, TabSize } from './types';
import { createContext } from 'react';

const TabsContext = createContext({
  defaultValue: '',
  selectedTab: '',
  setSelectedTab: (value: string) => {},
  variant: 'underline' as TabVariant,
  size: 'md' as TabSize,
  lazy: false,
  full: false
});

export default TabsContext;
