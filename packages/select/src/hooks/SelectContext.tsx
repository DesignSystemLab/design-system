import { createContext, useEffect, useState } from 'react';
import type { OptionValue, ReturnContext, StyleProps } from '../types';

const defaultContextValues: ReturnContext = {
  focusIndex: 0,
  setFocusIndex: () => {},
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
  optionCount: 0,
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<{ key: string | null; name: string | null }>({ key: null, name: null });
  const [defaultSelectProps, _] = useState<StyleProps>(defaultContextValues.selectProps);
  const [focusIndex, setFocusIndex] = useState<number>(-1);
  const [values, setValues] = useState<OptionValue[]>([]);

  return (
    <SelectContext.Provider
      value={{
        optionCount: props.options ? props.options.length : 0,
        onValueChange: props.onValueChange,
        selectProps: { ...defaultSelectProps, ...props.selectProps },
        values,
        setValues,
        focusIndex,
        setFocusIndex,
        setIsOpen,
        isOpen,
        value,
        setValue
      }}
    >
      {props.children}
    </SelectContext.Provider>
  );
};
