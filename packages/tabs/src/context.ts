import type { TabVariant, TabSize } from './types';
import { createContext } from 'react';
import { ColorToken } from '@jdesignlab/theme';

const TabsContext = createContext({
  defaultValue: '',
  selectedTab: '',
  setSelectedTab: (value: string) => {},
  variant: 'underline' as TabVariant,
  size: 'md' as TabSize,
  lazy: false,
  full: false,
  baseColor: 'primary-100' as ColorToken,
  accentColor: 'primary-600' as ColorToken
});

export default TabsContext;
