/** @jsxImportSource @emotion/react */

import {css} from '@emotion/react';
import variantPresetColors from '@jdesignlab/theme';
import type {ColorToken, Color} from '@jdesignlab/theme';
import {ButtonSize, ButtonState} from './buttonTypes';

type ButtonProps = {
    children: React.ReactNode;
    state?: ButtonState;
    size?: ButtonSize;
    color?: ColorToken;
};

const Button = ({state, size, children, color}: ButtonProps) => {
    const getTokens = (colorToken: ColorToken) => {
        return colorToken.split('.');
    };

    return (
        <button
            css={[
                color
                    ? css`
                          background-color: ${variantPresetColors[getTokens(color)[0]][getTokens(color)[1]]};
                      `
                    : css`
                          background-color: ${variantPresetColors.green.base};
                      `,
                buttonBaseStyle,
                sizeTheme[size || 'md'],
                stateTheme[state || 'fill']
            ]}
        >
            {children}
        </button>
    );
};

const buttonBaseStyle = css`
    font-weight: bold;
    width: fit-content;
    border-style: none;
    border-radius: 12px;
    color: #fff;
    cursor: pointer;
`;

const sizeTheme = {
    sm: css`
        font-size: 8px;
        padding: 8px;
    `,
    md: css`
        font-size: 12px;
        padding: 12px 8px;
    `,
    lg: css`
        font-size: 18px;
        padding: 16px 12px;
    `,
    xl: css`
        font-size: 24px;
        padding: 16px;
    `
};

const stateTheme = {
    fill: css`
        &:hover {
            opacity: 0.5;
        }
    `,
    ghost: css`
        color: red;
        border-style: none;
        background-color: transparent;
        &:hover {
            opacity: 1;
        }
    `,
    outline: css`
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
        &:hover {
            opacity: 0.5;
        }
    `,
    disabled: css`
        background-color: ${variantPresetColors.grey.lighten3};
        color: ${variantPresetColors.grey.base};
        cursor: not-allowed;
        &:hover {
            opacity: 1;
        }
    `
};

export default Button;
