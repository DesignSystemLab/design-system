import { css, jsx } from '@emotion/react';
import React, { useId, isValidElement } from 'react';
import type { StackProps, SpacingToken, SpacingMap, Direction, FlexToken, FlexMap } from './stackTypes';

export const useStyle = (stackProps: StackProps) => {
  const { align, direction, justify, spacing, wrap, responsive } = stackProps;
  /**
   * @todo: Will be add to 'utils' package
   */
  const mqMaxWidth = `@media (max-width: 480px)`;

  const children = stackProps.children as React.ReactElement[];
  const defaultSpacing: SpacingToken = spacing ?? 'md';
  const defaultDirection: Direction = direction ?? 'horizontal';
  const defaultAlignItem: FlexToken = align ?? 'center';
  const defaultJustifyItem: FlexToken = justify ?? 'start';
  const defaultResponsive: boolean = !!responsive;
  const defaultWrap: boolean = !!wrap;

  const flexMap: FlexMap = {
    stretch: 'stretch',
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around'
  };

  const spacingMap: SpacingMap = {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px'
  };

  const styleTheme = {
    defaultStackStyle() {
      return css({
        as: stackProps.as && 'div',
        padding: '8px',
        display: 'flex'
      });
    },
    flexWrapStyle(isWarp: boolean) {
      if (isWarp) {
        return css({ flexWrap: 'wrap' });
      }
      return css({ flexWrap: 'nowrap' });
    },
    directionStyle(direction: Direction) {
      if (direction === 'horizontal') {
        return css({
          flexDirection: 'row'
        });
      }
      return css({
        flexDirection: 'column'
      });
    },
    alignAndJustifyStyle(align: FlexToken, justify: FlexToken) {
      return css({
        alignItems: `${flexMap[align]}`,
        justifyContent: `${flexMap[justify]}`
      });
    },
    setMarginStyle(spacingMap: SpacingMap, spacing: SpacingToken) {
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
    },
    responsiveStyle(isResponsive: boolean, mediaQuery: string) {
      if (isResponsive) {
        return css({
          [mediaQuery]: {
            flexDirection: 'column'
          }
        });
      }
    }
  };

  const clone = (element: React.ReactElement<any, string | React.JSXElementConstructor<any>>, props: any) => {
    return jsx(element.type, {
      key: element.key,
      ...element.props,
      ...props
    });
  };

  const cloneElements = children?.map((element, index) => {
    const marginStyle = styleTheme.setMarginStyle(spacingMap, defaultSpacing);

    const setMargin = (direction: Direction, mediaQuery: string) => {
      if (index) {
        if (defaultResponsive && direction === 'horizontal') {
          return css(marginStyle[defaultDirection], {
            [mediaQuery]: marginStyle['vertical']
          });
        }

        return css(marginStyle[defaultDirection]);
      }
    };
    if (isValidElement(element)) {
      return clone(element, {
        key: `jdesign-stack-${useId()}`,
        className: `stack-item-${useId()}`,
        display: 'inline-block',
        css: setMargin(defaultDirection, mqMaxWidth)
      });
    }
  });

  const styleProps = [
    styleTheme.defaultStackStyle(),
    styleTheme.flexWrapStyle(defaultWrap),
    styleTheme.directionStyle(defaultDirection),
    styleTheme.alignAndJustifyStyle(defaultAlignItem, defaultJustifyItem),
    styleTheme.responsiveStyle(defaultResponsive, mqMaxWidth)
  ];
  return { styleProps, cloneElements };
};
