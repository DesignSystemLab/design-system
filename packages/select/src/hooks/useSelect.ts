import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React, { Children, isValidElement } from 'react';

export const useSelect = () => {
  const getPlaceHolder = (children: React.ReactNode) => {
    const component = Children.toArray(children) as React.ReactElement[];
    const placeholder = Children.map(component, child => {
      return child.props?.placeholder;
    }).join('');

    return placeholder || null;
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

  return { filterChildren, getPropsChild, getPlaceHolder };
};
