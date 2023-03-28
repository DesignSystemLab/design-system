import { css } from '@emotion/react';
import { ColorToken, getColorByToken } from '@jdesignlab/theme';
import type { StyleProps } from '../types';

export const createTextareaStyle = (styleProps: Required<StyleProps>, placholderColor: ColorToken) => {
  const color = getColorByToken(styleProps.color);
  const placeholderColor = getColorByToken(placholderColor);

  const defaultTextareaStyle = () => {
    return css({
      color,
      fontSize: '16px',
      padding: '8px 16px',
      width: `${styleProps.width}px`,
      height: `${styleProps.height}px`,
      border: `1px solid ${color}`,
      borderRadius: '12px',
      outlineColor: `2px solid ${color}`,
      boxSizing: 'border-box',
      '&::placeholder': {
        fontSize: '16px',
        color: `${placeholderColor}`
      },
      '&:hover': {
        cursor: 'auto'
      },
      '&:focus-visible': {
        outline: `2px solid ${color}`,
        borderStyle: 'none'
      }
    });
  };

  const appearanceStyle = () => {
    if (styleProps.appearance === 'standard') {
      return css({
        cursor: 'none',
        border: `1px solid ${getColorByToken(styleProps.color)}`,
        backgroundColor: `#fff`
      });
    }
    return css({
      cursor: 'pointer',
      borderStyle: 'none',
      backgroundColor: 'transparent'
    });
  };

  const defaultSizeStyle = () => {
    return css({
      maxWidth: `${styleProps.maxWidth}px`,
      maxHeight: `${styleProps.maxHeight}px`
    });
  };

  const resizeStyle = () => {
    if (styleProps.resize === 'smart') {
      return css({
        resize: 'none'
      });
    }
    return css({
      resize: styleProps['resize']
    });
  };

  return [defaultTextareaStyle(), resizeStyle(), defaultSizeStyle(), appearanceStyle()];
};
