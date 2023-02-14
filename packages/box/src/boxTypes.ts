import type { CSSObject } from '@emotion/react';
import type { ColorToken } from '@jdesignlab/theme';

export interface BoxProps extends CSSObject {
    [propertiesName: string]: any;
    backgroundColor?: ColorToken;
    center?: boolean;
    color?: ColorToken;
    children?: React.ReactNode;
}
