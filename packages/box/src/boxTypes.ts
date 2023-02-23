import type { CSSObject } from '@emotion/react';
import type { ColorToken } from '@jdesignlab/theme';

export type AsElement = React.ElementType;
export interface BoxProps extends CSSObject {
    as?: AsElement;
    backgroundColor?: ColorToken;
    color?: ColorToken;
    children?: React.ReactNode;
}
