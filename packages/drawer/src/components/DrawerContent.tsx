/** @jsxImportSource @emotion/react */
import { useContext, useEffect } from 'react';
import useInitialRender from '../hooks/useInitialRender';
import useDrawerEffect from '../hooks/useDrawerEffect';
import { useDrawer } from '../hooks/useDrawer';
import { useDrawerStyle } from '../hooks/useDrawerStyle';
import { DrawerContext } from './DrawerContext';
import { DrawerCloseIcon } from './DrawerCloseIcon';
import type { DrawerChildrenProps } from '../types';

export const DrawerContent = (props: DrawerChildrenProps) => {
  const isInitialRendered = useInitialRender();
  const { drawerProps, setOpen, isOpen } = useContext(DrawerContext);
  const { onOpen, onClose } = drawerProps;
  const { drawerOverlayStyle, drawerContentStyle, drawerFlex } = useDrawerStyle();
  const { stopEventHandler, closeDrawer } = useDrawer();
  useDrawerEffect(isOpen, isInitialRendered, onClose, onOpen);

  useEffect(() => {
    setOpen(drawerProps.open);
  }, [drawerProps.open]);

  return isOpen ? (
    <div css={drawerOverlayStyle} onClick={event => closeDrawer(event, setOpen)}>
      <div css={drawerContentStyle(drawerProps.placement)} onClick={stopEventHandler}>
        <DrawerCloseIcon />
        <div css={drawerFlex()}>{props.children}</div>
      </div>
    </div>
  ) : null;
};
