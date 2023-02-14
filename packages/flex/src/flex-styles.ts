import { css } from '@emotion/react';
import type { FlexItemProps, FlexContainerProps } from './flex-types';

export const containerStyle = (props: FlexContainerProps) => {
    return css({
        ...props.style,
        display: 'flex',
        flexDirection: props.direction || 'row',
        flexWrap: props.wrap || 'nowrap',
        justifyContent: props.justify,
        alignItems: props.items,
        alignContent: props.content,
        gap: props.gap
    });
};

export const itemStyle = (props: FlexItemProps) => {
    return css({
        flexGrow: props.flex,
        alignSelf: props.self,
        order: props.order
    });
};
