export interface ModalProps {
  children?: React.ReactElement | React.ReactElement[];
  open?: boolean;
  hasCloseIcon?: boolean;
  width?: number;
  lazy?: boolean;
}

export interface ModalTriggerProps {
  children?: React.ReactNode;
  open?: boolean;
  close?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export interface ModalHeaderProps {
  children?: React.ReactNode;
}

export interface ModalBodyProps {
  children?: React.ReactNode;
}

export interface ModalFooterProps {
  children?: React.ReactNode;
}
