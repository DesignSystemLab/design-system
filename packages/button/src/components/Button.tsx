/** @jsxImportSource @emotion/react */
import { callHandler } from '@jdesignlab/utils';
import type { ButtonProps } from '../types';
import React, { useContext } from 'react';
import { buttonDefaultStyle, buttonVariantStyle, buttonSizeStyle } from '../styles';
import { css } from '@emotion/react';
import { useRipple } from '@jdesignlab/react-utils';
import { ThemeContext } from '@jdesignlab/j-provider';
import type { Ripple } from '@jdesignlab/react-utils';

export const Button = (props: ButtonProps) => {
  const themePreset = useContext(ThemeContext);
  const { children, onClick, disabled, as = 'button', ...otherProps } = props;
  const { createRipple, rippleNodes } = useRipple();
  const Component = as;

  const buttonStyle = css(buttonDefaultStyle, {
    ...buttonSizeStyle(props.size ?? 'md', props.full ?? false),
    ...buttonVariantStyle(themePreset, props.variant ?? 'solid', disabled ?? false, props.color)
  });

  return (
    <Component
      css={buttonStyle}
      onClick={callHandler(createRipple, disabled && onClick ? () => {} : onClick)}
      type={props.type ?? 'button'}
      role="button"
      disabled={!!disabled}
      {...otherProps}
    >
      {props.icon}
      {children}
      {disabled || rippleNodes}
    </Component>
  );
};

Button.displayName = 'Button';
Button.defaultProps = {
  variant: 'solid',
  size: 'md'
};
