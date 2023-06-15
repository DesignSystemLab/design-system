import { useContext } from 'react';
import { css } from '@emotion/react';
import { getColorByToken, hexToRgba } from '@jdesignlab/theme';
import { SelectContext } from '../hooks/SelectContext';
import { BORDER_RADIUS, BORDER_COLOR, FONT_COLOR, DISABLED_COLOR } from '../constants';
import type { StyleProps } from '../types';

export const createSelectStyle = (styleProps?: StyleProps) => {
  const borderRadius = `${BORDER_RADIUS}px`;
  const color = styleProps?.color || null;
  const selectColor = getColorByToken(color || FONT_COLOR);
  const borderColor = getColorByToken(color || BORDER_COLOR);
  const disabledColor = getColorByToken(DISABLED_COLOR);
  const { open } = useContext(SelectContext);

  const wrapperStyle = css({
    position: 'relative',
    maxWidth: '200px'
  });

  const activeOptionStyle = () => {
    return css({
      color: `${getColorByToken(FONT_COLOR)}`,
      padding: '4px 8px',
      '&:focus': {
        backgroundColor: `${hexToRgba(selectColor, 0.4)}`,
        outline: `${selectColor}`
      },
      '&:hover': {
        cursor: 'pointer'
      }
    });
  };

  const notfoundStyle = () => {
    return css({
      color: `${getColorByToken(FONT_COLOR)}`,
      padding: '4px 8px',
      borderRadius,
      '&:focus': {
        backgroundColor: `${hexToRgba(selectColor, 0.8)}`,
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
      borderRadius,
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
        visibility: 'visible',
        maxHeight: '512px',
        backgroundColor: '#ffffff',
        zIndex: 1,
        boxSizing: 'border-box',
        position: 'absolute',
        top: '36px',
        display: 'inline-block',
        listStyle: 'none',
        padding: '0',
        margin: '0',
        width: '100%',
        border: `1px solid ${borderColor}`,
        borderRadius,
        boxShadow: '0px 4px 14px 0px rgba(0,0,0,0.1)',
        overflowY: 'auto',
        transition: 'max-height 0.3s ease-in-out',
        '&::-webkit-scrollbar': {
          width: '8px'
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '4px',
          background: hexToRgba(borderColor, 0.3)
        }
      });
    }
    return css(
      {
        visibility: 'hidden',
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: '0',
        maxHeight: '0'
      },
      { important: true }
    );
  };

  return {
    listStyle: listStyle(),
    disable: disabledOptionStyle(),
    active: activeOptionStyle(),
    notfound: notfoundStyle(),
    wrapperStyle
  };
};
