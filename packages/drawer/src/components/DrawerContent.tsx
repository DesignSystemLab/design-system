/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useRef } from 'react';
import { useDrawer } from '../hooks/useDrawer';
import { useDrawerStyle } from '../hooks/useDrawerStyle';
import { DrawerContext } from './DrawerContext';
import { DrawerCloseIcon } from './DrawerCloseIcon';
import type { DrawerChildrenProps } from '../types';

export const DrawerContent = (props: DrawerChildrenProps) => {
  const { drawerProps, setIsOpen, isOpen, init } = useContext(DrawerContext);
  const { drawerOverlayStyle, drawerContentStyle, drawerFlex } = useDrawerStyle();
  const { stopEventHandler, closeDrawer } = useDrawer();

  useEffect(() => {
    setIsOpen(drawerProps.isOpen);
  }, [drawerProps.isOpen]);

  useEffect(() => {
    if (!isOpen && init && drawerProps.onClose) {
      drawerProps.onClose();
    }
  }, [isOpen]);

  return isOpen ? (
    <div css={drawerOverlayStyle} onClick={event => closeDrawer(event, setIsOpen)}>
      <div css={drawerContentStyle(drawerProps.placement)} onClick={stopEventHandler}>
        <DrawerCloseIcon />
        <div css={drawerFlex()}>{props.children}</div>
      </div>
    </div>
  ) : null;
};
