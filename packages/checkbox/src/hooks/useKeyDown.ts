import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export const useKeyDown = () => {
  const onEnterKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>, setCheckedValue: Dispatch<SetStateAction<boolean>>) => {
      event.preventDefault();
      setCheckedValue((prev: boolean) => !prev);
    },
    []
  );

  return {
    onEnterKeyDown
  };
};

export default useKeyDown;
