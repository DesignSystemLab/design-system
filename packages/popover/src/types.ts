import type { Dispatch, RefObject, SetStateAction } from 'react';
import type { SerializedStyles } from '@emotion/react';

export type StyleProps = Record<string, SerializedStyles[] | SerializedStyles | number>;
export type Placement = 'top' | 'right' | 'bottom' | 'left';
export type PopoverTrigger = Record<'width' | 'height', number>;

export interface TriggerRef {
  triggerRef: RefObject<HTMLDivElement> | null;
  setTriggerRef: Dispatch<RefObject<HTMLDivElement>>;
}

export interface ReturnContext extends TriggerRef {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  popoverProps: Required<Omit<PopoverProps, 'children'>>;
}

export interface PopoverHandler {
  onOpen?: () => void;
  onClose?: () => void;
}

export interface PopoverProps extends PopoverHandler {
  children?: React.ReactNode;
  placement?: Placement;
  arrow?: boolean;
  open?: boolean;
}
