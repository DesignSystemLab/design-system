/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { containerStyle, itemStyle } from './flex-styles';
import type { FlexItemProps, FlexContainerProps } from './flex-types';
import React from 'react';

const FlexItem = ({ child }: React.ReactNode) => {
    const {
        type,
        props: { style, children }
    } = child;

    return (
        <child.type {...child.props} css={{ ...itemStyle(child.props), ...style }}>
            {children}
        </child.type>
    );
};

const Flex = (props: FlexContainerProps) => {
    const { children, style } = props;

    return (
        <div css={{ ...containerStyle(props), ...style }}>
            {children?.map((child: React.ReactNode, index: number) => {
                return <FlexItem child={child} />;
            })}
        </div>
    );
};

Flex.displayName = 'Flex';
export default Flex;
