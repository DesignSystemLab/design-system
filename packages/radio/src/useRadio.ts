import React from 'react';
import { RadioProps } from './radioTypes';
import { callHandler } from '@jdesignlab/utils';
import type { EventType } from '@jdesignlab/utils';

export const useRadio = (radioProps: RadioProps) => {
    let { readonly, disabled } = radioProps;
    const keyOfInputProps: string[] = ['id', 'name', 'value'];
    const isUnavailable = !!readonly || !!disabled;

    const getInputProps = () => {
        const inputProps: { [key: string]: string | ((event: EventType) => void) } = {
            onChange: callHandler(handleChange, radioProps.onChange),
            onClick: callHandler(handleClick, radioProps.onClick)
        };

        for (const key in radioProps) {
            if (keyOfInputProps.includes(key)) {
                inputProps[key] = radioProps[key];
            }
        }

        return inputProps;
    };

    const getPropsChild = (children: React.ReactElement | undefined) => {
        let propsChild = '';
        if (children) {
            React.Children.forEach(children, child => {
                return typeof child === 'string' ? (propsChild += child) : (propsChild += child?.props?.children);
            });
        }
        return propsChild;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isUnavailable) {
            event.preventDefault();
        }
    };

    const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
        if (isUnavailable) {
            event.preventDefault();
        }
    };

    return { getInputProps, getPropsChild, disabled };
};
