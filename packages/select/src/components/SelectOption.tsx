/** @jsxImportSource @emotion/react */
import { Children, useContext, useEffect } from 'react';
import { SelectContext } from '../hooks/SelectContext';
import { useOptionStyle } from '../hooks/useOptionStyle';
import { useSelect } from '../hooks/useSelect';
import type { OptionValue, SelectOptionProps } from '../types';

export const SelectOption = (props: SelectOptionProps) => {
  const { value, setValue, values, setValues, setIsOpen, onValueChange, selectProps, focusIndex } =
    useContext(SelectContext);
  const { listBackgroud } = useOptionStyle(selectProps);
  const { getPropsChild, setFocusIndexByValue } = useSelect();
  const defaultValue = selectProps.defaultValue || null;
  const children = getPropsChild(props.children);
  const optionValue: OptionValue = {
    key: props.value,
    name: children
  };

  useEffect(() => {
    setValues(prev => [...prev, optionValue]);
    if (defaultValue === props.value) {
      setValue(optionValue);
      setFocusIndexByValue(defaultValue);
      if (onValueChange) {
        onValueChange(defaultValue);
      }
    }
  }, []);

  return (
    <li
      css={values[focusIndex]?.key === props.value && listBackgroud}
      onMouseEnter={() => {
        setFocusIndexByValue(props.value);
      }}
      onClick={() => {
        setFocusIndexByValue(props.value);
        setValue({
          key: props.value,
          name: children
        });
        setIsOpen(false);
        if (props.value !== value.key && onValueChange) {
          onValueChange(props.value);
        }
      }}
    >
      {children}
    </li>
  );
};
