import React, { Children, isValidElement } from 'react';
import { OptionValue } from '../types';

export const useSelect = () => {
  const getPlaceHolder = (children: React.ReactNode) => {
    const component = Children.toArray(children) as React.ReactElement[];
    const placeholder = Children.map(component, child => {
      return child.props?.placeholder;
    }).join('');

    return placeholder || null;
  };

  const getSelectValues = (children: React.ReactNode): OptionValue[] => {
    const optionValues: OptionValue[] = [];
    if (children) {
      React.Children.forEach(children, child => {
        if (isValidElement(child)) {
          const defaultValue: OptionValue = {
            isDisabled: false,
            key: '',
            name: ''
          };
          optionValues.push(
            Object.assign(defaultValue, {
              name: getChildText(child),
              key: child.props.value,
              isDisabled: child.props.disabled || false
            })
          );
        }
      });
    }
    //푸시해야함
    return optionValues;
  };

  const getChildText = (children: React.ReactNode) => {
    let childText = '';
    if (children) {
      React.Children.forEach(children, child => {
        if (isValidElement(child)) {
          return typeof child.props.children === 'string'
            ? (childText += child.props.children)
            : (childText += getChildText(child.props.children));
        } else if (typeof child === 'string') {
          childText += child;
        } else if (typeof child === 'number') {
          childText += String(childText);
        }
      });
    }
    return childText;
  };

  return { getChildText, getPlaceHolder, getSelectValues };
};
