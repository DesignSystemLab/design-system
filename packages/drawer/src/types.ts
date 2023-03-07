import type { Dispatch, SetStateAction } from 'react';
export type Placement = 'top' | 'right' | 'bottom' | 'left';

export interface ReturnContext {
  init: boolean;
  isOpen: boolean | null;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  drawerProps: Omit<DrawerProps, 'children'>;
}

export interface DrawerCallback {
  onOpen?: () => void;
  onClose?: () => void;
}

export interface DrawerProps extends DrawerCallback {
  children?: React.ReactNode;
  isOpen: boolean;
  placement: Placement;
}

export type DrawerChildrenProps = {
  children?: React.ReactNode;
};
