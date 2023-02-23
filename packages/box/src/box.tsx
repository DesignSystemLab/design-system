/** @jsxImportSource @emotion/react */
import React, { Children, isValidElement, useEffect } from 'react';
import { css, jsx } from '@emotion/react';
import { getColorByToken } from '@jdesignlab/theme';
import type { BoxProps } from './boxTypes';

export const Box = (BoxProps: BoxProps) => {
    const { children, as = 'div', ...styleProps } = BoxProps;
    const { backgroundColor = 'shades-white', color = 'grey-darken4', center = false } = styleProps;

    const style = {
        ...styleProps,
        backgroundColor: getColorByToken(backgroundColor),
        color: getColorByToken(color)
    };

    return jsx(as, { css: css(style) }, children);
};
