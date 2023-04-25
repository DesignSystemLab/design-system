import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { getColorByToken } from '@jdesignlab/theme';
import type { Placement, PopoverProps } from './types';
import type { HEX } from '@jdesignlab/theme';

export const useStyle = (
  styleProps: Pick<PopoverProps, 'placement' | 'arrow'> & {
    isOpen: boolean;
    trigger?: {
      width: number;
      height: number;
    };
  }
) => {
  const { placement, arrow } = styleProps;
  const defaultPlacement: Placement = placement ?? 'top';
  const defaultColor = getColorByToken('grey-lighten4');
  const defaultBorderColor = getColorByToken('grey-lighten2');
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (styleProps.trigger?.width && styleProps.trigger.height) {
      setWidth(styleProps.trigger.width + 16);
      setHeight(styleProps.trigger.height + 8);
    }
  }, [styleProps.trigger]);

  const styleTheme = {
    inlineBlock() {
      return css({
        display: 'inline-block'
      });
    },
    positionRelative() {
      return css({
        position: 'relative'
      });
    },
    visuallyHidden() {
      return css(
        {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: '0'
        },
        { important: true }
      );
    },
    defaultPopoverContainer(color: HEX, placement: Placement) {
      switch (placement) {
        case 'left':
          return css({
            position: 'absolute',
            padding: '8px',
            width: '260px',
            marginTop: '12px',
            top: `${-height * 3}px`,
            right: 0,
            background: `${color}`,
            borderRadius: '4px'
          });
        case 'right':
          return css({
            position: 'absolute',
            padding: '8px',
            width: '260px',
            marginTop: '12px',
            top: `${-height * 3}px`,
            left: `0`,
            transform: `translateX(0)`,
            background: `${color}`,
            borderRadius: '4px'
          });
        case 'top':
          return css({
            position: 'absolute',
            padding: '8px',
            width: '260px',
            marginTop: '12px',
            top: `${-height * 3}px`,
            left: `${-width / 1.2}px`,
            transform: `translateX(0)`,
            background: `${color}`,
            borderRadius: '4px'
          });
        default:
          return css({
            position: 'absolute',
            padding: '8px',
            width: '260px',
            marginTop: '12px',
            left: `${width}px`,
            transform: `translateX(0)`,
            background: `${color}`,
            borderRadius: '4px'
          });
      }
    },
    popoverSide(arrow: boolean | undefined, placement: Placement, color: HEX) {
      if (arrow) {
        return css({
          '$::after': {
            content: 'none',
            display: 'none'
          }
        });
      }
      switch (placement) {
        case 'right':
          return css({
            '&::after': {
              content: '""',
              position: 'absolute',
              right: '0',
              top: '50%',
              width: '0',
              height: '0',
              border: '8px solid transparent',
              borderLeftColor: `${color}`,
              borderRight: '0',
              marginTop: '-8px',
              marginRight: '-8px'
            }
          });
        case 'bottom':
          return css({
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '0',
              left: '50%',
              width: '0',
              height: '0',
              border: '8px solid transparent',
              borderTopColor: `${color}`,
              borderBottom: 0,
              marginLeft: '-8px',
              marginBottom: '-8px'
            }
          });
        case 'left':
          return css({
            '&::after': {
              content: '""',
              position: 'absolute',
              left: '0',
              top: '50%',
              width: '0',
              height: '0',
              border: '8px solid transparent',
              borderRightColor: `${color}`,
              borderLeft: '0',
              marginTop: '-8px',
              marginLeft: '-8px'
            }
          });
        default:
          return css({
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '0',
              left: '50%',
              width: '0',
              height: '0',
              border: '8px solid transparent',
              borderBottomColor: `${color}`,
              borderTop: '0',
              marginTop: '-8px',
              marginRight: '0',
              marginBottom: '0',
              marginLeft: '-8px'
            }
          });
      }
    },
    popoverHeader(color: HEX) {
      return css({
        fontSize: '8px',
        fontWeight: 700,
        textAlign: 'left',
        borderBottom: `1px solid ${color}`,
        wordWrap: 'break-word'
      });
    },
    popoverBody(color: HEX) {
      return css({
        padding: '8px 0',
        fontSize: '16px',
        textAlign: 'left',
        borderBottom: `1px solid ${color}`,
        wordWrap: 'break-word'
      });
    },
    popoverFooter() {
      return css({
        padding: '8px 0',
        fontSize: '16px',
        textAlign: 'left',
        minHeight: '16px',
        wordWrap: 'break-word'
      });
    }
  };

  return {
    headerStyleProps: styleTheme.popoverHeader(defaultBorderColor),
    bodyStyleProps: styleTheme.popoverBody(defaultBorderColor),
    footerStyleProps: styleTheme.popoverFooter(),
    positionRelative: styleTheme.positionRelative(),
    inlineBlock: styleTheme.inlineBlock(),
    mainStyleProps: styleProps.isOpen
      ? [
          styleTheme.defaultPopoverContainer(defaultColor, defaultPlacement),
          styleTheme.popoverSide(arrow, defaultPlacement, defaultColor)
        ]
      : styleTheme.visuallyHidden()
  };
};
