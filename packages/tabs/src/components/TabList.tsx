/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { useTabsListStyles } from '../hooks/useTabsStyles';
import type { TabsListProps } from '../types';
import TabsContext from '../context';

const List = (props: TabsListProps) => {
  const { children, ...otherProps } = props;
  const { variant, size } = useContext(TabsContext);

  const full = props?.full === true ? true : false;
  const style = { ...useTabsListStyles(full, variant, size) };
  return (
    <div css={style} {...otherProps}>
      {children}
    </div>
  );
};

export default List;
