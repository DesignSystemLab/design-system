/** @jsxImportSource @emotion/react */
import { createClassVariant } from '@jdesignlab/theme';
import { ThemeContext } from '@jdesignlab/j-provider';
import type { CheckboxProps } from '../types';
import { useId, useRef, useContext, useEffect, forwardRef } from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import { CheckboxGroupContext } from '../context';
import { checkboxWrapperStyle, checkboxInputStyle, checkboxLabelStyle } from '../styles';
import { useKeyboardHandler } from '../hooks/useKeyboardHandler';

type ExtendedInputProps = CheckboxProps & { Group?: typeof CheckboxGroup };
export const Checkbox = Object.assign(
  forwardRef<HTMLInputElement, ExtendedInputProps>((props: CheckboxProps, extendRef) => {
    const { children, value, color, readOnly, ...otherProps } = props;
    const { defaultValues } = useContext(CheckboxGroupContext);
    const themePreset = useContext(ThemeContext);
    const checkboxRef = useRef<HTMLInputElement | null>(null);
    const id = useId();

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (!checkboxRef.current) return;
      useKeyboardHandler({
        event,
        parentScope: '[role="group"]',
        selectorOfList: 'input[type="checkbox"]'
      });
    };

    useEffect(() => {
      if (defaultValues && value && checkboxRef.current) {
        const initialCheck = defaultValues.some(x => x === value);
        if (initialCheck) {
          checkboxRef.current.checked = initialCheck;
        }
      }
    }, [defaultValues, checkboxRef]);

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
          ref={e => {
            if (typeof extendRef === 'function') {
              extendRef(e);
            }
            checkboxRef.current = e;
          }}
          onChange={props?.onChange}
          onKeyDown={e => onKeyDown(e)}
          value={value}
          {...otherProps}
        />
        <span className={createClassVariant('checkbox', 'label')} css={checkboxLabelStyle}>
          {children}
        </span>
      </label>
    );
  }),
  {
    displayName: 'Checkbox',
    Group: CheckboxGroup
  }
);
