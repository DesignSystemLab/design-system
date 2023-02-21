import { createContext, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { PopoverProps, PopoverTrigger, StyleProps } from '../popoverTypes';
import { useStyle } from '../useStyle';

interface ReturnContext {
  style: StyleProps;
  popoverProps: PopoverProps;
  triggerSize: PopoverTrigger;
  setTriggerSize: Dispatch<SetStateAction<PopoverTrigger>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export const PopoverContext = createContext<ReturnContext | null>(null);

export const PopoverProvider = ({ ...props }) => {
  const [triggerSize, setTriggerSize] = useState<PopoverTrigger>({
    width: 0,
    height: 0
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const style = useStyle({ ...props.popoverProps, trigger: triggerSize, isOpen });

  return (
    <PopoverContext.Provider
      value={{
        isOpen,
        setIsOpen,
        style: { ...style },
        popoverProps: { ...props.popoverProps },
        triggerSize: { ...triggerSize },
        setTriggerSize
      }}
    >
      {props.children}
    </PopoverContext.Provider>
  );
};
