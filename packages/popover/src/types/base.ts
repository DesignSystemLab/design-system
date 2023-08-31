import type { SerializedStyles } from '@emotion/react';

export type StyleProps = Record<string, SerializedStyles[] | SerializedStyles | number>;
export type Placement = 'top' | 'right' | 'bottom' | 'left';
export type PopoverTrigger = Record<'width' | 'height', number>;
