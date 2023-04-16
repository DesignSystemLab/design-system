import { CSSObject } from '@emotion/react';
import type { ColorToken } from '@jdesignlab/theme';

export type TooltipAnchor = 'top-left' | 'top' | 'top-right' | 'right' | 'right-top' | 'right-bottom' | 'left' | 'left-top' | 'left-bottom' | 'bottom-right' | 'bottom' | 'bottom-left';

export interface TooltipProps extends CSSObject {
  [propertiesName: string]: any;
  children: React.ReactElement[]; // []?
  gap?: number | string;
}

export interface TooltipLabelProps extends CSSObject {
  children: string;
  on?: TooltipAnchor;
  background?: ColorToken;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: ColorToken;

  disabled?: boolean;
  isOpen?: boolean;

  style?: CSSObject;
}

export interface TooltipTargetPrpos {
  children: React.ReactElement;
  setIsHovering: any;
}
