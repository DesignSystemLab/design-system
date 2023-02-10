import type { ColorToken, HEX } from '@jdesignlab/theme';
import type { ApperanceType, ResizeType, StyleType, TextAreaProps } from './textareaTypes';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { getColorByToken, hexToRgba } from '@jdesignlab/theme';

export const useStyle = (textareaProps: TextAreaProps) => {
    const defaultColorToken: ColorToken = 'grey-darken4';
    const focusColorToken: ColorToken = 'blue-lighten2';
    const defaultHoverColorToken: ColorToken = 'grey-lighten3';
    const defaultWidth = 480;

    const defaultStyle: StyleType = {
        maxWidth: 640,
        maxHeight: 480,
        resize: 'smart',
        appearance: 'standard',
        color: defaultColorToken
    };

    const [maxWidth, setMaxWidth] = useState(defaultStyle.maxWidth);
    const [maxHeight, setMaxHeight] = useState(defaultStyle.maxHeight);
    const [resize, setResize] = useState<ResizeType>(defaultStyle.resize);
    const [appearance, setAppearance] = useState<ApperanceType>(defaultStyle.appearance);
    const [color, setColor] = useState<HEX>(getColorByToken(defaultColorToken));

    useEffect(() => {
        setMaxWidth(textareaProps.maxWidth ?? defaultStyle.maxWidth);
        setMaxHeight(textareaProps.maxHeight ?? defaultStyle.maxHeight);
        setResize(textareaProps.resize ?? defaultStyle.resize);
        setAppearance(textareaProps.appearance ?? defaultStyle.appearance);
        setColor(getColorByToken(textareaProps.color ?? defaultStyle.color));
    }, [textareaProps.resize, textareaProps.maxHeight, textareaProps.maxWidth, textareaProps.appearance, textareaProps.color]);

    //generate text-area styles
    const styleTheme = {
        defaultTextAreaStyle() {
            return css({
                color: color,
                fontSize: '16px',
                padding: '8px',
                width: `${defaultWidth}px`,
                border: `1px solid ${color}`,
                borderRadius: '12px',
                outlineColor: `2px solid ${getColorByToken(focusColorToken)}`,
                '&:hover': {
                    backgroundColor: `${hexToRgba(getColorByToken(defaultHoverColorToken), 0.5)}`
                },
                '&:focus-visible': {
                    outline: `2px solid ${getColorByToken(focusColorToken)}`,
                    borderStyle: 'none'
                }
            });
        },
        appearanceStyle() {
            if (appearance === 'standard') {
                return css({
                    cursor: 'none',
                    border: `1px solid ${color}`,
                    backgroundColor: `#fff`
                });
            }
            return css({
                cursor: 'pointer',
                borderStyle: 'none',
                backgroundColor: 'transparent'
            });
        },
        sizeStyle() {
            return css({
                maxWidth: `${maxWidth}px`,
                maxHeight: `${maxHeight}px`
            });
        },
        reSizeStyle() {
            switch (resize) {
                case 'horizontal':
                    return css({
                        resize: 'horizontal'
                    });
                case 'vertical':
                    return css({
                        resize: 'vertical'
                    });
                case 'none':
                    return css({
                        resize: 'none'
                    });
                default:
                    return css({
                        resize: 'none'
                    });
            }
        }
    };

    const textAreaStyle = [styleTheme.defaultTextAreaStyle(), styleTheme.reSizeStyle(), styleTheme.sizeStyle(), styleTheme.appearanceStyle()];

    return { textAreaStyle };
};
