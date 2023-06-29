import { createContext, RefObject, useRef, useState } from 'react';
import { useSelect } from './useSelect';
import { BORDER_COLOR } from '../constants';
import type { OptionValue, ReturnContext, StyleProps } from '../types';

const defaultContextValues: ReturnContext = {
  open: false,
  setOpen: () => {},
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
  searchKeyword: '',
  setSearchKeyword: () => {},
  selectProps: {
    color: BORDER_COLOR,
    disabled: false,
    placeholder: null,
    defaultValue: null
  }
};

export const SelectContext = createContext<ReturnContext>(defaultContextValues);

export const SelectProvider = ({ ...props }) => {
  const { getSelectValues } = useSelect();
  const [selectRef, setSelectRef] = useState<RefObject<HTMLElement>>(useRef(null));
  const [open, setOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<OptionValue>({ key: '', name: '', isDisabled: false });
  const [defaultSelectProps, _] = useState<StyleProps>(defaultContextValues.selectProps);
  const [options, setOptions] = useState<OptionValue[]>([]);
  const [searchValues, setSearchValues] = useState<OptionValue[]>(getSelectValues(props.options));
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  return (
    <SelectContext.Provider
      value={{
        onValueChange: props.onValueChange,
        selectProps: { ...defaultSelectProps, ...props.selectProps },
        options,
        setOptions,
        setOpen,
        open,
        selectedOption,
        setSelectedOption,
        selectRef,
        setSelectRef,
        searchValues,
        setSearchValues,
        searchKeyword,
        setSearchKeyword
      }}
    >
      {props.children}
    </SelectContext.Provider>
  );
};
