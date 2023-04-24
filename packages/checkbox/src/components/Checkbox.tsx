/** @jsxImportSource @emotion/react */
import { callHandler } from '@jdesignlab/utils';
import type { CheckboxProps } from '../types';
import { useId, useState, useRef, useContext, useEffect } from 'react';
import { useKeyDown } from '../hooks/useKeyDown';
import { CheckboxGroup } from './CheckboxGroup';
import { CheckboxGroupContext } from '../context';

export const Checkbox = (props: CheckboxProps) => {
  const { children, checked, value, ...otherProps } = props;
  const [checkedState, setCheckedState] = useState<boolean>(!!checked);
  const { checkedValues } = useContext(CheckboxGroupContext); // Checkbox.Group 없으면 undefined
  const checkboxRef = useRef(null);
  const id = useId();
  const { onEnterKeyDown } = useKeyDown();

  const onKeydownHandle = (e: any) => {
    if (!checkboxRef.current) return;
    const el = checkboxRef.current;
    switch (e.key) {
      case 'Enter':
        onEnterKeyDown(e, setCheckedState);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (checkedValues && value) {
      const defaultChecked = checkedValues.some(x => x === value);
      setCheckedState(defaultChecked);
    }
  }, [checkedValues]);

  return (
    <div>
      <label htmlFor={id} aria-labelledby={id}>
        <input
          type="checkbox"
          role="checkbox"
          id={id}
          ref={checkboxRef}
          checked={checkedState}
          aria-checked={checkedState}
          onChange={callHandler(() => {
            setCheckedState(prev => !prev);
          }, props?.onChange)}
          onKeyDown={e => onKeydownHandle(e)}
          {...otherProps}
        />
        <span>{children}</span>
      </label>
    </div>
  );
};

Checkbox.displayName = 'Checkbox';
Checkbox.Group = CheckboxGroup;
