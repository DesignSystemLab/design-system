/** @jsxImportSource @emotion/react */
import { ModalHeaderProps } from '../types';
import { modalHeaderStyle } from '../styles';
import { Close } from '@jdesignlab/react-icons';
import { useContext } from 'react';
import { ModalContext } from '../context';

export const Header = (props: ModalHeaderProps) => {
  const { children } = props;
  const { hasCloseIcon, setOpen } = useContext(ModalContext);
  return (
    <div css={modalHeaderStyle}>
      {children}
      {hasCloseIcon && (
        <span
          className="header_icon"
          onClick={() => {
            setOpen(false);
          }}
        >
          <Close width={16} height={16} />
        </span>
      )}
    </div>
  );
};

Header.displayName = 'Modal.Header';
