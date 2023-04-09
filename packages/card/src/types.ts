import type { SerializedStyles } from '@emotion/react';
import type { ColorToken } from '@jdesignlab/theme';

export type StyleProps = Record<string, SerializedStyles[] | SerializedStyles | number>;
export type FlexToken = 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
export type FlexMap = Record<FlexToken, string>;
export type Variant = 'elevated' | 'outline' | 'filled';
export type Size = 'sm' | 'md' | 'lg';
export type Direction = 'horizontal' | 'vertical';
export type AsElement = React.ElementType;

export interface CardProps {
  as?: AsElement;
  children?: React.ReactNode;
  variant?: Variant;
  color?: ColorToken;
  align?: FlexToken;
  justify?: FlexToken;
  direction?: Direction;
  size?: Size;
  divider?: boolean;
}
