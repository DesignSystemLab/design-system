/** @jsxImportSource @emotion/react */
import { modalWrapperStyle, modalOverlayStyle, modalHeaderStyle, modalBodyStyle, modalFooterStyle } from './modal-style';
import type { ModalProps, ModalHeaderProps, ModalBodyProps, ModalFooterProps } from './modal-types';
import { Close } from '@jdesignlab/react-icons';
import React, { useContext, useState, useEffect } from 'react';

const ModalContext = React.createContext({
  open: false,
  setOpen: (value: boolean) => {},
  hasCloseIcon: true
});

const ChildrenComponent = (props: any) => {
  const { children } = props;
  if (children) {
    if (Array.isArray(children)) return children.map(child => child);
    else return children;
  } else {
    return <></>;
  }
};

export const Modal = (props: ModalProps) => {
  const { children, ...otherProps } = props;
  const [open, setOpen] = useState<boolean>(false);
  let hasCloseIcon = props.hasCloseIcon;
  if (hasCloseIcon === undefined) hasCloseIcon = false;

  useEffect(() => {
    if (props.open === undefined) props.open = false;
    setOpen(props.open);
  }, [props.open]);

  return (
    <ModalContext.Provider value={{ open, setOpen, hasCloseIcon: hasCloseIcon }}>
      {open && (
        <>
          <div css={modalOverlayStyle}></div>
          <div css={{ ...modalWrapperStyle(props.width) }}>
            <ChildrenComponent children={children} />
          </div>
        </>
      )}
    </ModalContext.Provider>
  );
};

const Header = (props: ModalHeaderProps) => {
  const { children } = props;
  const { hasCloseIcon, setOpen } = useContext(ModalContext);
  return (
    <div css={modalHeaderStyle}>
      <ChildrenComponent children={children} />
      {hasCloseIcon && (
        <span
          className="header_icon"
          onClick={() => {
            // TODO
            setOpen(false);
          }}
        >
          <Close width="12" height="12" />
        </span>
      )}
    </div>
  );
};

const Body = (props: ModalBodyProps) => {
  const { children } = props;
  return (
    <div css={modalBodyStyle}>
      <ChildrenComponent children={children} />
    </div>
  );
};

const Footer = (props: ModalFooterProps) => {
  const { children } = props;

  return (
    <div css={modalFooterStyle}>
      <ChildrenComponent children={children} />
    </div>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
