/** @jsxImportSource @emotion/react */
import { useContext, useRef } from 'react';
import { tabTriggerStyle } from '../styles';
import { useSelectKeyDown } from '../hooks/useSelectKeyDown';
import type { TabsTriggerProps } from '../types';
import TabsContext from '../context';
import type { Dispatch, SetStateAction } from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import { combineClassNames } from '@jdesignlab/utils';

const Trigger = (props: TabsTriggerProps) => {
  const triggerRef = useRef(null);
  const { children, value, disabled, ...otherProps } = props;
  const { selectedTab, setSelectedTab, variant, size, baseColor, accentColor } = useContext(TabsContext);

  const onClickTab = () => {
    if (!disabled) {
      setSelectedTab(value);
    }
  };

  const isActivated = selectedTab === value ? true : false;
  const style = { ...tabTriggerStyle(isActivated, variant, size, baseColor, accentColor, disabled) };

  return (
    <div
      ref={triggerRef}
      onKeyDown={e => {
        useSelectKeyDown(e, value, setSelectedTab as Dispatch<SetStateAction<string>>);
      }}
      className={combineClassNames(createClassVariant('tabs', 'trigger'), 'tab')}
      tabIndex={!disabled ? 0 : -1}
      role="tab"
      aria-disabled={!!disabled}
      css={style}
      onClick={onClickTab}
      {...otherProps}
    >
      {children}
    </div>
  );
};
Trigger.displayName = 'Tab.Trigger';
export default Trigger;
