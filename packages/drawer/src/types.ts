export type Placement = 'top' | 'right' | 'bottom' | 'left';

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
  onClick?: () => void;
}
