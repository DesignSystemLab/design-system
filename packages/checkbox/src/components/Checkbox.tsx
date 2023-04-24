/** @jsxImportSource @emotion/react */
import { callHandler } from '@jdesignlab/utils';
import { createClassVariant } from '@jdesignlab/theme';
import type { CheckboxProps } from '../types';
import { useId, useState, useRef, useContext, useEffect } from 'react';
import { useKeyDown } from '../hooks/useKeyDown';
import { CheckboxGroup } from './CheckboxGroup';
import { CheckboxGroupContext } from '../context';

export const Checkbox = (props: CheckboxProps) => {
  const { children, checked, value, ...otherProps } = props;
  const [checkedState, setCheckedState] = useState<boolean>(!!checked);
  const { defaultValues } = useContext(CheckboxGroupContext); // Checkbox.Group 없으면 undefined
  const checkboxRef = useRef(null);
  const id = useId();
  const { onEnterKeyDown, onArrowKeyDown } = useKeyDown();

  const onKeydownHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!checkboxRef.current) return;
    const currentEl = checkboxRef.current;
    switch (e.key) {
      case 'Enter':
        onEnterKeyDown(e, setCheckedState);
        break;
      case 'ArrowUp':
      case 'ArrowRight':
        defaultValues && onArrowKeyDown(e, currentEl, 'next');
        break;
      case 'ArrowDown':
      case 'ArrowLeft':
        defaultValues && onArrowKeyDown(e, currentEl, 'prev');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (defaultValues && value) {
      setCheckedState(defaultValues.some(x => x === value));
    }
  }, [defaultValues]);

  return (
    <label htmlFor={id} aria-labelledby={id} className={createClassVariant('checkbox', 'label')}>
      <input
        type="checkbox"
        role="checkbox"
        id={id}
        className={createClassVariant('checkbox', 'input')}
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
  );
};

Checkbox.displayName = 'Checkbox';
Checkbox.Group = CheckboxGroup;
