import { css } from '@emotion/react';
import { hexToRgba, getColorByToken } from '@jdesignlab/theme';
import { DEFAULT_BORDER_COLOR } from './constants';
import type { ColorToken } from '@jdesignlab/theme';
import type { Size, Variant, Direction, FlexMap, FlexToken } from './types';

export const createCardVariant = (
  size: Size,
  variant: Variant,
  backgroundColor: ColorToken,
  borderColor: ColorToken
) => {
  const hexBorderColor = getColorByToken(borderColor);

  const baseStyle = css({
    boxSizing: 'border-box',
    padding: '12px 24px'
  });

  const variantStyle = () => {
    switch (variant) {
      case 'filled':
        return css({
          boxSizing: 'border-box',
          boxShadow: 'none',
          backgroundColor: `${getColorByToken(backgroundColor)}`
        });
      case 'outlined':
        return css({ boxSizing: 'border-box', border: `1px solid ${hexBorderColor}` });
      default:
        return css({
          boxSizing: 'border-box',
          boxShadow: `0 3px 6px ${hexToRgba(hexBorderColor, 0.16)}, 0 3px 6px ${hexToRgba(hexBorderColor, 0.2)}`
        });
    }
  };

  const sizeStyle = () => {
    switch (size) {
      case 'lg':
        return css({
          maxWidth: '720px'
        });
      case 'sm':
        return css({
          maxWidth: '200px'
        });
      // medium
      default:
        return css({
          maxWidth: '440px'
        });
    }
  };

  return [baseStyle, variantStyle(), sizeStyle()];
};

export const createBorderDirection = (direction: Direction, borderColor: ColorToken) => {
  if (direction === 'horizontal') {
    return css({
      boxSizing: 'border-box',
      borderRight: `1px solid ${borderColor}`,
      maxWidth: '33%',
      wordWrap: 'break-word'
    });
  }

  return css({
    borderTop: `1px solid ${borderColor}`,
    wordWrap: 'break-word',
    maxWidth: '100%',
    boxSizing: 'border-box'
  });
};

export const createDivider = (direction: Direction) => {
  const dividerColor = getColorByToken(DEFAULT_BORDER_COLOR);

  if (direction === 'vertical') {
    return css({
      width: '100%',
      height: 0,
      margin: '12px 0',
      borderTop: `${dividerColor} solid 1px`
    });
  }
  return css({
    height: '64px',
    width: '1px',
    margin: '0 4px',
    borderLeft: `${dividerColor} solid 1px`
  });
};

export const createFlexStyle = (justify: FlexToken, align: FlexToken, direction: Direction) => {
  const flexMap: FlexMap = {
    stretch: 'stretch',
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around'
  };

  return css({
    display: 'flex',
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    alignItems: `${flexMap[align]}`,
    justifyContent: `${flexMap[justify]}`,
    borderRadius: '8px'
  });
};
