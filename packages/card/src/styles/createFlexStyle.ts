import { css } from '@emotion/react';
import type { Direction, FlexMap, FlexToken } from '../types';

const createFlexStyle = (justify: FlexToken, align: FlexToken, direction: Direction) => {
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

export default createFlexStyle;
