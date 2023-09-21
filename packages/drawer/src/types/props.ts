import type { AriaAttributes, HTMLAttributes } from 'react';
import { Placement } from './base';

export interface DrawerContextProps {
  id: string;
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
  hasCloseIcon: boolean;
  disableOverlayClose: boolean;
  placement: Placement;
  full: boolean;
}

export interface DrawerPortalProps extends AriaAttributes, HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: number;
  height?: number;
}

export interface DrawerProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  hasCloseIcon?: boolean;
  disableOverlayClose?: boolean;
  placement?: Placement;
  full?: boolean;
}

export interface DrawerTriggerProps {
  children?: React.ReactNode;
}
