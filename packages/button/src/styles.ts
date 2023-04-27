import type { ColorToken } from '@jdesignlab/theme';
import { css } from '@emotion/react';
import type { ButtonVariant, ButtonSize } from './types';
import { getColorByToken, setTextColorByBackground } from '@jdesignlab/theme';
import { ThemePreset } from '@jdesignlab/j-provider';

const buttonSizeSet: ButtonSize[] = ['sm', 'md', 'lg', 'xl'];

export const buttonDefaultStyle = css({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  flexShrink: '0',
  borderRadius: '4px',
  letterSpacing: '1.5px',
  overflow: 'hidden',
  minWidth: 'fit-content',
  whiteSpace: 'nowrap',
  '&:active': {
    transform: 'translateY(2px)'
  }
});

export const buttonSizeStyle = (size: ButtonSize, full: boolean) => {
  const sizeIndex = buttonSizeSet.indexOf(size);
  return {
    width: full ? '100%' : 'auto',
    height: `${(sizeIndex + 3) * 8}px`,
    fontSize: (sizeIndex + 6) * 2,
    padding: `0 ${(sizeIndex + 3) * 4}px`
  };
};

export const buttonVariantStyle = (
  themePreset: ThemePreset,
  variant: ButtonVariant,
  disabled: boolean,
  color?: ColorToken
) => {
  let parsedColor = color ? getColorByToken(color) : themePreset.color.primary;

  let disabledStyle;
  if (disabled) {
    parsedColor += themePreset.effect.disabledOpacity;
    disabledStyle = {
      cursor: 'not-allowed',
      color: themePreset.color.disabled,
      '&:active': {
        transform: 'translateY(0)'
      }
    };
  } else {
    disabledStyle = { cursor: 'pointer', color: parsedColor };
  }

  const hasShadow = {
    boxShadow: '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)'
  };

  const switchBackground = {
    background: 'none',
    '&:hover': { background: `${parsedColor}${themePreset.effect.hoverGhostOpacity}` }
  };

  switch (variant) {
    case 'outline':
      return {
        ...disabledStyle,
        ...switchBackground,
        ...hasShadow,
        border: `solid ${parsedColor} 1px`
      };
    case 'ghost':
      return {
        ...disabledStyle,
        ...switchBackground,
        border: 'none'
      };
    case 'link':
      return {
        ...disabledStyle,
        background: 'none',
        textDecoration: 'underline',
        border: 'none'
      };
    case 'unstyled':
      return {
        ...disabledStyle,
        color: disabled
          ? themePreset.color.fontColor + themePreset.effect.disabledOpacity
          : themePreset.color.fontColor,
        background: 'none',
        border: 'none',
        fontWeight: 'normal'
      };
    default: // solid
      return {
        ...disabledStyle,
        ...hasShadow,
        backgroundColor: parsedColor,
        color: setTextColorByBackground(parsedColor),
        border: 'none',
        '&:hover': { background: `${parsedColor}${themePreset.effect.hoverSolidOpacity}` }
      };
  }
};
