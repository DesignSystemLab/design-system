import { ChangeEventHandler, KeyboardEventHandler, useContext, useState } from 'react';
import { OptionValue } from '../types';
import { SelectContext } from './SelectContext';

export const useSearchOptions = () => {
  const { options, setSearchValues, setIsOpen, setSearchKeyword, searchKeyword } = useContext(SelectContext);

  const reduceDuplicateOption = (optionArray: OptionValue[]) => {
    return Array.from(new Set(optionArray.map(item => item.key))).map(key => {
      return optionArray.find(value => value.key === key);
    });
  };

  const handleInput: KeyboardEventHandler<HTMLInputElement> = e => {
    const keyword = e.currentTarget.value;
    const filteredValues = options.filter(option => {
      return option.name?.toLowerCase().includes(keyword.toLowerCase());
    });

    setSearchKeyword(keyword);
    e.stopPropagation();
    if (keyword.length) {
      filteredValues.length ? setSearchValues(reduceDuplicateOption(filteredValues)) : setSearchValues([]);
      setIsOpen(true);
      return;
    }

    setSearchValues(reduceDuplicateOption(options));
    setIsOpen(false);
  };

  return { handleInput };
};
