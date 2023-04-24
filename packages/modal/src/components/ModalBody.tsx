/** @jsxImportSource @emotion/react */
import { ModalBodyProps } from '../types';
import { modalBodyStyle } from '../styles';

export const Body = (props: ModalBodyProps) => {
  const { children } = props;
  return <div css={modalBodyStyle}>{children}</div>;
};

Body.displayName = 'Modal.Body';
