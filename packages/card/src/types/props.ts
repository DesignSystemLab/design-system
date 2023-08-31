import { AriaAttributes, HTMLAttributes, CSSProperties } from 'react';
import { FlexToken, Variant, Direction, Size, AsElement } from './base';
import type { CSSObject } from '@emotion/react';
import type { ColorToken } from '@jdesignlab/theme';

export type ExternalStyle = CSSObject & CSSProperties;

export interface CardProps extends AriaAttributes, HTMLAttributes<HTMLElement> {
  as?: AsElement;
  children?: React.ReactNode;
  variant?: Variant;
  color?: ColorToken;
  align?: FlexToken;
  justify?: FlexToken;
  direction?: Direction;
  size?: Size;
  style?: ExternalStyle;
}

export interface CardHeaderProps extends AriaAttributes, HTMLAttributes<HTMLElement> {
  as?: AsElement;
  children?: React.ReactNode;
  style?: ExternalStyle;
}

export interface CardBodyProps extends AriaAttributes, HTMLAttributes<HTMLElement> {
  as?: AsElement;
  children?: React.ReactNode;
  style?: ExternalStyle;
}

export interface CardFooterProps extends AriaAttributes, HTMLAttributes<HTMLElement> {
  as?: AsElement;
  children?: React.ReactNode;
  style?: ExternalStyle;
}
