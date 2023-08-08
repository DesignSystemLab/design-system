import { css } from '@emotion/react';
import { Color, ColorToken, getColorByToken, hexToRgba, setTextColorByBackground } from '@jdesignlab/theme';
import type { TabVariant, TabSize } from './types';

export const tabListStyle = (baseColor: ColorToken, full: boolean, variant: TabVariant, size: TabSize) => {
  let variantStyle = {};
  switch (variant) {
    case 'enclosed':
      variantStyle = {};
      break;
    case 'underline':
      const backgroundColor = getColorByToken(baseColor);
      variantStyle = {
        borderRadius: '4px 4px 0 0 ',
        background: backgroundColor,
        color: setTextColorByBackground(backgroundColor)
      };
      break;
    default:
      variantStyle = {};
  }

  return css({
    ...variantStyle,
    display: 'flex',
    flexDirection: 'row',
    gap: '2px',
    width: '100%',
    '& .tab': {
      flex: full ? 1 : 0,
      textAlign: 'center'
    }
  });
};

export const tabTriggerStyle = (
  isActivated: boolean,
  variant: TabVariant,
  size: TabSize,
  baseColor: ColorToken,
  accentColor: ColorToken,
  disabled: boolean | undefined
) => {
  let variantStyle = {};
  const defaultEnclosed = {
    border: isActivated ? `solid ${getColorByToken(accentColor)} 1px` : 'none',
    borderRadius: '5px 5px 0 0 ',
    position: 'relative',
    bottom: '-1px',
    borderBottom: isActivated ? `solid 1px white` : `solid ${getColorByToken(accentColor)} 1px`,
    background: isActivated ? 'white' : hexToRgba(getColorByToken(baseColor), 0.3),
    color: disabled
      ? getColorByToken('disabled')
      : isActivated
      ? getColorByToken(accentColor)
      : getColorByToken('grey-darken2')
  };
  switch (variant) {
    case 'enclosed':
      variantStyle = defaultEnclosed;
      break;
    case 'underline':
      variantStyle = {
        color: disabled
          ? getColorByToken('disabled')
          : isActivated
          ? getColorByToken(accentColor)
          : setTextColorByBackground(getColorByToken(baseColor)),
        borderBottom: isActivated ? `solid 4px ${getColorByToken(accentColor)}` : 'none'
      };
      break;
    case 'unstyled':
      variantStyle = {
        color: disabled
          ? getColorByToken('disabled')
          : isActivated
          ? getColorByToken(accentColor)
          : getColorByToken(baseColor)
      };
      break;
    default:
      variantStyle = defaultEnclosed;
  }

  let sizeStyle = {};
  switch (size) {
    case 'sm':
      sizeStyle = {
        fontSize: '16px',
        padding: '8px 16px 4px'
      };
      break;
    case 'lg':
      sizeStyle = {
        fontSize: variant === 'unstyled' ? '28px' : '24px',
        padding: '16px 26px 12px'
      };
      break;
    default: // md
      sizeStyle = {
        fontSize: '20px',
        padding: '12px 20px 6px'
      };
      break;
  }

  return css({
    ...variantStyle,
    ...sizeStyle,
    fontWeight: isActivated ? '700' : 'normal',
    cursor: disabled ? 'not-allowed' : 'pointer'
  });
};

export const tabContentStyle = (variant: TabVariant, lazy: boolean, accentColor: ColorToken, baseColor: ColorToken) => {
  return css({
    border: variant === 'enclosed' ? `solid ${getColorByToken(accentColor)} 1px` : 'none',
    padding: variant === 'unstyled' ? '4px 18px 18px' : '18px',
    background: variant === 'underline' ? hexToRgba(getColorByToken(baseColor), 0.1) : 'white',
    display: lazy ? 'block' : 'none',
    '&.tab_active': {
      display: 'block'
    }
  });
};
