/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useId } from 'react';
import useInitialRender from '../hooks/useInitialRender';
import useDrawerEffect from '../hooks/useDrawerEffect';
import { useDrawer } from '../hooks/useDrawer';
import { DrawerContext } from './DrawerContext';
import { DrawerCloseIcon } from './DrawerCloseIcon';
import directionStyle from '../styles/createDirectionStyle';
import overlayStyle from '../styles/createOverlayStyle';
import { flex } from '../styles/createFlexStyle';
import { DRAWER_OVERRAY_BACKGROUND, DRAWER_BACKROUND, DRAWER_ID_PREFIX } from '../constants';
import type { DrawerChildrenProps } from '../types';

export const DrawerContent = (props: DrawerChildrenProps) => {
  const isInitialRendered = useInitialRender();
  const { drawerProps, setOpen, isOpen } = useContext(DrawerContext);
  const { onOpen, onClose, placement } = drawerProps;
  const { stopEventHandler, closeDrawer } = useDrawer();
  const drawerId = props.id ? props.id : `${DRAWER_ID_PREFIX}-${useId()}`;
  useDrawerEffect(isOpen, isInitialRendered, onClose, onOpen);

  useEffect(() => {
    setOpen(drawerProps.open);
  }, [drawerProps.open]);

  return isOpen ? (
    <div
      css={overlayStyle(DRAWER_OVERRAY_BACKGROUND)}
      onClick={event => closeDrawer(event, setOpen)}
      aria-labelledby={drawerId}
    >
      <div
        css={directionStyle(placement, DRAWER_BACKROUND)}
        onClick={stopEventHandler}
        role="dialog"
        aria-modal="true"
        id={drawerId}
      >
        <DrawerCloseIcon />
        <div css={flex()}>{props.children}</div>
      </div>
    </div>
  ) : null;
};
