/** @jsxImportSource @emotion/react */
import { useState, useRef, useEffect } from 'react';
import useTabChangeHandle from '../hooks/useTabChangeHandle';
import type { TabsProps } from '../types';
import TabsContext from '../context';
import List from './TabList';
import Trigger from './TabTrigger';
import Content from './TabContent';

export const Tabs = (props: TabsProps) => {
  const { children, defaultValue, onChange, ...rest } = props;
  const [selectedTab, setSelectedTab] = useState<string>(defaultValue || '');
  const [hasTouched, setHasTouched] = useState<boolean>(false);

  useTabChangeHandle({
    onChange,
    hasTouched,
    selectedTab,
    setHasTouched
  });

  const contextValue = {
    defaultValue: defaultValue || '',
    selectedTab,
    setSelectedTab,
    variant: props.variant || 'underline',
    size: props.size || 'md',
    lazy: !!props.lazy,
    full: !!props.full
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div {...rest}>{children}</div>
    </TabsContext.Provider>
  );
};

Tabs.displayName = 'Tabs';

Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Content = Content;
