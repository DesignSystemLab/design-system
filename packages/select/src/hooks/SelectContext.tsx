import { createContext, RefObject, useEffect, useRef, useState } from 'react';
import type { OptionValue, ReturnContext, StyleProps } from '../types';

const defaultContextValues: ReturnContext = {
  isOpen: false,
  setIsOpen: () => {},
  value: {
    key: null,
    name: null
  },
  setValue: () => {},
  onValueChange: () => {},
  values: [],
  setValues: () => {},
  setSelectRef: () => {},
  selectRef: null,
  selectProps: {
    color: 'green-lighten3',
    disabled: false,
    placement: 'bottom',
    placeholder: null,
    defaultValue: null
  }
};

export const SelectContext = createContext<ReturnContext>(defaultContextValues);

export const SelectProvider = ({ ...props }) => {
  const [selectRef, setSelectRef] = useState<RefObject<HTMLElement>>(useRef(null));
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<{ key: string | null; name: string | null }>({ key: null, name: null });
  const [defaultSelectProps, _] = useState<StyleProps>(defaultContextValues.selectProps);
  const [values, setValues] = useState<OptionValue[]>([]);

  return (
    <SelectContext.Provider
      value={{
        onValueChange: props.onValueChange,
        selectProps: { ...defaultSelectProps, ...props.selectProps },
        values,
        setValues,
        setIsOpen,
        isOpen,
        value,
        setValue,
        selectRef,
        setSelectRef
      }}
    >
      {props.children}
    </SelectContext.Provider>
  );
};
