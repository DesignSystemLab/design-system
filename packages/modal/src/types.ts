export interface ModalProps {
  children: React.ReactNode;
  hasCloseIcon?: boolean;
  open?: boolean;
  onClose?(): void;
  onOpen?(): void;
  disableOverlayClose?: boolean;
}

export interface ModalTriggerProps {
  children: React.ReactNode;
}

export interface ModalPortalProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
}
