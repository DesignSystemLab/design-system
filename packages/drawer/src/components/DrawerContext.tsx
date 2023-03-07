import { createContext, useEffect, useState } from 'react';
import type { ReturnContext } from '../types';

const defaultContextValues: ReturnContext = {
  init: false,
  isOpen: false,
  setIsOpen: () => {},
  drawerProps: {
    onClose: () => {},
    onOpen: () => {},
    placement: 'left',
    isOpen: false
  }
};

export const DrawerContext = createContext<ReturnContext>(defaultContextValues);

export const DrawerProvider = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.drawerProps.isOpen);
  const [init, setInit] = useState<boolean>(defaultContextValues.init);

  useEffect(() => {
    setInit(true);
    if (props.drawerProps.onOpen && isOpen && props.drawerProps.isOpen) {
      props.drawerProps.onOpen();
    }
  }, [props]);

  return (
    <DrawerContext.Provider
      value={{
        init,
        isOpen,
        setIsOpen,
        drawerProps: { ...defaultContextValues.drawerProps, ...props.drawerProps }
      }}
    >
      {props.children}
    </DrawerContext.Provider>
  );
};
