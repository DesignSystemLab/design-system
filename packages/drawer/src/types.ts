import type { Dispatch, SetStateAction } from 'react';
export type Placement = 'top' | 'right' | 'bottom' | 'left';

export interface ReturnContext {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  drawerProps: Omit<DrawerProps, 'children'>;
}

export interface DrawerCallback {
  onOpen?: () => void;
  onClose?: () => void;
}

export interface DrawerProps extends DrawerCallback {
  children?: React.ReactNode;
  open: boolean;
  placement: Placement;
}

export type DrawerChildrenProps = {
  children?: React.ReactNode;
};
