/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useRef } from 'react';
import { SelectContext } from '../hooks/SelectContext';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import { useOptionStyle } from '../hooks/useOptionStyle';
import { useSelect } from '../hooks/useSelect';
import type { OptionValue, SelectOptionProps } from '../types';

export const SelectOption = (props: SelectOptionProps) => {
  const optionRef = useRef<HTMLLIElement>(null);
  const { value, setValue, setValues, setIsOpen, isOpen, onValueChange, selectProps, selectRef } =
    useContext(SelectContext);
  const { active, disable } = useOptionStyle(selectProps);
  const handleKeydown = useKeyboardNavigation(selectRef);
  const { getPropsChild } = useSelect();
  const defaultValue = selectProps.defaultValue || null;
  const children = getPropsChild(props.children);
  const optionValue: OptionValue = {
    key: props.value,
    name: children
  };

  useEffect(() => {
    setValues(prev => [...prev, optionValue]);
    if (defaultValue === props.value) {
      optionRef.current?.focus();
      setValue(optionValue);
      if (onValueChange) {
        onValueChange(defaultValue);
      }
    }
  }, []);

  useEffect(() => {
    if (value.key === props.value) {
      optionRef.current?.focus();
      return;
    }
  }, [isOpen]);

  return (
    <li
      {...props}
      css={props.disabled ? disable : active}
      role="listitem"
      ref={optionRef}
      data-disabled={props.disabled}
      tabIndex={0}
      onKeyDown={e => {
        switch (e.key) {
          case 'Enter':
            if (onValueChange) {
              setValue({
                key: props.value,
                name: children
              });
              onValueChange(props.value);
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
        if (!props.disabled) {
          setValue({
            key: props.value,
            name: children
          });
          setIsOpen(false);
          if (onValueChange) {
            onValueChange(props.value);
          }
        }
      }}
    >
      {children}
    </li>
  );
};
