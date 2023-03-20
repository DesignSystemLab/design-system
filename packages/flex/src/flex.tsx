/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { containerStyle, itemStyle } from './flex-styles';
import type { FlexItemProps, FlexContainerProps } from './flex-types';
import React from 'react';

const FlexItem = ({ child }: FlexItemProps) => {
  return (
    <>
      {child?.type && (
        <child.type {...child.props} css={{ ...itemStyle(child.props), ...child.props.style }}>
          {child.props.children}
        </child.type>
      )}
    </>
  );
};

const Flex = (props: FlexContainerProps) => {
  const { children, style } = props;

  return (
    <div css={{ ...containerStyle(props), ...style }}>
      {children?.map((child: React.ReactElement, index: number) => {
        return <FlexItem child={child} key={index} />;
      })}
    </div>
  );
};

Flex.displayName = 'Flex';
export default Flex;
