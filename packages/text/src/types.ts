import type { ElementType } from 'react';
import type { ColorToken } from '@jdesignlab/theme';
import type { CSSProperties } from 'react';
import type { CSSObject } from '@emotion/react';

type Heading = 'heading';
type Label = 'label';
type Paragraph = 'paragraph';

export type AsElement = ElementType;
export type ElementToken = `${Heading}-${FontSize}` | Label | Paragraph;
export type ElementMap = Record<ElementToken, AsElement>;
export type ExternalStyle = CSSObject & CSSProperties;

export type FontAlign = 'start' | 'end' | 'center' | 'justify';
export type FontDecoration = 'none' | 'underline' | 'line-through' | 'overline';
export type FontTransformToken = 'none' | 'capitalize' | 'uppercase' | 'lowercase';
export type FontStyleToken = 'normal' | 'italic' | 'oblique';

export type LineHeightToken = '1.4' | '1.5' | '1.6';
export type LineHeightMapType = Record<Variant, LineHeightToken>;

export type FontSizeToken = '12' | '16' | '21' | '28' | '38';
export type FontSizeMap = Record<FontSize, FontSizeToken>;

export type Variant = Paragraph | Label | Heading;
export type FontSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface TextProps {
  children: React.ReactNode;
  variant?: Variant;
  color?: ColorToken;
  size?: FontSize;
  align?: FontAlign;
  decoration: FontDecoration;
  fontStyle?: FontStyleToken;
  transform?: FontTransformToken;
  truncate?: boolean;
  as?: ElementType;
  style?: ExternalStyle;
}

const a: CSSProperties = {
  textTransform: 'lowercase'
};
