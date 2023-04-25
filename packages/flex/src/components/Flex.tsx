/** @jsxImportSource @emotion/react */
import React from 'react';
import { containerStyle, itemStyle } from '../styles';
import type { FlexItemProps, FlexContainerProps } from '../types';
import { FlexItem } from './FlexItem';

export const Flex = (props: FlexContainerProps) => {
  const { children, style, ...otherProps } = props;

  return (
    <div role="list" css={{ ...containerStyle(props), ...style }} {...otherProps}>
      {children?.map((child: React.ReactElement, index: number) => {
        return <FlexItem child={child} key={index} />;
      })}
    </div>
  );
};
Flex.Item = FlexItem;
Flex.displayName = 'Flex';
