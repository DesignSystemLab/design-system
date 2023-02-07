import React, { useEffect } from 'react';
import { useState } from 'react';
import { InputProps, RadioProps } from './radioTypes';

export const useRadio = (radioProps: RadioProps) => {
    const keyOfInputProps: string[] = ['id', 'name', 'value', 'onClick', 'onChange'];
    const [readonly, setReadonly] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
    const isUnavailable = readonly || disabled;

    useEffect(() => {
        setReadonly(!!radioProps.readonly);
        setDisabled(!!radioProps.disabled);
    }, []);

    const getInputProps = () => {
        let inputProps: { [key: string]: string | ((event: React.ChangeEvent<HTMLInputElement>) => void) } = {
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

        if (!!children) {
            React.Children.forEach(children, child => {
                return typeof child === 'string' ? (propsChild += child) : (propsChild += child?.props?.children);
            });
        }
        return propsChild;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isUnavailable) {
            event.preventDefault();
            return;
        }
    };

    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isUnavailable) {
            event.preventDefault();
            return;
        }
    };

    return { getInputProps, getPropsChild, readonly, disabled };
};
