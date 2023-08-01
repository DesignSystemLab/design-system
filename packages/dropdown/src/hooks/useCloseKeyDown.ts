import React, { useContext, useCallback, RefObject } from 'react';
import { useToggleOpen } from './useToggleOpen';

const useCloseKeyDown = () => (event: React.KeyboardEvent<HTMLElement>) => {
  const el = event.currentTarget;
  switch (event.key) {
    case 'Escape':
    case 'Esc':
      event.preventDefault();
      useToggleOpen(el);
      return;
  }
};

export default useCloseKeyDown;
