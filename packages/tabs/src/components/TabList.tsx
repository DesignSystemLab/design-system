/** @jsxImportSource @emotion/react */
import { useContext, useEffect } from 'react';
import { getChildrenValidValues } from '@jdesignlab/react-utils';
import { tabListStyle } from '../styles';
import type { TabsListProps } from '../types';
import TabsContext from '../context';

const List = (props: TabsListProps) => {
  const { children, ...otherProps } = props;
  const { defaultValue, setSelectedTab, variant, size, full } = useContext(TabsContext);
  const style = { ...tabListStyle(full, variant, size) };

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
    <div css={style} role="tablist" {...otherProps}>
      {children}
    </div>
  );
};

List.displayName = 'Tab.List';
export default List;
