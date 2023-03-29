/** @jsxImportSource @emotion/react */
import type { InputProps } from '../types';
import { inputWrapperStyle, inputRightStyle, inputStyle, inputPrependStyle } from '../styles';
import { Close, Eye } from '@jdesignlab/react-icons';
import { InputContext } from '../context';
import React, { useState, useId, useRef } from 'react';
import { Label } from './InputLabel';
import { Message } from './InputMessage';

// TODO move to 'react-utils' package
const hasComponent = (children: React.ReactElement | React.ReactElement[], componentName: string) => {
  let having = false;
  if (children) {
    if (Array.isArray(children)) {
      children.forEach((child: React.ReactElement) => {
        const tagName = typeof child.type === 'function' ? child.type.name : child.type;
        if (tagName === componentName) having = true;
      });
    } else {
      const tagName = typeof children.type === 'function' ? children.type.name : children.type;
      if (tagName === componentName) having = true;
    }
  }
  return having;
};

export const TextInput = (props: InputProps) => {
  const id = useId();
  const inputRef = useRef(null);
  const [value, setValue] = useState<string | number | readonly string[] | undefined>(props.value);
  const [statusError, setStatusError] = useState<boolean>(false);
  const { children, size, clearable = props.clearable ? true : false, ...otherProps } = props;
  const hasIcon = props.icon ? true : false;
  const hasLabel = hasComponent(children as React.ReactElement[], 'Label');
  const hasMessage = hasComponent(children as React.ReactElement[], 'Message');

  const inputStyleProps = {
    size: props.size || 'md',
    hasLabel,
    hasIcon,
    width: props.width,
    clearable,
    type: props.type
    // color: props.color
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const initValue = () => {
    setValue('');
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
      <div css={inputWrapperStyle(hasMessage, props.width)}>
        <input
          {...otherProps}
          type={props.type}
          id={id}
          ref={inputRef}
          // size={props.maxLength || 100}
          css={inputStyle(inputStyleProps)}
          value={value}
          onChange={onChangeInput}
        />
        {hasIcon && <span css={inputPrependStyle}>{props.icon}</span>}
        {children && Array.isArray(children) ? children?.map(child => child) : children}
        {clearable ? (
          <div css={inputRightStyle} onClick={initValue} className="input_close">
            <Close width={16} height={16} />
          </div>
        ) : (
          props.type === 'password' && (
            <div css={inputRightStyle} onClick={togglePasswordType} className="input_eye">
              <Eye width={16} height={16} />
            </div>
          )
        )}
      </div>
    </InputContext.Provider>
  );
};

TextInput.displayName = 'TextInput';
TextInput.Label = Label;
TextInput.Message = Message;
