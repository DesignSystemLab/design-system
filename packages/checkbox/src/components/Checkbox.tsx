/** @jsxImportSource @emotion/react */
import { callHandler } from '@jdesignlab/utils';
import { createClassVariant } from '@jdesignlab/theme';
import { ThemeContext } from '@jdesignlab/j-provider';
import type { CheckboxProps } from '../types';
import { useId, useState, useRef, useContext, useEffect } from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import { CheckboxGroupContext } from '../context';
import { checkboxWrapperStyle, checkboxInputStyle, checkboxLabelStyle } from '../styles';
import { useKeyboardHandler } from '../hooks/useKeyboardHandler';

export const Checkbox = (props: CheckboxProps) => {
  const { children, checked, value, color, readOnly, ...otherProps } = props;
  const [checkedState, setCheckedState] = useState<boolean>(!!checked);
  const { defaultValues } = useContext(CheckboxGroupContext); // Checkbox.Group 없으면 undefined
  const themePreset = useContext(ThemeContext);
  const checkboxRef = useRef(null);
  const id = useId();

  const onCheckboxDefaultChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readOnly === true) return;
    setCheckedState(prev => !prev);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!checkboxRef.current) return;
    useKeyboardHandler({
      event,
      parentScope: '[role="group"]',
      selectorOfList: 'input[type="checkbox"]',
      setState: setCheckedState
    });
  };

  useEffect(() => {
    if (defaultValues && value) {
      setCheckedState(defaultValues.some(x => x === value));
    }
  }, [defaultValues]);

  return (
    <label
      htmlFor={id}
      aria-labelledby={id}
      className={createClassVariant('checkbox', 'wrapper')}
      css={checkboxWrapperStyle}
    >
      <input
        type="checkbox"
        role="checkbox"
        id={id}
        className={createClassVariant('checkbox', 'input')}
        css={checkboxInputStyle(themePreset, color)}
        ref={checkboxRef}
        checked={checkedState}
        aria-checked={checkedState}
        onChange={callHandler(onCheckboxDefaultChange, props?.onChange)}
        onKeyDown={e => onKeyDown(e)}
        {...otherProps}
      />
      <span className={createClassVariant('checkbox', 'label')} css={checkboxLabelStyle}>
        {children}
      </span>
    </label>
  );
};

Checkbox.displayName = 'Checkbox';
Checkbox.Group = CheckboxGroup;
