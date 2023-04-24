import { Children, isValidElement } from 'react';
import type { ReactNode } from 'react';

export const filterComponent = (
  children: ReactNode | ReactNode[],
  compoenent: (props: any) => ReactNode,
  isEqual: boolean
) => {
  return Children.toArray(children).filter(child => {
    if (isValidElement(child)) {
      return isEqual ? child.type === compoenent : child.type !== compoenent;
    }
  });
};
