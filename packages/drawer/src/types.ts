import type { Dispatch, SetStateAction } from 'react';
export type Placement = 'top' | 'right' | 'bottom' | 'left';

export interface ReturnContext {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  drawerProps: Required<Omit<DrawerProps, 'children'>>;
}

export interface DrawerCallback {
  onOpen?: () => void;
  onClose?: () => void;
}

export interface DrawerProps extends DrawerCallback {
  children?: React.ReactNode;
  open?: boolean;
  placement?: Placement;
  full?: boolean;
}

export type DrawerChildrenProps = {
  children?: React.ReactNode;
  id?: string;
};
