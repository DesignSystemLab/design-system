import { css } from '@emotion/react';
import type { FlexMap, StyleProps } from '../types';

export const createStackStyle = (styleProps: StyleProps) => {
  const { align = 'center', justify = 'start', direction = 'horizontal', wrap = false } = styleProps;

  const flexMap: FlexMap = {
    stretch: 'stretch',
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around'
  };

  const stackStyle = css({
    padding: '8px',
    display: 'flex'
  });

  const flexStyle = () => {
    if (wrap) {
      return css({ flexWrap: 'wrap' });
    }
    return css({ flexWrap: 'nowrap' });
  };

  const directionStyle = () => {
    if (direction === 'horizontal') {
      return css({
        flexDirection: 'row'
      });
    }
    return css({
      flexDirection: 'column'
    });
  };

  const flexAlignAndJustifyStyle = css({
    alignItems: `${flexMap[align]}`,
    justifyContent: `${flexMap[justify]}`
  });

  return [stackStyle, flexStyle(), flexAlignAndJustifyStyle, directionStyle()];
};
