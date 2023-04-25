/** @jsxImportSource @emotion/react */
import { containerStyle, itemStyle } from '../styles';
import type { FlexItemProps, FlexContainerProps } from '../types';
import React from 'react';

export const Flex = (props: FlexContainerProps) => {
  const { children, style } = props;
  const FlexItem = ({ child }: FlexItemProps) => {
    const { children, style } = child?.props;
    return (
      <>
        {child && (
          <child.type {...child.props} css={{ ...itemStyle(child.props), ...style }}>
            {children}
          </child.type>
        )}
      </>
    );
  };

  return (
    <div css={{ ...containerStyle(props), ...style }}>
      {children?.map((child: React.ReactElement, index: number) => {
        return <FlexItem child={child} key={index} />;
      })}
    </div>
  );
};

Flex.displayName = 'Flex';
