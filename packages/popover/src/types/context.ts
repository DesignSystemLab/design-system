import type { Dispatch, RefObject, SetStateAction } from 'react';
import type { PopoverProps } from './props';

export interface TriggerRef {
  triggerRef: RefObject<HTMLDivElement> | null;
  setTriggerRef: Dispatch<RefObject<HTMLDivElement>>;
}

export interface ReturnContext extends TriggerRef {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  popoverProps: Required<Omit<PopoverProps, 'children'>>;
}
