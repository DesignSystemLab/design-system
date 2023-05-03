import { useRef } from 'react';

export const useInitialRender = () => {
  const isInitial = useRef<boolean>(true);

  if (isInitial.current) {
    isInitial.current = false;
    return true;
  }

  return isInitial.current;
};
