/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { useTabsContentStyles } from '../hooks/useTabsStyles';
import type { TabsContentProps } from '../types';
import TabsContext from '../context';

const Content = (props: TabsContentProps) => {
  const { children, value, ...otherProps } = props;
  const { selectedTab, variant } = useContext(TabsContext);
  const style = { ...useTabsContentStyles(variant) };
  return (
    <>
      {selectedTab === value && (
        <div className="content" css={style} {...otherProps}>
          {children}
        </div>
      )}
    </>
  );
};

export default Content;
