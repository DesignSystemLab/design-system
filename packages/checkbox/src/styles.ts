import { css } from '@emotion/react';
import { ThemePreset } from '@jdesignlab/j-provider';
import { getColorByToken, setTextColorByBackground } from '@jdesignlab/theme';
import type { ColorToken } from '@jdesignlab/theme';

export const checkboxWrapperStyle = () => css({
    position: 'relative',
    display: 'inline-block',
    marginRight: '6px',
    '&:hover > input[type="checkbox"]': {
      opacity: '0.15',
      '&:focus': {
        opacity: '0.2'
      }
    }
  });

export const checkboxInputStyle = (themePreset: ThemePreset, color?: ColorToken) => {
  const parsedColor = color ? getColorByToken(color) : themePreset.color.primary;
  return css({
    appearance: 'none',
    zIndex: '-1',
    position: 'absolute',
    left: '-10px',
    top: '-8px',
    display: 'block',
    margin: '0',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    boxShadow: 'none',
    outline: 'none',
    opacity: '0',
    transform: 'scale(1)',
    // pointerEvents: 'none',
    transition: 'opacity 0.3s, transform 0.2s',
    '&:focus': {
      opacity: '0.3'
    },
    '&:active': {
      opacity: '1',
      transform: 'scale(0)',
      transition: 'transform 0s, opacity 0s'
    },
    '&:disabled': {
      opacity: '0',
      '& + span': {
        color: 'lightgray',
        cursor: 'not-allowed',
        '&::before': {
          borderColor: 'currentcolor'
        }
      }
    },
    '&:checked': {
      backgroundColor: parsedColor,
      '&:disabled + span::before': {
        borderColor: 'transparent',
        bacgkgroundColor: 'currentColor'
      }
    },
    '&:checked + span::before': {
      borderColor: parsedColor,
      backgroundColor: parsedColor
    },
    '&:checked + span::after': {
      borderColor: setTextColorByBackground(parsedColor)
    }
  });
};

export const checkboxLabelStyle = () => css({
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    cursor: 'pointer',
    '&::before': {
      content: '""',
      display: 'inline-block',
      boxSizing: 'border-box',
      margin: '3px 6px 3px 1px',
      border: 'solid 2px',
      borderColor: 'rgba(0, 0, 0, 0.6)',
      borderRadius: '2px',
      width: '18px',
      height: '18px',
      verticalAlign: 'top',
      transition: 'border-color 0.2s, background-color 0.2s'
    },
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '3px',
      left: '1px',
      width: '10px',
      height: '5px',
      border: 'solid 2px transparent',
      borderRight: 'none',
      borderTop: 'none',
      transform: 'translate(3px, 4px) rotate(-45deg)'
    }
  });
