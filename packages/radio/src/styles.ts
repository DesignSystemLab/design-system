import { css } from '@emotion/react';
import type { HEX } from '@jdesignlab/theme';
import type { RadioSize } from './types';

export const createLabel = (size: RadioSize, fontColor: HEX) => {
  const labelStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: `${fontColor}`,
    boxSizing: 'border-box',
    padding: '0 4px',
    whiteSpace: 'nowrap',
    transition: 'border 0.5s ease-in-out',
    '& span': {
      cursor: 'pointer',
      verticalAlign: 'middle',
      margin: '0 4px',
      '&::before': {
        content: '""',
        verticalAlign: 'top',
        marginRight: '4px',
        display: 'inline-block',
        boxSizing: 'border-box',
        border: `solid 2px ${fontColor}`,
        borderRadius: '50%',
        width: '18px',
        height: '18px',
        transition: 'border-color 0.2s, background-color 0.2s'
      },
      '&::after': {
        visibility: 'hidden',
        content: '""',
        display: 'block',
        position: 'absolute',
        top: '4px',
        left: '12px',
        width: '4px',
        height: '4px',
        backgroundColor: '#fff',
        border: 'solid 2px #fff',
        borderRadius: '50%'
      }
    }
  });

  const labelFontSize = () => {
    switch (size) {
      case 'lg':
        return css({
          fontSize: '18px',
          lineHeight: '18px',
          '& span': {
            '&::before': {
              width: '20px',
              height: '20px'
            },
            '&::after': {
              top: '4px',
              left: '12px',
              width: '8px',
              height: '8px'
            }
          }
        });
      case 'md':
        return css({
          fontSize: '16px',
          lineHeight: '16px',
          '& span': {
            '&::before': {
              width: '16px',
              height: '16px'
            }
          }
        });
      default:
        return css({
          fontSize: '14px',
          lineHeight: '12px',
          '& span': {
            '&::before': {
              width: '12px',
              height: '12px'
            },
            '&::after': {
              top: '2px',
              left: '10px',
              width: '4px',
              height: '4px'
            }
          }
        });
    }
  };

  return [labelStyle, labelFontSize()];
};

export const createRadio = (color: HEX, disabledColor: HEX, disabled: boolean, size: RadioSize) => {
  const radioStyle = css({
    position: 'absolute',
    display: 'block',
    borderRadius: '50%',
    cursor: 'pointer',
    appearance: 'none',
    verticalAlign: 'middle',
    opacity: '0',
    transition: 'opacity 0.3s, transform 0.2s',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    '&:checked': {
      opacity: '0'
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: '0'
    },
    '&:checked + span::after': {
      visibility: 'visible'
    },
    '&:checked + span::before': {
      borderColor: `${color}`,
      backgroundColor: `${color}`
    },
    '&:hover': {
      cursor: 'pointer',
      visibility: 'visible',
      opacity: '1'
    },
    '&:focus-visible': {
      outline: `2px solid ${color}`
    }
  });

  const disabledStyle = () => {
    if (disabled) {
      return css({
        opacity: '0',
        cursor: 'not-allowed',
        '&:hover': {
          cursor: 'not-allowed',
          visibility: 'visible',
          opacity: '0'
        },
        '& + span': {
          color: `${disabledColor}`,
          cursor: 'not-allowed',
          '&::before': {
            borderColor: 'currentcolor'
          }
        },
        '&:checked': {
          borderStyle: `none`
        }
      });
    }
    return css({
      cursor: 'pointer'
    });
  };

  const radioSizeStyle = () => {
    switch (size) {
      case 'sm':
        return css({
          width: '24px',
          height: '24px',
          left: '2px',
          top: '-6px',
          borderWidth: '1px'
        });
      case 'lg':
        return css({
          width: '40px',
          height: '40px',
          left: '-2px',
          top: '-10px',
          borderWidth: `4px solid ${color}`,
          '&:focus-visible': {
            outline: `4px solid ${color}`
          }
        });
      default:
        return css({
          width: '32px',
          height: '32px',
          left: '0',
          top: '-8px',
          borderWidth: `2px solid ${color}`,
          '&:checked': {
            borderWidth: `4px solid ${color}`
          },
          '&:focus-visible': {
            outline: `2px solid ${color}`
          }
        });
    }
  };

  return [radioStyle, disabledStyle(), radioSizeStyle()];
};

export const wrapper = () => {
  return css({
    display: 'inline-block',
    position: 'relative'
  });
};
