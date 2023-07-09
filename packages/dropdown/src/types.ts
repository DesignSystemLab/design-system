import type { ColorToken } from '@jdesignlab/theme';

export type DropdownAnchor = 'top' | 'right' | 'bottom' | 'left';

export interface DropdownProps {
  children?: React.ReactNode;
  width?: number;
  placement?: DropdownAnchor;
  gap?: number | string;
}

export interface DropdownTriggerProps {
  children?: React.ReactNode;
}

export interface DropdownMenuProps {
  children?: React.ReactNode;
}

export interface DropdownMenuItemProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  hasSub?: boolean;
}

export interface DropdownSubMenuProps {
  children?: React.ReactNode;
}

export interface DropdownSubMenuItemProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}
