/** @jsxImportSource @emotion/react */
import { ModalFooterProps } from '../types';
import { modalFooterStyle } from '../styles';

export const Footer = (props: ModalFooterProps) => {
  const { children } = props;

  return <div css={modalFooterStyle}>{children}</div>;
};

Footer.displayName = 'Modal.Footer';
