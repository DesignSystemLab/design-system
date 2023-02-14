import type { SpacingType } from '@jdesignlab/theme';
import type { CSSObject } from '@emotion/react';

export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type Justify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type Align = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
export type Content = 'stretch' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
export type Self = 'auto' | 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';

export interface FlexContainerProps extends CSSProperties {
    children?: React.ReactNode[];
    style?: CSSProperties;
    width?: number;
    height?: number;
    direction?: Direction;
    wrap?: Wrap;
    justify?: Justify;
    items?: Align;
    content?: Content;
    gap?: number | string;
}

export interface FlexItemProps extends CSSProperties {
    children?: React.ReactNode;
    style?: CSSProperties;
    flex: number;
    self: Self;
    order: number;
}
