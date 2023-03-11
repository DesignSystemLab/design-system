import { useEffect } from 'react';
import type { TabChangeHandleProps } from '../types';

const useTabChangeHandle = ({ selectedTab, hasTouched, setHasTouched, onChange }: TabChangeHandleProps) => {
  //TODO disabled 처리
  useEffect(() => {
    if (onChange && hasTouched) {
      onChange();
      // return () => {
      //   onBeforeChange && onBeforeChange();
      // };
    }
    setHasTouched(true);
  }, [selectedTab]);
};

export default useTabChangeHandle;
