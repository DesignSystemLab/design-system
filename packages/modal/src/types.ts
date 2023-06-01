export interface ModalProps {
  children?: React.ReactElement | React.ReactElement[];
  onOpen?: () => void;
  onClose?: () => void;
  open?: boolean;
  hasCloseIcon?: boolean;
  width?: number;
  lazy?: boolean;
}

export interface ModalTriggerProps {
  children?: React.ReactNode;
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
