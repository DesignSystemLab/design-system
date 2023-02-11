import React, { useEffect, useState } from 'react';
import { RadioProps } from './radioTypes';

export const useRadio = (radioProps: RadioProps) => {
    let { readonly, disabled } = radioProps;
    const keyOfInputProps: string[] = ['id', 'name', 'value'];
    const isUnavailable = !!readonly || !!disabled;

    const getInputProps = () => {
        const inputProps: { [key: string]: string | ((event: React.ChangeEvent<HTMLInputElement>) => void) | ((event: React.MouseEvent<HTMLInputElement>) => void) } = {
            onChange: handleChange,
            onClick: handleClick
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

        if (radioProps.onChange) {
            radioProps.onChange(event);
        }
    };

    const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
        if (isUnavailable) {
            event.preventDefault();
        }
        if (radioProps.onClick) {
            radioProps.onClick(event);
        }
    };

    return { getInputProps, getPropsChild, disabled };
};
