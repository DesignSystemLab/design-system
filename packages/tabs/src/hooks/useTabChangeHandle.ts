import { useEffect } from 'react';
import type { TabChangeHandleProps } from '../types';

const useTabChangeHandle = ({ onChange, setHasTouched, selectedTab, hasTouched }: TabChangeHandleProps) => {
  useEffect(() => {
    if (onChange && hasTouched) {
      onChange();
    }
    setHasTouched(true);
  }, [selectedTab]);
};

export default useTabChangeHandle;
