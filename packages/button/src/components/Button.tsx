/** @jsxImportSource @emotion/react */
import { callHandler } from '@jdesignlab/utils';
import type { ButtonProps } from '../types';
import React, { useContext } from 'react';
import type { Ripple } from '@jdesignlab/react-utils';
import { buttonDefaultStyle, buttonVariantStyle, buttonSizeStyle } from '../styles';
import { css } from '@emotion/react';
import { useRipple } from '@jdesignlab/react-utils';
import { ThemeContext } from '@jdesignlab/j-provider';

export const Button = (props: ButtonProps) => {
  const themePreset = useContext(ThemeContext);
  const { children, onClick, disabled, ...otherProps } = props;
  const { createRipple, rippleNodes } = useRipple();

  const buttonStyle = css(buttonDefaultStyle, {
    ...buttonSizeStyle(props.size ?? 'md', props.full ?? false),
    ...buttonVariantStyle(themePreset, props.variant ?? 'solid', disabled ?? false, props.color)
  });

  return (
    <button
      css={buttonStyle}
      onClick={callHandler(createRipple, disabled ? () => {} : onClick)}
      type={props.type ?? 'button'}
      tabIndex={!disabled ? 0 : -1}
      role="button"
      disabled={!!disabled}
      aria-disabled={!!disabled}
      {...otherProps}
    >
      {props.icon}
      {children}
      {disabled || rippleNodes}
    </button>
  );
};

Button.displayName = 'Button';
Button.defaultProps = {
  variant: 'solid',
  size: 'md'
};
