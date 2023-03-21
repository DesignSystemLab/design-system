/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { useTabsTriggerStyles } from '../hooks/useTabsStyles';
import type { TabsTriggerProps } from '../types';
import TabsContext from '../context';

const Trigger = (props: TabsTriggerProps) => {
  const { children, value, ...otherProps } = props;
  let { disabled } = props;
  const { selectedTab, setSelectedTab, variant, size } = useContext(TabsContext);

  const onClickTab = () => {
    if (!disabled) {
      setSelectedTab(value);
    }
  };

  const isActivated = selectedTab === value ? true : false;
  const style = { ...useTabsTriggerStyles(isActivated, variant, size, disabled) };

  return (
    <div className="tab" css={style} onClick={onClickTab} {...otherProps}>
      {children}
    </div>
  );
};
export default Trigger;
