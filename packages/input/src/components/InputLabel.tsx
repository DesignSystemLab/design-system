/** @jsxImportSource @emotion/react */
import type { InputLabelProps } from '../types';
import { useContext } from 'react';
import { inputLabelStyle } from '../styles';
import { InputContext } from '../context';

export const Label = (props: InputLabelProps) => {
  const { id } = useContext(InputContext);
  const { children, ...otherProps } = props;
  return (
    <label className="input_label" css={inputLabelStyle} htmlFor={id} {...otherProps}>
      {children}
    </label>
  );
};

Label.displayName = 'TextInput.Label';
