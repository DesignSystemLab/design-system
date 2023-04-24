import type { Dispatch, SetStateAction } from 'react';
import React, { useContext, useCallback, RefObject } from 'react';

const useCloseKeyDown = () => {
  const handleKeyDown = useCallback(
    (
      event: React.KeyboardEvent<HTMLElement>,
      menuRef: RefObject<HTMLElement>,
      open: boolean,
      setOpen: (value: boolean) => void
    ) => {
      if (!menuRef.current) return;
      switch (event.key) {
        case 'Escape':
          event.preventDefault();
          if (open) setOpen(!open);
          return;
      }
    },
    []
  );

  return handleKeyDown;
};

export default useCloseKeyDown;
