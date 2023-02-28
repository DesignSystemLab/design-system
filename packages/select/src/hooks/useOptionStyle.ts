import { css } from '@emotion/react';
import { getColorByToken, HEX, hexToRgba } from '@jdesignlab/theme';
import { useContext } from 'react';
import type { StyleProps } from '../types';
import { SelectContext } from './SelectContext';

export const useOptionStyle = (styleProps: StyleProps) => {
  const color = getColorByToken(styleProps.color);
  const listColor = getColorByToken('shades-black');
  const { isOpen } = useContext(SelectContext);

  const listBackgroud = () => {
    return css({ background: `${hexToRgba(color, 0.8)}` });
  };

  const listStyle = () => {
    if (isOpen) {
      return css({
        listStyle: 'none',
        padding: '0',
        margin: '0',
        width: '274px',
        border: `1px solid ${color}`,
        borderRadius: '12px',
        marginTop: '4px',
        '& li': {
          color: `${listColor}`,
          padding: '4px 8px',
          borderRadius: '8px',
          '&:hover': {
            cursor: 'pointer'
          }
        }
      });
    }
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
  };

  return {
    listStyle: listStyle(),
    listBackgroud: listBackgroud()
  };
};
