import { css, jsx } from '@emotion/react';
import { createClassVariant } from '@jdesignlab/theme';
import React, { useId, isValidElement } from 'react';
import type { Direction, SpacingMap, SpacingToken, StyleProps } from '../types';

export const setMarginStyle = (styleprops: StyleProps, mqMaxWidth: string, children?: React.ReactNode) => {
  const listItem = children as React.ReactElement[];
  const { spacing = 'md', responsive = false, direction = 'horizontal' } = styleprops;
  const spacingMap: SpacingMap = {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px'
  };

  const marginStyle = (spacingMap: SpacingMap, spacing: SpacingToken) => {
    return {
      horizontal: css({
        marginTop: 0,
        marginRight: 0,
        marginLeft: Object.keys(spacingMap).includes(spacing) ? `${spacingMap[spacing]}` : spacing,
        marginBottom: 0
      }),
      vertical: css({
        marginTop: Object.keys(spacingMap).includes(spacing) ? `${spacingMap[spacing]}` : spacing,
        marginRight: 0,
        marginLeft: 0,
        marginBottom: 0
      }),
      none: css({
        marginTop: 0,
        marginRight: 0,
        marginLeft: 0,
        marginBottom: 0
      })
    };
  };

  const clone = (element: React.ReactElement<any, string | React.JSXElementConstructor<any>>, props: any) => {
    return jsx(element.type, {
      key: element.key,
      ...element.props,
      ...props
    });
  };

  const cloneElements = listItem?.map((element, index) => {
    const margin = marginStyle(spacingMap, spacing);

    const setMargin = (direction: Direction, mediaQuery: string) => {
      if (index) {
        if (responsive && direction === 'horizontal') {
          return css(margin[direction], {
            [mediaQuery]: margin['vertical']
          });
        }

        return css(margin[direction]);
      }
    };
    if (isValidElement(element)) {
      return clone(element, {
        key: `jdesign-stack-${useId()}`,
        className: `${createClassVariant('stack', 'item')}`,
        role: 'listitem',
        display: 'inline-block',
        css: setMargin(direction, mqMaxWidth)
      });
    }
  });

  return cloneElements;
};
