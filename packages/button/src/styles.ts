import type { ColorToken } from '@jdesignlab/theme';
import { css } from '@emotion/react';
import type { ButtonVariant, ButtonSize } from './types';
import { getColorByToken, setTextColorByBackground } from '@jdesignlab/theme';
import { ThemePreset } from '@jdesignlab/j-provider';

const buttonSizeSet: ButtonSize[] = ['sm', 'md', 'lg', 'xl'];

export const basic = css({
  position: 'relative',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  flexShrink: '0',
  borderRadius: '4px',
  letterSpacing: '1.5px',
  overflow: 'hidden',
  minWidth: 'fit-content',
  whiteSpace: 'nowrap',
  lineHeight: '1.5'
});

export const createSize = (size: ButtonSize, full: boolean) => {
  const sizeIndex = buttonSizeSet.indexOf(size);
  return css({
    width: full ? '100%' : 'auto',
    height: `${(sizeIndex + 3) * 8}px`,
    fontSize: (sizeIndex + 6) * 2,
    padding: `0 ${(sizeIndex + 3) * 4}px`
  });
};

export const createVariant = (
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
      color: themePreset.color.disabled
    };
  } else {
    disabledStyle = { cursor: 'pointer', color: parsedColor };
  }

  const hasShadow = {
    boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset'
  };

  const switchBackground = {
    background: 'none',
    '&:hover': { background: `${parsedColor}${themePreset.effect.hoverGhostOpacity}` }
  };

  switch (variant) {
    case 'outline':
      return css({
        ...disabledStyle,
        ...switchBackground,
        ...hasShadow,
        border: `solid ${parsedColor} 1px`
      });
    case 'ghost':
      return css({
        ...disabledStyle,
        ...switchBackground,
        border: 'none'
      });
    case 'link':
      return css({
        ...disabledStyle,
        background: 'none',
        textDecoration: 'underline',
        border: 'none'
      });
    case 'unstyled':
      return css({
        ...disabledStyle,
        color: disabled
          ? themePreset.color.fontColor + themePreset.effect.disabledOpacity
          : themePreset.color.fontColor,
        background: 'none',
        border: 'none',
        fontWeight: 'normal'
      });
    default: // solid
      return css({
        ...disabledStyle,
        ...hasShadow,
        backgroundColor: parsedColor,
        color: setTextColorByBackground(parsedColor),
        border: 'none',
        '&:hover': { background: `${parsedColor}${themePreset.effect.hoverSolidOpacity}` }
      });
  }
};
