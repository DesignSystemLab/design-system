/** @jsxImportSource @emotion/react */
import React from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import { containerStyle } from '../styles';
import type { FlexContainerProps } from '../types';
import { FlexItem } from './FlexItem';

export const Flex = (props: FlexContainerProps) => {
  const { children, style, ...otherProps } = props;

  return (
    <div css={{ ...containerStyle(props), ...style }} {...otherProps} className={createClassVariant('flex', 'wrapper')}>
      {children?.map((child: React.ReactElement, index: number) => {
        return <FlexItem child={child} key={index} />;
      })}
    </div>
  );
};
Flex.Item = FlexItem;
Flex.displayName = 'Flex';
