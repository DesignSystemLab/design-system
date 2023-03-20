/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useRef } from 'react';
import useTabChangeHandle from './hooks/useTabChangeHandle';
import type { TabsProps } from './types';
import TabsContext from './context';
import List from './components/TabList';
import Trigger from './components/TabTrigger';
import Content from './components/TabContent';

// default가 없으면 첫번째 Trigger의 value로 자동 설정해주고 싶은데 어떻게?

export const Tabs = (props: TabsProps) => {
  const tabRootRef = useRef<HTMLDivElement>(null);
  const { children, defaultValue, onChange, variant, size } = props;
  const [selectedTab, setSelectedTab] = useState<string>(defaultValue);
  const [hasTouched, setHasTouched] = useState<boolean>(false);

  useTabChangeHandle({
    selectedTab,
    hasTouched,
    setHasTouched,
    onChange
  });

  const contextValue = {
    selectedTab,
    setSelectedTab,
    variant: props.variant || 'underline',
    size: props.size || 'md'
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div ref={tabRootRef}>{children}</div>
    </TabsContext.Provider>
  );
};

// export const List = (props: TabsListProps) => {
//   const { children, ...otherProps } = props;
//   const { variant, size } = useContext(TabsContext);

//   const full = props?.full === true ? true : false;
//   const style = { ...useTabsListStyles(full, variant, size) };
//   return (
//     <div css={style} {...otherProps}>
//       {children}
//     </div>
//   );
// };

// export const Trigger = (props: TabsTriggerProps) => {
//   const { children, value, ...otherProps } = props;
//   let { disabled } = props;
//   const { selectedTab, setSelectedTab, variant, size } = useContext(TabsContext);

//   const onClickTab = () => {
//     if (!disabled) {
//       setSelectedTab(value);
//     }
//   };

//   const isActivated = selectedTab === value ? true : false;
//   const style = { ...useTabsTriggerStyles(isActivated, variant, size, disabled) };

//   return (
//     <div className="tab" css={style} onClick={onClickTab} {...otherProps}>
//       {children}
//     </div>
//   );
// };

// export const Content = (props: TabsContentProps) => {
//   const { children, value, ...otherProps } = props;
//   const { selectedTab, variant } = useContext(TabsContext);
//   const style = { ...useTabsContentStyles(variant) };
//   return (
//     <>
//       {selectedTab === value && (
//         <div className="content" css={style} {...otherProps}>
//           {children}
//         </div>
//       )}
//     </>
//   );
// };

Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Content = Content;
