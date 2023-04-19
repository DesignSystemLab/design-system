import { Children, isValidElement } from 'react';
import type { ReactNode } from 'react';

export const getComponentText = (children: ReactNode) => {
  let childText = '';
  if (children) {
    Children.forEach(children, child => {
      if (isValidElement(child)) {
        return typeof child.props.children === 'string'
          ? (childText += child.props.children)
          : (childText += getComponentText(child.props.children));
      } else if (typeof child === 'string') {
        childText += child;
      }
    });
  }
  return childText;
};
