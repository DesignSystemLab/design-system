/** @jsxImportSource @emotion/react */
import { useContext, useEffect } from 'react';
import { getChildrenValidValues } from '@jdesignlab/react-utils';
import { tabListStyle } from '../styles';
import type { TabsListProps } from '../types';
import TabsContext from '../context';
import { createClassVariant } from '@jdesignlab/theme';

const List = (props: TabsListProps) => {
  const { children, ...otherProps } = props;
  const { defaultValue, setSelectedTab, variant, size, full, baseColor } = useContext(TabsContext);
  const style = { ...tabListStyle(baseColor, full, variant, size) };

  useEffect(() => {
    if (!defaultValue) {
      const validValues = getChildrenValidValues(children as React.ReactElement | React.ReactElement[], 'Trigger');
      const obj: { [key: number]: string } = {};
      validValues.forEach((value, index) => {
        obj[index] = value;
      });
      setSelectedTab(obj[0]);
    }
  }, []);

  return (
    <div css={style} role="tablist" className={createClassVariant('tabs', 'ul')} {...otherProps}>
      {children}
    </div>
  );
};

List.displayName = 'Tab.List';
export default List;
