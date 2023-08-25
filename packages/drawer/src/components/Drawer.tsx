/** @jsxImportSource @emotion/react */
import { filterComponent } from '@jdesignlab/react-utils';
import { DrawerTrigger } from './DrawerTrigger';
import { DrawerPortal } from './DrawerPortal';
import { useToggleLayer } from '../hooks/useToggleLayer';
import { useId } from 'react';
import { DrawerContext } from '../context';
import { DrawerProps } from '../types';

export const Drawer = (props: DrawerProps) => {
  const {
    children,
    open: openProp,
    onOpen: onOpenProp,
    onClose: onCloseProp,
    hasCloseIcon = true,
    disableOverlayClose = false,
    placement = 'right',
    full = false,
    ...restProps
  } = props;
  const { isOpen, onOpen, onClose } = useToggleLayer(openProp, onOpenProp, onCloseProp);
  const id = useId();

  const triggerComponent = filterComponent(children, DrawerTrigger, true);
  const portalComponent = filterComponent(children, DrawerPortal, true);

  return (
    <DrawerContext.Provider value={{ id, isOpen, onOpen, onClose, hasCloseIcon, disableOverlayClose, placement, full }}>
      {triggerComponent}
      {portalComponent}
    </DrawerContext.Provider>
  );
};

Drawer.displayName = 'Drawer';
Drawer.Trigger = DrawerTrigger;
Drawer.Portal = DrawerPortal;
