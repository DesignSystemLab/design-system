import type { CSSProperties, HTMLAttributes } from 'react';
import type { CSSObject } from '@emotion/react';
import type { ColorToken } from '@jdesignlab/theme';

export type AsElement = React.ElementType;
export type ExternalStyle = CSSObject & CSSProperties;

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  as?: AsElement;
  backgroundColor?: ColorToken;
  color?: ColorToken;
  style?: ExternalStyle;
}
