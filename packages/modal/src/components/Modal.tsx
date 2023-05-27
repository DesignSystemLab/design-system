/** @jsxImportSource @emotion/react */
import { ModalProps } from '../types';
import { modalWrapperStyle, modalOverlayStyle } from '../styles';
import { ModalContext } from '../context';
import { useState, useEffect } from 'react';
import { Header } from './ModalHeader';
import { Body } from './ModalBody';
import { Footer } from './ModalFooter';
import { Trigger } from './ModalTrigger';
import { filterComponent, useInitialRender } from '@jdesignlab/react-utils';

export const Modal = (props: ModalProps) => {
  const {
    children,
    lazy,
    onOpen,
    onClose,
    hasCloseIcon = props.hasCloseIcon === undefined ? false : props.hasCloseIcon,
    open = false,
    ...otherProps
  } = props;
  const [isOpen, setOpen] = useState<boolean>(open);
  const isInitialRendered = useInitialRender();

  useEffect(() => {
    setOpen(open);
  }, [open]);

  useEffect(() => {
    if (isOpen && onOpen) {
      onOpen();
      return;
    }

    if (!isInitialRendered) {
      if (!isOpen && onClose) {
        onClose();
      }
      if (isOpen && onOpen) {
        onOpen();
      }
    }
  }, [isOpen]);

  const triggerChildren = filterComponent(children, Trigger, true);
  const providerValue = {
    open,
    isOpen,
    setOpen,
    hasCloseIcon,
    lazy
  };

  const onClickModalClose = () => {
    setOpen(false);
  };

  const ModalContent = () => {
    return (
      <>
        <div
          css={{ ...modalWrapperStyle(props.width) }}
          {...otherProps}
          className={`modal_content ${isOpen ? 'modal_open' : 'modal_close'}`}
          role="dialog"
        >
          {filterComponent(children, Trigger, false)}
        </div>
        <div role="presentation" css={modalOverlayStyle} onClick={onClickModalClose} className="modal_overlay"></div>
      </>
    );
  };

  return (
    <ModalContext.Provider value={providerValue}>
      {triggerChildren}
      {lazy ? isOpen && <ModalContent /> : <ModalContent />}
    </ModalContext.Provider>
  );
};

Modal.displayName = 'Modal';
Modal.Trigger = Trigger;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
