/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useRef, useState } from 'react';
import { createComboboxStyle } from '../styles/createComboboxStyle';
import { SelectContext } from '../hooks/SelectContext';
import { useSelect } from '../hooks/useSelect';
import type { ComoboboxOptionProps } from '../types';

export const ComboboxOption = (props: ComoboboxOptionProps) => {
  const optionRef = useRef<HTMLLIElement>(null);
  const { children, value, disabled = false } = props;
  const {
    selectedOption,
    open,
    setSearchKeyword,
    searchKeyword,
    selectProps,
    setSelectedOption,
    setOpen,
    onValueChange
  } = useContext(SelectContext);
  const { activeItemStyle, disabledItemStyle } = createComboboxStyle(selectProps);
  const { getChildText } = useSelect();
  const childText = getChildText(children);
  const selectedComboboxItem = selectedOption.key === value;

  useEffect(() => {
    if (optionRef.current) {
      optionRef.current.dataset.hover = '';
    }
  }, [searchKeyword, optionRef]);

  useEffect(() => {
    if (selectedComboboxItem && optionRef.current) {
      optionRef.current.dataset.hover = 'hover';
    }
  }, [open]);

  return (
    <li
      ref={optionRef}
      role="option"
      css={[disabled ? disabledItemStyle : activeItemStyle]}
      aria-selected={selectedComboboxItem}
      data-disabled={disabled}
      aria-disabled={disabled}
      onMouseEnter={() => {
        if (optionRef.current) {
          optionRef.current.dataset.hover = 'hover';
        }
      }}
      onMouseLeave={() => {
        if (optionRef.current) {
          optionRef.current.dataset.hover = '';
        }
      }}
      onClick={() => {
        if (!disabled) {
          setSelectedOption({
            key: value,
            name: childText,
            isDisabled: !!disabled
          });
          setSearchKeyword(childText);
          setOpen(false);
          if (onValueChange) {
            onValueChange(value);
          }
        }
      }}
    >
      {childText}
    </li>
  );
};
