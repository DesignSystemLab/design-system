import type { Placement } from './base';

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
