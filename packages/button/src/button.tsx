/** @jsxImportSource @emotion/react */
import variantPresetColors from '@jdesignlab/theme';
import type {ColorToken, Color} from '@jdesignlab/theme';
import {css} from '@emotion/react';
import PropTypes from 'prop-types';

type HEX = `#${string}`;
type TButtonSize = 'sm' | 'md' | 'lg' | 'xl';
type TButtonVariant = 'solid' | 'outline' | 'ghost' | 'link' | 'unstyled';
interface IButtonProps {
    variant?: TButtonVariant;
    size?: TButtonSize;
    color?: ColorToken;
    children: string;
}

// utils
const colorTokenParser = (color: ColorToken) => {
    color = color || buttonDefaultColorToken;
    const defaultVariant = 'base';
    const baseColor = color.includes('-') ? color.split('-')[0] : color;
    const colorVariant = color.includes('-') ? color.split('-')[1] : defaultVariant;
    if (baseColor && variantPresetColors[baseColor]) {
        const parsedColor = variantPresetColors[baseColor][colorVariant];
        return parsedColor;
    }
};

const buttonDefaultColorToken: ColorToken = 'teal-lighten3';
const whiteish: HEX = colorTokenParser('grey-lighten5');

const buttonSizeSet: TButtonSize[] = ['sm', 'md', 'lg', 'xl'];

const buttonDefaultStyle = {
    backgroundColor: colorTokenParser(buttonDefaultColorToken),
    border: 'none',
    borderRadius: '4px',
    whiteSpace: 'nowrap',
    cursor: 'pointer'
};

const buttonVariantStyle = (variant: TButtonVariant, color: ColorToken) => {
    const parsedColor: HEX = colorTokenParser(color);
    const switchBackground = {
        background: 'none',
        color: parsedColor
    };

    switch (variant) {
        case 'outline':
            return {
                ...switchBackground,
                border: `solid ${parsedColor} 1px`,
                '&:hover': css({background: parsedColor, color: whiteish})
            };
            break;
        case 'ghost':
            return {
                ...switchBackground,
                '&:hover': css({background: parsedColor, color: whiteish})
            };
            break;
        case 'link':
            return {
                ...switchBackground,
                '&:hover': css({color: parsedColor, textDecoration: 'underline'})
            };
            break;
        case 'unstyled':
            return {
                background: 'none'
            };
            break;
        default: // solid
            return {
                backgroundColor: parsedColor,
                color: whiteish
            };
            break;
    }
};

const buttonSizeStyle = (size: TButtonSize | undefined) => {
    const sizeIndex = buttonSizeSet.indexOf(size);
    return {
        height: (sizeIndex + 3) * 8,
        fontSize: (sizeIndex + 6) * 2,
        padding: `0 ${(sizeIndex + 3) * 4}px`
    };
};

const Button = ({children, variant, size, color}: IButtonProps) => {
    const buttonStyle = {
        ...buttonDefaultStyle,
        ...buttonVariantStyle(variant, color || buttonDefaultColorToken),
        ...buttonSizeStyle(size)
    };
    return <button css={{...buttonStyle}}>{children}</button>;
};

Button.displayName = 'Button';
Button.propTypes = {
    variant: PropTypes.string,
    size: PropTypes.oneOf(buttonSizeSet),
    children: PropTypes.string.isRequired
};
Button.defaultProps = {
    variant: 'solid',
    size: 'md',
    children: 'button'
};

export default Button;
