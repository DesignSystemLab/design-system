import { filterComponent } from '@jdesignlab/react-utils';
import { ModalContext } from '../context';
import { useToggleLayer } from '../hooks/useToggleLayer';
import { ModalProps } from '../types';
import { ModalPortal } from './ModalPortal';
import { ModalTrigger } from './ModalTrigger';

export const Modal = (props: ModalProps) => {
  const {
    children,
    open: openProp,
    onOpen: onOpenProp,
    onClose: onCloseProp,
    hasCloseIcon = true,
    disableOverlayClose = false
  } = props;
  const { isOpen, onOpen, onClose } = useToggleLayer(openProp, onOpenProp, onCloseProp);

  const providerValue = {
    isOpen,
    onOpen,
    onClose,
    hasCloseIcon,
    disableOverlayClose
  };

  const triggerComponent = filterComponent(children, ModalTrigger, true);
  const portalComponent = filterComponent(children, ModalPortal, true);

  return (
    <ModalContext.Provider value={providerValue}>
      {triggerComponent}
      {isOpen && portalComponent}
    </ModalContext.Provider>
  );
};

Modal.Trigger = ModalTrigger;
Modal.Portal = ModalPortal;
