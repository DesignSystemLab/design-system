/** @jsxImportSource @emotion/react */
import { useContext, useEffect } from 'react';
import useInitialRender from '../hooks/useInitialRender';
import useDrawerEffect from '../hooks/useDrawerEffect';
import { useDrawer } from '../hooks/useDrawer';
import { DrawerContext } from './DrawerContext';
import { DrawerCloseIcon } from './DrawerCloseIcon';
import directionStyle from '../styles/createDirectionStyle';
import overlayStyle from '../styles/createOverlayStyle';
import { flex } from '../styles/createFlexStyle';
import type { DrawerChildrenProps } from '../types';

export const DrawerContent = (props: DrawerChildrenProps) => {
  const isInitialRendered = useInitialRender();
  const { drawerProps, setOpen, isOpen } = useContext(DrawerContext);
  const { onOpen, onClose, placement } = drawerProps;
  const { stopEventHandler, closeDrawer } = useDrawer();
  useDrawerEffect(isOpen, isInitialRendered, onClose, onOpen);

  useEffect(() => {
    setOpen(drawerProps.open);
  }, [drawerProps.open]);

  return isOpen ? (
    <div css={overlayStyle()} onClick={event => closeDrawer(event, setOpen)}>
      <div css={directionStyle(placement)} onClick={stopEventHandler}>
        <DrawerCloseIcon />
        <div css={flex()}>{props.children}</div>
      </div>
    </div>
  ) : null;
};
