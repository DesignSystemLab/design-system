/** @jsxImportSource @emotion/react */
import type { InputVariant, InputProps, InputRightProps, InputLabelProps, InputSize } from './input-types';
import { getColorByToken, hexToRgba, ClearableIcon, VisibleIcon, UnvisibleIcon } from '@jdesignlab/theme';
import { inputWrapperStyle, inputRightStyle, inputLabelStyle, inputVariantStyle, inputSizeStyle } from './input-style';
import { useState, useId } from 'react';

export const TextInput = (props: InputProps) => {
  const id = useId();
  const { variant, inputSize, label, placeholder, append, clearable, visible } = props;
  const [type, setType] = useState<string>(props['type']);
  const [value, setValue] = useState<any>(props['defaultValue']);
  const inputStyle = {
    ...inputVariantStyle(variant || 'outline', inputSize || 'md', label, placeholder),
    ...inputSizeStyle(inputSize || 'md', append ? true : false)
  };
  const { children, ...otherProps } = props;
  return (
    <>
      <div className="input_wrapper" css={inputWrapperStyle}>
        <input {...otherProps} type={type} className="input" css={inputStyle} id={'test'} />
        {Array.isArray(children) ? children?.map(child => child) : children}
      </div>
    </>
  );
};

const Label = (props: InputLabelProps) => {
  const { children } = props;
  return (
    <label className="label" css={inputLabelStyle} htmlFor={'test'}>
      {children}
    </label>
  );
};

const Right = (props: InputRightProps) => {
  const { icon, children } = props;
  const onClick = () => {
    alert('clearable 준비중');
  };
  return (
    <span className="append" css={inputRightStyle} onClick={onClick}>
      {icon ? icon : children}
    </span>
  );
};

TextInput.Label = Label;
TextInput.Right = Right;
