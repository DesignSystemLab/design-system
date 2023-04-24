/** @jsxImportSource @emotion/react */
import { callHandler } from '@jdesignlab/utils';
import type { CheckboxProps } from '../types';
import { useId, useState, useRef } from 'react';
import { useKeyDown } from '../hooks/useKeyDown';

export const Checkbox = (props: CheckboxProps) => {
  const { children, checked, ...otherProps } = props;
  const [checkedValue, setCheckedValue] = useState<boolean>(!!checked);
  const checkboxRef = useRef(null);
  const id = useId();
  const { onEnterKeyDown } = useKeyDown();
  const onDefaultCheckboxChange = () => {
    setCheckedValue(!checkedValue);
  };

  const onKeydownHandle = (e: any) => {
    if (!checkboxRef.current) return;
    switch (e.key) {
      case 'Enter':
        onEnterKeyDown(e, setCheckedValue);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <label htmlFor={id} aria-labelledby={id}>
        <input
          type="checkbox"
          role="checkbox"
          id={id}
          ref={checkboxRef}
          checked={checkedValue}
          aria-checked={checkedValue}
          onChange={callHandler(onDefaultCheckboxChange, props?.onChange)}
          onKeyDown={e => onKeydownHandle(e)}
          {...otherProps}
        />
        <span>{children}</span>
      </label>
    </div>
  );
};

Checkbox.displayName = 'Checkbox';
