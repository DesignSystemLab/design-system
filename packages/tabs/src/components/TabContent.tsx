/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { tabContentStyle } from '../styles';
import type { TabsContentProps } from '../types';
import TabsContext from '../context';
import { combineClassNames } from '@jdesignlab/utils';
import { createClassVariant } from '@jdesignlab/theme';

const Content = (props: TabsContentProps) => {
  const { children, value, ...otherProps } = props;
  const { selectedTab, variant, lazy } = useContext(TabsContext);
  const style = { ...tabContentStyle(variant, lazy) };

  return (
    <>
      {lazy ? (
        selectedTab === value && (
          <div
            className={combineClassNames(
              createClassVariant('tabs', 'content'),
              ` ${selectedTab === value ? 'tab_active' : ''}`
            )}
            role="tabpanel"
            aria-selected={true}
            css={style}
            {...otherProps}
          >
            {children}
          </div>
        )
      ) : (
        <div
          className={combineClassNames(
            createClassVariant('tabs', 'content'),
            ` ${selectedTab === value ? 'tab_active' : ''}`
          )}
          role="tabpanel"
          css={style}
          aria-selected={selectedTab === value}
          {...otherProps}
        >
          {children}
        </div>
      )}
    </>
  );
};

Content.displayName = 'Tab.Content';
export default Content;
