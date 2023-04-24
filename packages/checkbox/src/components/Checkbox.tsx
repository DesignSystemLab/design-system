/** @jsxImportSource @emotion/react */
import type { CheckboxProps } from '../types';
import { useId, useState } from 'react';
import { callHandler } from '@jdesignlab/utils';

export const Checkbox = (props: CheckboxProps) => {
  const { children, checked, ...otherProps } = props;
  const id = useId();
  const [checkedValue, setCheckedValue] = useState<boolean>(!!checked);
  const onDefaultCheckboxChange = () => {
    setCheckedValue(!checkedValue);
  };

  return (
    <div>
      <label htmlFor={id} aria-labelledby={id}>
        <input
          type="checkbox"
          role="checkbox"
          id={id}
          checked={checkedValue}
          aria-checked={checkedValue}
          onChange={callHandler(onDefaultCheckboxChange, props?.onChange)}
          {...otherProps}
        />
        <span>{children}</span>
      </label>
    </div>
  );
};

Checkbox.displayName = 'Checkbox';
