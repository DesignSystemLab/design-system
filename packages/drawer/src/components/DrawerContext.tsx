import { createContext, useState } from 'react';
import { DEFAULT_OPTIONS } from '../constants';
import type { ReturnContext } from '../types';

const defaultContextValues: ReturnContext = {
  isOpen: false,
  setOpen: () => {},
  drawerProps: {
    onClose: () => {},
    onOpen: () => {},
    placement: DEFAULT_OPTIONS.placement,
    open: DEFAULT_OPTIONS.open,
    full: DEFAULT_OPTIONS.full
  }
};

export const DrawerContext = createContext<ReturnContext>(defaultContextValues);

export const DrawerProvider = ({ ...props }) => {
  const { drawerProps } = props;
  const defaultDrawerProps = defaultContextValues.drawerProps;
  const {
    open = defaultDrawerProps.open,
    placement = defaultDrawerProps.placement,
    full = defaultDrawerProps.full
  } = drawerProps;
  const [isOpen, setOpen] = useState<boolean>(props.drawerProps.open);

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        setOpen,
        drawerProps: { open, placement, ...drawerProps }
      }}
    >
      {props.children}
    </DrawerContext.Provider>
  );
};
