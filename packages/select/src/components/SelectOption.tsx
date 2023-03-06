/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useRef } from 'react';
import { SelectContext } from '../hooks/SelectContext';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import { useOptionStyle } from '../hooks/useOptionStyle';
import { useSelect } from '../hooks/useSelect';
import type { OptionValue, SelectOptionProps } from '../types';

export const SelectOption = (props: SelectOptionProps) => {
  const optionRef = useRef<HTMLLIElement>(null);
  const { children, value, disabled = false, autofocus = true } = props;
  const {
    setSearchKeyword,
    setSelectedOption,
    selectedOption,
    setIsOpen,
    isOpen,
    selectProps,
    selectRef,
    setOptions,
    onValueChange,
    isCombobox
  } = useContext(SelectContext);

  const { active, disable } = useOptionStyle(selectProps);
  const { getChildText } = useSelect();
  const handleKeydown = useKeyboardNavigation(selectRef);
  const defaultValue = selectProps.defaultValue || null;
  const childText = getChildText(children);

  const optionValue: OptionValue = {
    key: value,
    name: childText,
    isDisabled: disabled
  };

  useEffect(() => {
    setOptions(prev => [...prev, optionValue]);
    if (defaultValue === value && autofocus) {
      optionRef.current?.focus();
      setSelectedOption(optionValue);
      if (onValueChange) {
        onValueChange(defaultValue);
      }
    }
  }, []);

  useEffect(() => {
    if (selectedOption.key === value && autofocus) {
      optionRef.current?.focus();
      return;
    }
  }, [isOpen]);

  return (
    <li
      {...props}
      css={[props.disabled ? disable : active, isCombobox]}
      role="listitem"
      ref={optionRef}
      data-disabled={props.disabled}
      tabIndex={0}
      onKeyDown={e => {
        switch (e.key) {
          case 'Enter':
            if (isCombobox) {
              setSearchKeyword(childText);
            }
            if (onValueChange) {
              setSelectedOption({
                key: value,
                name: childText,
                isDisabled: !!props.disabled
              });
              onValueChange(value);
            }
            setIsOpen(false);
            return;
          case 'Escape':
            setIsOpen(false);
            return;
          default:
            handleKeydown(e);
            return;
        }
      }}
      onFocus={() => {
        if (optionRef.current) {
          optionRef.current.dataset.focus = 'focus';
        }
      }}
      onBlur={() => {
        if (optionRef.current) {
          optionRef.current.dataset.focus = '';
        }
      }}
      onMouseEnter={() => {
        optionRef.current?.focus();
      }}
      onClick={() => {
        if (isCombobox) {
          setSearchKeyword(childText);
        }
        if (!props.disabled) {
          setSelectedOption({
            key: value,
            name: childText,
            isDisabled: !!props.disabled
          });
          setIsOpen(false);
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
