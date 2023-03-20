import type { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps, TabVariant, TabSize } from './types';
import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const TabsContext = createContext({
  selectedTab: '',
  setSelectedTab: (value: string) => {},
  variant: 'underline' as TabVariant,
  size: 'md' as TabSize
});

export default TabsContext;
