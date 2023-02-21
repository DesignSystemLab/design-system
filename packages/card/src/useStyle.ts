import { css } from '@emotion/react';
import { hexToRgba, getColorByToken } from '@jdesignlab/theme';
import type { CardProps, Direction, FlexMap, FlexToken, Size, Variant } from './cardTypes';

type StyleProps = Omit<CardProps, 'children' | 'as'>;
export const useStyle = (styleProps: StyleProps) => {
  const { align, justify, color, direction, size, variant, divider } = styleProps;
  const borderColor = color ? getColorByToken(color) : getColorByToken('grey-base');
  const defaultColor = color ? getColorByToken(color) : getColorByToken('lightBlue-lighten5');
  const defaultAlign = align ?? 'start';
  const defaultJustify = justify ?? 'start';
  const defaultDirection = direction ?? 'vertical';
  const defaultSize = size ?? 'md';
  const defaultVariant = variant ?? 'elevated';
  const isDivider = divider ?? false;

  const flexMap: FlexMap = {
    stretch: 'stretch',
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around'
  };

  const styleTheme = {
    defaultCardStyle(align: FlexToken, justify: FlexToken) {
      return css({
        display: 'flex',
        alignItems: `${flexMap[align]}`,
        justifyContent: `${flexMap[justify]}`,
        borderRadius: '8px'
      });
    },
    flexDirection(direction: Direction) {
      if (direction === 'horizontal') {
        return css({
          flexDirection: 'row'
        });
      }
      return css({
        flexDirection: 'column'
      });
    },
    cardSize(size: Size) {
      switch (size) {
        case 'lg':
          return css({
            fontSize: '20px',
            padding: '18px'
          });
        case 'sm':
          return css({
            fontSize: '12px',
            padding: '8px'
          });
        default:
          return css({
            fontSize: '16px',
            padding: '8px'
          });
      }
    },
    variantStyle(variant: Variant) {
      switch (variant) {
        case 'filled':
          return css({
            boxShadow: 'none',
            backgroundColor: `${defaultColor}`
          });
        case 'outline':
          return css({ border: `1px solid ${borderColor}` });
        default:
          return css({
            boxShadow: `0 3px 6px ${hexToRgba(borderColor, 0.16)}, 0 3px 6px ${hexToRgba(borderColor, 0.2)}`
          });
      }
    },
    bodyStyle(direction: Direction, divider: boolean) {
      if (divider) {
        if (direction === 'horizontal') {
          return css({
            boxSizing: 'border-box',
            borderRight: `1px solid ${borderColor}`,
            wordWrap: 'break-word'
          });
        }

        return css({
          boxSizing: 'border-box',
          borderTop: `1px solid ${borderColor}`,
          wordWrap: 'break-word'
        });
      }
      return css({ padding: '0', borderStyle: 'none', wordWrap: 'break-word' });
    }
  };

  return {
    baseStyle: [
      styleTheme.defaultCardStyle(defaultAlign, defaultJustify),
      styleTheme.flexDirection(defaultDirection),
      styleTheme.variantStyle(defaultVariant),
      styleTheme.cardSize(defaultSize)
    ],
    flexDirection: styleTheme.flexDirection(defaultDirection),
    cardSize: styleTheme.cardSize(defaultSize),
    variantStyle: styleTheme.variantStyle(defaultVariant),
    bodyStyle: styleTheme.bodyStyle(defaultDirection, isDivider)
  };
};
