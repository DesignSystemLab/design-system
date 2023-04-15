import type { SerializedStyles } from '@emotion/react';
import type { Dispatch, SetStateAction } from 'react';

export type StyleProps = Record<string, SerializedStyles[] | SerializedStyles | number>;
export type Placement = 'top' | 'right' | 'bottom' | 'left';
export type PopoverTrigger = Record<'width' | 'height', number>;

export interface ReturnContext {
  style: StyleProps;
  setTriggerWidth: Dispatch<SetStateAction<number>>;
  triggerWidth: number;
}
export interface PopoverProps {
  children: React.ReactNode;
  placement?: Placement;
  noneArrow?: boolean;
  closeOnEsc?: boolean;
}
