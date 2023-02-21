export interface ModalProps {
  children?: React.ReactElement | React.ReactElement[];
  open?: boolean;
  hasCloseIcon?: boolean;
  width?: number | undefined;
}

export interface ModalHeaderProps {
  children?: React.ReactElement | React.ReactElement[];
}

export interface ModalBodyProps {
  children?: React.ReactElement | React.ReactElement[];
}

export interface ModalFooterProps {
  children?: React.ReactElement | React.ReactElement[];
}
