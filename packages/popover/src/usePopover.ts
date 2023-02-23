import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React, { Children, isValidElement } from 'react';

export const usePopover = () => {
  const getChildren = (
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

  return { getChildren };
};
