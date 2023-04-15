import { AriaAttributes, HTMLAttributes, CSSProperties } from 'react';
import type { CSSObject } from '@emotion/react';
import type { ColorToken } from '@jdesignlab/theme';

export interface ReturnContext {
  cardProps: CardProps;
  styleProps: StyleProps;
}

export type CardStyle = 'variant' | 'color' | 'align' | 'justify' | 'direction' | 'size';

export type StyleProps = Required<Pick<CardProps, CardStyle>>;

export type FlexToken = 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
export type FlexMap = Record<FlexToken, string>;
export type Variant = 'elevated' | 'outlined' | 'filled';
export type Size = 'sm' | 'md' | 'lg';
export type Direction = 'horizontal' | 'vertical';
export type AsElement = React.ElementType;
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
