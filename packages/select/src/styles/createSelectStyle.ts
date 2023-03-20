import { css } from '@emotion/react';
import { getColorByToken, hexToRgba } from '@jdesignlab/theme';
import { useContext } from 'react';
import type { StyleProps } from '../types';
import { SelectContext } from '../hooks/SelectContext';

export const createSelectStyle = (styleProps?: StyleProps) => {
  const color = getColorByToken(styleProps?.color || 'green-base');
  const listColor = getColorByToken('shades-black');
  const disabledColor = getColorByToken('grey-lighten1');
  const { open } = useContext(SelectContext);

  const activeOptionStyle = () => {
    return css({
      color: `${listColor}`,
      padding: '4px 8px',
      borderRadius: '8px',
      '&:focus': {
        backgroundColor: `${hexToRgba(color, 0.8)}`,
        outline: `${color}`
      },
      '&:hover': {
        cursor: 'pointer'
      }
    });
  };

  const notfoundStyle = () => {
    return css({
      color: `${listColor}`,
      padding: '4px 8px',
      borderRadius: '8px',
      '&:focus': {
        backgroundColor: `${hexToRgba(color, 0.8)}`,
        outline: `${color}`
      },
      '&:hover': {
        cursor: 'not-allowed'
      }
    });
  };
  const disabledOptionStyle = () => {
    return css({
      color: `${disabledColor}`,
      padding: '4px 8px',
      borderRadius: '8px',
      '&:focus': {
        background: 'none',
        outline: `${disabledColor}`
      },
      '&:hover': {
        cursor: 'not-allowed'
      }
    });
  };

  const listStyle = () => {
    if (open) {
      return css({
        listStyle: 'none',
        padding: '0',
        margin: '0',
        width: '274px',
        border: `1px solid ${color}`,
        borderRadius: '12px',
        marginTop: '4px'
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
    disable: disabledOptionStyle(),
    active: activeOptionStyle(),
    notfound: notfoundStyle()
  };
};
