/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { tabContentStyle } from '../styles';
import type { TabsContentProps } from '../types';
import TabsContext from '../context';

const Content = (props: TabsContentProps) => {
  const { children, value, ...otherProps } = props;
  const { selectedTab, variant, lazy } = useContext(TabsContext);
  const style = { ...tabContentStyle(variant, lazy) };

  return (
    <>
      {lazy ? (
        selectedTab === value && (
          <div role="tabpanel" aria-selected={true} css={style} {...otherProps}>
            {children}
          </div>
        )
      ) : (
        <div className={` ${selectedTab === value ? 'tab_active' : ''}`} role="tabpanel" css={style} {...otherProps}>
          {children}
        </div>
      )}
    </>
  );
};

Content.displayName = 'Tab.Content';
export default Content;
