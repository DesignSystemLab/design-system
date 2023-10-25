import { Dispatch, SetStateAction } from 'react';
import { DropdownAnchor } from './base';

export interface DropdownContextProps {
  width: number;
  placement: DropdownAnchor;
  triggerWidth: number;
  setTriggerWidth: Dispatch<SetStateAction<number>>;
  triggerHeight: number;
  setTriggerHeight: Dispatch<SetStateAction<number>>;
  gap: number;
}

export interface DropdownSubContextProps {
  subOpen: boolean;
  setSubOpen: Dispatch<SetStateAction<boolean>>;
}
