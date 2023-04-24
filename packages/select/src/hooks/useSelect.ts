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

  const getChildText = (children: React.ReactNode) => {
    let childText = '';
    if (children) {
      React.Children.forEach(children, child => {
        if (React.isValidElement(child)) {
          return typeof child.props.children === 'string'
            ? (childText += child.props.children)
            : (childText += getChildText(child.props.children));
        } else if (typeof child === 'string') {
          childText += child;
        }
      });
    }
    return childText;
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

  return { filterChildren, getChildText, getPlaceHolder };
};
