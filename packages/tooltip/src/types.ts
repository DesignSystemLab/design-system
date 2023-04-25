import { CSSObject } from '@emotion/react';

export type TooltipAnchor =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'right-top'
  | 'right-bottom'
  | 'left'
  | 'left-top'
  | 'left-bottom'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left';

export interface TooltipProps extends CSSObject {
  [propertiesName: string]: any;
  children?: React.ReactNode;
  placement?: TooltipAnchor;
  gap?: number | string;
}

export interface TooltipContentProps extends CSSObject {
  children?: string;
  style?: CSSObject;
}

export interface TooltipTargetPrpos {
  children?: React.ReactNode;
}
