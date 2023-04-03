import { createContext, useEffect, useState } from 'react';
import type { ReturnContext } from '../types';

const defaultContextValues: ReturnContext = {
  isOpen: false,
  setOpen: () => {},
  drawerProps: {
    onClose: () => {},
    onOpen: () => {},
    placement: 'left',
    open: false
  }
};

export const DrawerContext = createContext<ReturnContext>(defaultContextValues);

export const DrawerProvider = ({ ...props }) => {
  const [isOpen, setOpen] = useState<boolean>(props.drawerProps.open);

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        setOpen,
        drawerProps: { ...defaultContextValues.drawerProps, ...props.drawerProps }
      }}
    >
      {props.children}
    </DrawerContext.Provider>
  );
};
