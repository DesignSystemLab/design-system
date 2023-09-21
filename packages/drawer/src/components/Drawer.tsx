/** @jsxImportSource @emotion/react */
import { filterComponent } from '@jdesignlab/react-utils';
import { useId, useMemo } from 'react';
import { DrawerTrigger } from './DrawerTrigger';
import { DrawerPortal } from './DrawerPortal';
import { useToggleLayer } from '../hooks/useToggleLayer';
import { DrawerContext } from '../context';
import type { DrawerProps } from '../types';

export const Drawer = (props: DrawerProps) => {
  const {
    children,
    open: openProp,
    onOpen: onOpenProp,
    onClose: onCloseProp,
    hasCloseIcon = true,
    disableOverlayClose = false,
    placement = 'right',
    full = false
  } = props;
  const { isOpen, onOpen, onClose } = useToggleLayer(openProp, onOpenProp, onCloseProp);
  const id = useId();

  const triggerComponent = filterComponent(children, DrawerTrigger, true);
  const portalComponent = filterComponent(children, DrawerPortal, true);

  const providerValue = useMemo(
    () => ({
      id,
      isOpen,
      onOpen,
      onClose,
      hasCloseIcon,
      disableOverlayClose,
      placement,
      full
    }),
    [id, isOpen, onOpen, onClose, hasCloseIcon, disableOverlayClose, placement, full]
  );

  return (
    <DrawerContext.Provider value={providerValue}>
      {triggerComponent}
      {portalComponent}
    </DrawerContext.Provider>
  );
};

Drawer.displayName = 'Drawer';
Drawer.Trigger = DrawerTrigger;
Drawer.Portal = DrawerPortal;
