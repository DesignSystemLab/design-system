/** @jsxImportSource @emotion/react */
import type { InputLabelProps } from '../types';
import { useContext } from 'react';
import { inputLabelStyle } from '../styles';
import { InputContext } from '../context';
import { createClassVariant } from '@jdesignlab/theme';
import { combineClassNames } from '@jdesignlab/utils';

export const Label = (props: InputLabelProps) => {
  const { id } = useContext(InputContext);
  const { children, className, ...otherProps } = props;

  return (
    <label
      className={combineClassNames(createClassVariant('input', 'label'), className)}
      css={inputLabelStyle}
      htmlFor={id}
      {...otherProps}
    >
      {children}
    </label>
  );
};

Label.displayName = 'TextInput.Label';
