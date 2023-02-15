/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { ColorToken, Color } from '@jdesignlab/theme';
import type { InputVariant, InputProps, InputSize } from './input-types';
import { getColorByToken, hexToRgba } from '@jdesignlab/theme';

const inputDefaultColorToken = 'lightBlue-accent1';
const inputSizeSet: InputSize[] = ['sm', 'md', 'lg', 'xl'];

export const inputWrapperStyle = css({
    position: 'relative',
    display: 'inline-block'
});

export const inputRightStyle = css({
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '16px',
    top: 'calc(50% + 1px)',
    transform: 'translateY(-50%)'
});

const insideLabel = {
    top: 'calc(50% + 1px)',
    transform: 'translateY(-50%)',
    fontSize: '16px'
};
const upsideLabel = {
    top: 0,
    background: 'white', // TODO white?
    fontSize: '14px',
    color: `${getColorByToken('grey-darken2')}`
};

export const inputLabelStyle = css({
    ...upsideLabel,
    position: 'absolute',
    display: 'block',
    transform: 'translateY(-50%)',
    left: '16px',
    transition: 'all .2s'
});

export const inputVariantStyle = (variant: InputVariant, size: InputSize, label: string | undefined, placeholder: string | undefined) => {
    const sizeIndex = inputSizeSet.indexOf(size);
    const defaultStyle = {
        'box-sizing': 'border-box',
        fontSize: `${sizeIndex < 2 ? '15px' : '16px'}`,
        outline: 0,
        borderRadius: '5px',
        width: '100%',
        // '&:placeholder-shown +.label': insideLabel, // label
        '&:focus + .label': upsideLabel,
        '&::placeholder': { color: `${label ? 'transparent' : 'grey-base'}` } // placeholder (label있을땐 투명처리)
    };

    const inlineInputStyle = {
        paddingTop: `${label ? (sizeIndex + 8) * 1.5 : 0}px`,
        '& + .label': {
            background: 'none',
            top: `${(sizeIndex + 8) * 1.5}px`
        },
        '&:focus': {
            '&::placeholder': { color: `${getColorByToken('grey-base')}` },
            '& + .label': { background: 'none' },
            borderBottom: `solid ${getColorByToken(inputDefaultColorToken)} 2px`,
            paddingTop: `${label ? (sizeIndex + 4) * 1 : 0}px`
        }
    };

    switch (variant) {
        case 'filled':
            return {
                ...defaultStyle,
                ...inlineInputStyle,
                borderRadius: '5px 5px 0 0',
                border: 'none',
                borderBottom: `solid ${getColorByToken('grey-darken3')} 1px`,
                background: `${getColorByToken('grey-lighten3')}`
            };
        case 'solo':
            return {
                ...defaultStyle,
                ...inlineInputStyle,
                border: 'none',
                boxShadow: '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)'
            };
        default:
            // outline
            return {
                ...defaultStyle,
                border: `solid ${getColorByToken('grey-lighten1')} 1px`,
                '&:focus': {
                    '&::placeholder': { color: `${getColorByToken('grey-base')}` },
                    border: `solid ${getColorByToken(inputDefaultColorToken)} 2px`
                }
            };
    }
};

export const inputSizeStyle = (size: InputSize, hasRight: boolean) => {
    const sizeIndex = inputSizeSet.indexOf(size);
    // const paddingHorizonal = `${(sizeIndex + 6) * 2}px`;
    const paddingHorizonal = '16px';
    return {
        paddingInlineStart: paddingHorizonal,
        paddingInlineEnd: `${hasRight ? '30px' : paddingHorizonal}`,
        height: `${(sizeIndex + 5) * 8}px`
    };
};
