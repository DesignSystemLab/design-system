import { KeyboardEventHandler, useContext } from 'react';
import { OptionValue } from '../types';
import { SelectContext } from './SelectContext';

export const useSearchOptions = () => {
  const {
    options,
    searchValues,
    setSelectedOption,
    setSearchValues,
    setOpen,
    setSearchKeyword,
    selectRef,
    onValueChange
  } = useContext(SelectContext);

  const reduceDuplicateOption = (optionArray: OptionValue[]) => {
    return Array.from(new Set(optionArray.map(item => item.key))).map(key => {
      return optionArray.find(value => value.key === key);
    });
  };

  const handleInputEnter: KeyboardEventHandler<HTMLInputElement> = e => {
    const comboboxItems = selectRef?.current?.querySelectorAll('li') as NodeListOf<HTMLLIElement>;
    const hoverIndex = Array.from(comboboxItems).findIndex(listElement => {
      return listElement.dataset.hover;
    });
    const targetComboboxOption = searchValues[hoverIndex];

    if (targetComboboxOption && !targetComboboxOption.isDisabled) {
      setSelectedOption(targetComboboxOption);
      setSearchKeyword(targetComboboxOption.name);

      if (onValueChange) {
        onValueChange(targetComboboxOption.key);
      }
    }

    e.stopPropagation();
  };

  const handleInput: KeyboardEventHandler<HTMLInputElement> = e => {
    const keyword = e.currentTarget.value;
    setSearchKeyword(keyword);
    const filteredValues = options.filter(option => {
      return option.name?.toLowerCase().includes(keyword.toLowerCase());
    });

    if (keyword.length) {
      filteredValues.length ? setSearchValues(reduceDuplicateOption(filteredValues)) : setSearchValues([]);
      setOpen(true);
      return;
    }

    setSearchValues(reduceDuplicateOption(options));
    setOpen(false);
    e.stopPropagation();
  };

  return { handleInput, handleInputEnter };
};
