/** @jsxImportSource @emotion/react */
import React, { useId, useRef, useContext, forwardRef } from 'react';
import { ThemeContext } from '@jdesignlab/j-provider';
import { inputWrapperStyle, inputRightStyle, inputStyle, inputPrependStyle } from '../styles';
import { Close, Eye } from '@jdesignlab/react-icons';
import { hasComponent } from '@jdesignlab/react-utils';
import { createClassVariant } from '@jdesignlab/theme';
import { InputContext } from '../context';
import { Label } from './InputLabel';
import { Message } from './InputMessage';
import { combineClassNames } from '@jdesignlab/utils';
import { VISIBLE_ICON_CLASSNAME, CLEARABLE_ICON_CLASSNAME } from '../constants';
import type { InputProps } from '../types';

type ExtendedInputProps = InputProps & { Label?: typeof Label; Message?: typeof Message };
export const TextInput = Object.assign(
  forwardRef<HTMLInputElement, ExtendedInputProps>((props, extendRef) => {
    const themePreset = useContext(ThemeContext);
    const id = useId();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { children, size, className, clearable = false, ...otherProps } = props;
    const hasIcon = props.icon ? true : false;
    const hasLabel = hasComponent(children as React.ReactElement[], 'Label');
    const hasMessage = hasComponent(children as React.ReactElement[], 'Message');

    const inputStyleProps = {
      themePreset,
      size: props.size || 'md',
      hasLabel,
      hasIcon,
      width: props.width,
      clearable,
      type: props.type
    };

    const initValue = () => {
      if (inputRef.current) {
        const el: HTMLInputElement = inputRef.current;
        el.value = '';
      }
    };
    const togglePasswordType = () => {
      if (props.type === 'password') {
        props.type = 'text';
      } else {
        props.type = 'password';
      }
    };

    return (
      <InputContext.Provider value={{ id, clearable }}>
        <div
          css={inputWrapperStyle(hasMessage, props.width)}
          className={combineClassNames(createClassVariant('input', 'message'), className)}
        >
          <input
            {...otherProps}
            type={props.type}
            id={id}
            ref={e => {
              if (typeof extendRef === 'function') {
                extendRef(e);
              }
              inputRef.current = e;
            }}
            css={inputStyle(inputStyleProps)}
            className={`${createClassVariant('input', 'input')}`}
          />
          {hasIcon && <span css={inputPrependStyle}>{props.icon}</span>}
          {children && Array.isArray(children) ? children?.map(child => child) : children}
          {clearable ? (
            <div
              css={inputRightStyle}
              onClick={initValue}
              className={combineClassNames(createClassVariant('input', 'icon'), CLEARABLE_ICON_CLASSNAME)}
            >
              <Close width={16} height={16} />
            </div>
          ) : (
            props.type === 'password' && (
              <div
                css={inputRightStyle}
                onClick={togglePasswordType}
                className={combineClassNames(createClassVariant('input', 'icon'), VISIBLE_ICON_CLASSNAME)}
              >
                <Eye width={16} height={16} />
              </div>
            )
          )}
        </div>
      </InputContext.Provider>
    );
  }),
  {
    displayName: 'TextInput',
    Label: Label,
    Message: Message
  }
);
