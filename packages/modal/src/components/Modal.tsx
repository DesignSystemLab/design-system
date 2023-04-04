/** @jsxImportSource @emotion/react */
import { ModalProps } from '../types';
import { modalWrapperStyle, modalOverlayStyle } from '../styles';
import { ModalContext } from '../context';
import { useState, useEffect } from 'react';
import { Header } from './ModalHeader';
import { Body } from './ModalBody';
import { Footer } from './ModalFooter';
import { Trigger } from './ModalTrigger';
import { filterComponent } from '@jdesignlab/react-utils';

export const Modal = (props: ModalProps) => {
  const {
    children,
    lazy,
    hasCloseIcon = props.hasCloseIcon === undefined ? false : props.hasCloseIcon,
    ...otherProps
  } = props;
  const [open, setOpen] = useState<boolean>(false);
  const triggerChildren = filterComponent(children, Trigger, true);

  const providerValue = {
    open,
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
          className={`modal_content ${open ? 'modal_open' : 'modal_close'}`}
        >
          {filterComponent(children, Trigger, false)}
        </div>
        <div css={modalOverlayStyle} onClick={onClickModalClose} className="modal_overlay"></div>
      </>
    );
  };

  return (
    <ModalContext.Provider value={providerValue}>
      <>
        {triggerChildren}
        {lazy ? open && <ModalContent /> : <ModalContent />}
      </>
    </ModalContext.Provider>
  );
};

Modal.displayName = 'Modal';

Modal.Trigger = Trigger;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
