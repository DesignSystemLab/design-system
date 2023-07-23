import { css } from '@emotion/react';
import type { InputStyleProps, InputSize } from './types';
import { getColorByToken } from '@jdesignlab/theme';

const inputSizeSet: InputSize[] = ['sm', 'md', 'lg'];

export const inputWrapperStyle = (hasMessage: boolean, width?: number) => {
  return css({
    position: 'relative',
    display: 'inline-block',
    width: width ? `${width}px` : '100%',
    marginBottom: hasMessage ? '24px' : '12px'
  });
};

export const inputRightStyle = css({
  cursor: 'pointer',
  position: 'absolute',
  right: '14px',
  top: 'calc(50% + 1px)',
  transform: 'translateY(-50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '12px',
  height: '12px',
  padding: '10px',
  color: getColorByToken('grey-darken2'),
  borderRadius: '50%',
  ':hover': {
    background: getColorByToken('grey-lighten4'),
    color: getColorByToken('grey-darken4')
  }
});

export const inputPrependStyle = css({
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  left: '16px',
  top: 'calc(50% + 2px)',
  transform: 'translateY(-50%)'
});

export const inputMessageStyle = (consistent?: boolean) => {
  return css({
    position: 'absolute',
    transform: `${consistent ? 'none' : 'translateY(-10px)'}`,
    opacity: `${consistent ? 1 : 0}`,
    fontSize: '14px',
    color: `${getColorByToken('grey-base')}`,
    transition: 'all .15s'
  });
};

const upsideLabel = {
  top: 0,
  lineHeight: '0.3',
  fontSize: '14px',
  background: 'white',
  padding: '0 2px',
  color: `${getColorByToken('grey-darken2')}`
};

export const inputLabelStyle = css({
  ...upsideLabel,
  position: 'absolute',
  left: '16px',
  display: 'block',
  transform: 'translateY(-50%)',
  transition: 'all .15s'
});

export const inputStyle = ({ themePreset, size, hasLabel, hasIcon, clearable, type, color }: InputStyleProps) => {
  const parsedColor = color ? getColorByToken(color) : themePreset.color.primary;
  const paddingX = 16;
  let sizeIndex = inputSizeSet.indexOf(size);
  if (sizeIndex === -1) sizeIndex = 1;

  return css({
    fontSize: `${sizeIndex < 2 ? '15px' : '16px'}`,
    outline: 0,
    borderRadius: `4px`,
    width: `100%`,
    paddingInlineStart: `${hasIcon ? paddingX + 32 + 'px' : paddingX + 'px'}`,
    paddingInlineEnd: `${clearable || type === 'password' ? paddingX + 24 + 'px' : paddingX + 'px'}`,
    height: `${(sizeIndex + 5) * 8}px`,
    border: `solid ${getColorByToken('border')} 1px`,
    boxSizing: 'border-box',

    // focus
    '&:focus': {
      '&::placeholder': { color: `${getColorByToken('border')}` },
      border: `solid ${parsedColor} 2px`
    },

    // placeholder (label있을땐 안보이게 투명)
    // '&::placeholder': { color: `${hasLabel ? 'transparent' : getColorByToken('grey-base')}` },
    '&::placeholder': { color: getColorByToken('grey-base') },

    // label 이동
    '&:not([value=""]) ~ label': { ...upsideLabel, marginLeft: 0 },
    '&:focus ~ label': { ...upsideLabel, marginLeft: 0, color: parsedColor },

    // message
    '&:focus ~ div.input_message': {
      transform: 'translateY(0px)',
      opacity: 1
    },

    // disabled
    '&[disabled]': {
      background: `${getColorByToken('grey-lighten4')}`,
      color: `${getColorByToken('grey-lighten1')}`,
      cursor: 'not-allowed'
    },
    '&[disabled] ~ label': {
      background: `${getColorByToken('grey-lighten4')}`,
      color: `${getColorByToken('grey-lighten1')}`
    }
  });
};
