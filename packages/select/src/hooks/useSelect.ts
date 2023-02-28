import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React, { Children, isValidElement, KeyboardEvent, KeyboardEventHandler, useContext } from 'react';
import { SelectContext } from './SelectContext';

export const useSelect = () => {
  const { focusIndex, setFocusIndex, values, setValue, setIsOpen, onValueChange, selectProps } =
    useContext(SelectContext);

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e: KeyboardEvent) => {
    const { key } = e;

    if (selectProps.disabled) {
      e.preventDefault();
      return;
    }

    switch (key) {
      case 'ArrowDown':
        focusIndex === values.length - 1 ? setFocusIndex(0) : setFocusIndex(prevIndex => ++prevIndex);
        return;
      case 'ArrowUp':
        focusIndex <= 0 ? setFocusIndex(values.length - 1) : setFocusIndex(prevIndex => --prevIndex);
        return;
      case 'Escape':
        setIsOpen(false);
        return;
      case 'Enter':
        const targetValue = getFocusValue(focusIndex);
        setValue(getFocusValue(focusIndex));
        setIsOpen(false);
        if (onValueChange) {
          onValueChange(targetValue.key);
        }
        return;
      default:
        return;
    }
  };

  const getPlaceHolder = (children: React.ReactNode) => {
    const component = Children.toArray(children) as React.ReactElement[];
    const placeholder = Children.map(component, child => {
      return child.props?.placeholder;
    }).join('');

    return placeholder || null;
  };

  const getFocusValue = (index: number) => {
    return values[index];
  };

  const setFocusIndexByValue = (targetValue: string) => {
    let targetIndex = values.findIndex(value => value.key === targetValue);

    if (targetIndex > -1) {
      setFocusIndex(targetIndex);
    }
  };

  const getPropsChild = (children: React.ReactElement) => {
    let propsChild = '';
    if (children) {
      React.Children.forEach(children, child => {
        return typeof child === 'string' ? (propsChild += child) : (propsChild += child?.props?.children);
      });
    }
    return propsChild;
  };

  const filterChildren = (
    children: React.ReactNode | React.ReactNode[],
    compoenent: (props: any) => EmotionJSX.Element,
    isEqual: boolean
  ) => {
    return Children.toArray(children).filter(child => {
      if (isValidElement(child)) {
        return isEqual ? child.type === compoenent : child.type !== compoenent;
      }
    });
  };

  return { filterChildren, handleKeyDown, getPropsChild, setFocusIndexByValue, getPlaceHolder };
};
