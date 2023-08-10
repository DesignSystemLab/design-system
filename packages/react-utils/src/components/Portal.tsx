/** @jsxImportSource @emotion/react */
import { ClassNameVariant } from '@jdesignlab/theme';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
  className?: ClassNameVariant;
}
const PORTAL_CONTAINER = document?.body;
export const Portal = (props: PortalProps) => {
  const { children } = props;
  return ReactDOM.createPortal(<>{children}</>, PORTAL_CONTAINER);
};
