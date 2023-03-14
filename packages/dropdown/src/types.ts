import type { ColorToken } from '@jdesignlab/theme';

// export type DropdownAnchor = 'top' | 'right' | 'bottom' | 'left'

export interface DropdownProps {
  children: React.ReactNode;
  mode?: 'click' | 'hover';
  on?: string;
  gap?: number | string;
}

export interface DropdownTriggerProps {
  children: React.ReactNode;
}

export interface DropdownMenuProps {
  children: React.ReactNode;
}

export interface DropdownMenuItemProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  sub?: boolean;
}

export interface DropdownSubMenuProps {
  children: React.ReactNode;
}

export interface DropdownSubMenuItemProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
