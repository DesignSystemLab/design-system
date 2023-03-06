import { createContext, RefObject, useRef, useState } from 'react';
import type { OptionValue, ReturnContext, StyleProps } from '../types';

const defaultContextValues: ReturnContext = {
  isOpen: false,
  setIsOpen: () => {},
  selectedOption: {
    key: '',
    name: '',
    isDisabled: false
  },
  setSelectedOption: () => {},
  onValueChange: () => {},
  options: [],
  setOptions: () => {},
  searchValues: [],
  setSearchValues: () => {},
  selectRef: null,
  setSelectRef: () => {},
  isCombobox: false,
  setIsCombobox: () => {},
  searchKeyword: '',
  setSearchKeyword: () => {},
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
  const [selectedOption, setSelectedOption] = useState<OptionValue>({ key: '', name: '', isDisabled: false });
  const [defaultSelectProps, _] = useState<StyleProps>(defaultContextValues.selectProps);
  const [options, setOptions] = useState<OptionValue[]>([]);
  const [searchValues, setSearchValues] = useState<OptionValue[]>([]);
  const [isCombobox, setIsCombobox] = useState<boolean>(false);
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  return (
    <SelectContext.Provider
      value={{
        onValueChange: props.onValueChange,
        selectProps: { ...defaultSelectProps, ...props.selectProps },
        options,
        setOptions,
        setIsOpen,
        isOpen,
        selectedOption,
        setSelectedOption,
        selectRef,
        setSelectRef,
        searchValues,
        setSearchValues,
        isCombobox,
        setIsCombobox,
        searchKeyword,
        setSearchKeyword
      }}
    >
      {props.children}
    </SelectContext.Provider>
  );
};
