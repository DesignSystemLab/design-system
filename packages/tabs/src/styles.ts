import { css } from '@emotion/react';
import { getColorByToken, hexToRgba } from '@jdesignlab/theme';
import type { TabVariant, TabSize } from './types';

export const tabListStyle = (full: boolean, variant: TabVariant, size: TabSize) => {
  let variantStyle = {};
  switch (variant) {
    case 'enclosed':
      variantStyle = {};
      break;
    default: // underline
      variantStyle = {
        borderRadius: '4px 4px 0 0 ',
        background: getColorByToken('purple-darken3'),
        color: getColorByToken('shades-white')
      };
      break;
  }

  let sizeStyle = {};
  switch (size) {
    case 'sm':
      sizeStyle = {};
      break;
    case 'lg':
      sizeStyle = {};
      break;
    default: // md
      sizeStyle = {};
      break;
  }

  return css({
    ...variantStyle,
    ...sizeStyle,
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
  disabled: boolean | undefined
) => {
  let variantStyle = {};
  switch (variant) {
    case 'enclosed':
      variantStyle = {
        border: ' solid lightgray 1px',
        borderRadius: '5px 5px 0 0 ',
        position: 'relative',
        bottom: '-1px',
        borderBottom: isActivated ? `solid 1px white` : 'solid lightgray 1px',
        background: isActivated ? 'white' : hexToRgba(getColorByToken('grey-lighten3'), 0.3),
        color: disabled ? 'lightgray' : 'black'
      };
      break;
    default: // underline
      variantStyle = {
        color: disabled ? 'lightgray' : 'white',
        borderBottom: isActivated ? `solid 4px ${getColorByToken('pink-lighten2')}` : 'none'
      };
      break;
  }

  let sizeStyle = {};
  switch (size) {
    case 'sm':
      sizeStyle = {
        padding: '8px 16px 4px'
      };
      break;
    case 'lg':
      sizeStyle = {
        padding: '16px 26px 12px'
      };
      break;
    default: // md
      sizeStyle = {
        padding: '12px 20px 6px'
      };
      break;
  }

  return css({
    ...variantStyle,
    ...sizeStyle,
    cursor: disabled ? 'not-allowed' : 'pointer'
  });
};

export const tabContentStyle = (variant: TabVariant, lazy: boolean) => {
  let variantStyle = {
    border: variant === 'enclosed' ? 'solid lightgray 1px' : 'none',
    display: lazy ? 'block' : 'none',
    '&.tab_active': {
      display: 'block'
    }
  };

  return css({
    ...variantStyle,
    padding: '18px'
  });
};
