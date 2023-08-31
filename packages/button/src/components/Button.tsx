/** @jsxImportSource @emotion/react */
import { callHandler } from '@jdesignlab/utils';
import { useContext } from 'react';
import * as Style from '../styles';
import { css } from '@emotion/react';
import { useRipple } from '@jdesignlab/react-utils';
import { ThemeContext } from '@jdesignlab/j-provider';
import { ButtonProps } from '../types';

export const Button = (props: ButtonProps) => {
  const themePreset = useContext(ThemeContext);
  const {
    children,
    type = 'button',
    variant = 'solid',
    onClick = () => {},
    disabled = false,
    size = 'md',
    full = false,
    color,
    as = 'button',
    ...restProps
  } = props;
  const { createRipple, rippleNodes } = useRipple();
  const Component = as;

  const buttonStyle = [
    Style.basic,
    Style.createVariant(themePreset, variant, disabled, color),
    Style.createSize(size, full)
  ];

  return (
    <Component
      css={buttonStyle}
      onClick={disabled || callHandler(createRipple, onClick)}
      type={type}
      role="button"
      disabled={disabled}
      {...restProps}
    >
      {props.icon}
      {children}
      {disabled || rippleNodes}
    </Component>
  );
};

Button.displayName = 'Button';
