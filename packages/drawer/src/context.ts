import { createContext } from 'react';
import { DrawerContextProps } from './types';

export const defaultContextValues: DrawerContextProps = {
  id: '',
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  hasCloseIcon: true,
  disableOverlayClose: false,
  placement: 'right',
  full: false
};

export const DrawerContext = createContext<DrawerContextProps>(defaultContextValues);
