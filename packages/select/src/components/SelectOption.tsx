/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useRef } from 'react';
import { SelectContext } from '../hooks/SelectContext';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import { createSelectStyle } from '../styles/createSelectStyle';
import { useSelect } from '../hooks/useSelect';
import type { OptionValue, SelectOptionProps } from '../types';

export const SelectOption = (props: SelectOptionProps) => {
  const { setSelectedOption, selectedOption, setOpen, open, selectProps, setOptions, onValueChange } =
    useContext(SelectContext);
  const { children, value, disabled = false } = props;
  const { active, disable } = createSelectStyle(selectProps);
  const { getChildText } = useSelect();
  const { handleKeydown } = useKeyboardNavigation();
  const defaultValue = selectProps.defaultValue || null;
  const childText = getChildText(children);
  const optionRef = useRef<HTMLLIElement>(null);
  const optionValue: OptionValue = {
    key: value,
    name: childText,
    isDisabled: disabled
  };
  const selectedOptionItem = defaultValue === value;

  useEffect(() => {
    setOptions(prev => [...prev, optionValue]);
    if (selectedOptionItem) {
      optionRef.current?.focus();
      setSelectedOption(optionValue);
      if (onValueChange) {
        onValueChange(defaultValue);
      }
    }
  }, []);

  useEffect(() => {
    if (selectedOption.key === value) {
      optionRef.current?.focus();
      return;
    }
  }, [open]);

  return (
    <li
      {...props}
      css={[disabled ? disable : active]}
      role="option"
      ref={optionRef}
      aria-selected={selectedOptionItem}
      aria-disabled={disabled}
      data-disabled={disabled}
      tabIndex={0}
      onKeyDown={e => {
        switch (e.key) {
          case 'Enter':
            if (onValueChange) {
              setSelectedOption({
                key: value,
                name: childText,
                isDisabled: !!disabled
              });
              onValueChange(value);
            }
            setOpen(false);
            return;
          case 'Escape':
            setOpen(false);
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
      onClick={e => {
        if (!props.disabled) {
          setSelectedOption({
            key: value,
            name: childText,
            isDisabled: !!props.disabled
          });
          setOpen(false);
          if (onValueChange) {
            onValueChange(value);
          }
          return;
        }
      }}
    >
      <span>{childText}</span>
    </li>
  );
};
