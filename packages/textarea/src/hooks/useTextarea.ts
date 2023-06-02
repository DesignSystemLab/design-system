import { Children, isValidElement } from 'react';

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

  const getLabelId = (children: React.ReactNode) => {
    let labelId = '';
    Children.forEach(children, child => {
      if (isValidElement(child) && child.props.id) {
        labelId = child.props.id;
      }
    });
    return labelId || null;
  };

  return { getChildText, getLabelId };
};
