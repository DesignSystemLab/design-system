/** @jsxImportSource @emotion/react */
import type { CheckboxProps } from '../types';
import { useId } from 'react';

export const Checkbox = (props: CheckboxProps) => {
  const { children, checked, ...otherProps } = props;
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>
        <input type="checkbox" role="checkbox" id={id} {...otherProps} />
        <span>{children}</span>
      </label>
    </div>
  );
};

Checkbox.displayName = 'Checkbox';
