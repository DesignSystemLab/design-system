/** @jsxImportSource @emotion/react */
import React, { Children, isValidElement, useEffect } from 'react';
import { css } from '@emotion/react';
import { getColorByToken } from '@jdesignlab/theme';
import type { BoxProps } from './boxTypes';

export const Box = (BoxProps: BoxProps) => {
    const { children, ...styleProps } = BoxProps;
    const { backgroundColor = 'shades-white', color = 'grey-darken4', center = false } = styleProps;

    const style = {
        ...styleProps,
        backgroundColor: getColorByToken(backgroundColor),
        color: getColorByToken(color)
    };

    const boxStyle = center ? { ...style, display: 'flex', justifyContent: 'center', alignItems: 'center' } : style;

    return <div css={css(boxStyle)}>{Children.count(children) ? children : null}</div>;
};
