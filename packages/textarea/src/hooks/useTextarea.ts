import { Children, isValidElement } from 'react';
import type { EmotionJSX } from '@emotion/react/types/jsx-namespace';

export const useTextarea = () => {
  const getChildText = (children: React.ReactNode) => {
    let childText = '';
    if (children) {
      Children.forEach(children, child => {
        if (isValidElement(child)) {
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

  return { filterChildren, getChildText };
};
