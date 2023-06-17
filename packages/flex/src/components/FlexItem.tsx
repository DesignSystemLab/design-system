/** @jsxImportSource @emotion/react */
import { createClassVariant } from '@jdesignlab/theme';
import { itemStyle } from '../styles';
import type { FlexItemProps } from '../types';

export const FlexItem = (props: FlexItemProps) => {
  const { children, as = 'div', style, flex, self, order, ...otherProps } = props;
  const FlexItemComponent = as;

  return (
    <FlexItemComponent
      className={createClassVariant('flex', 'item')}
      css={[style, itemStyle(flex, self, order)]}
      {...otherProps}
    >
      {children}
    </FlexItemComponent>
  );
};
