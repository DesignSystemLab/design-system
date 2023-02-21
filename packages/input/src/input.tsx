/** @jsxImportSource @emotion/react */
import type { InputProps, InputRightProps, InputLabelProps } from './input-types';
import { inputWrapperStyle, inputRightStyle, inputLabelStyle, inputVariantStyle, inputSizeStyle } from './input-style';
import { ClearableIcon } from '@jdesignlab/theme';
import React, { useState, useId, useContext, useRef } from 'react';

// TODO
const labelDetector = (el: React.ReactElement) => {
    const tagName = typeof el.type === 'function' ? el.type.name : el.type;
    if (tagName === 'Label') {
        return true;
    } else {
        return false;
    }
};

const InputContext = React.createContext({
    id: '',
    setValue: (value: string) => {},
    clearable: false
});

export const TextInput = (props: InputProps) => {
    const id = useId();
    const inputRef = useRef(null);
    const [value, setValue] = useState<string | number | readonly string[] | undefined>(props.value);
    const { children, ...otherProps } = props;
    const clearable = props.clearable || false;

    let hasLabel = false;
    let hasRight = false;

    if (Array.isArray(children)) {
        children.forEach((child: React.ReactElement) => {
            const tagName = typeof child.type === 'function' ? child.type.name : child.type;
            if (tagName === 'Label') hasLabel = true;
            if (tagName === 'Right') hasRight = true;

            // hasLabel = labelDetector(child); // TODO 이건 안되고
        });
    } else {
        if (children) {
            const tagName = typeof children.type === 'function' ? children.type.name : children.type;
            if (tagName === 'Label') hasLabel = true;
            if (tagName === 'Right') hasRight = true;

            // hasLabel = labelDetector(children); // TODO 이건 되고
        }
    }

    const inputStyle = {
        ...inputVariantStyle(props.variant || 'outline', props.inputSize || 'md', hasLabel, props.placeholder, props.color),
        ...inputSizeStyle(props.inputSize || 'md', hasRight)
    };

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <InputContext.Provider value={{ id, setValue, clearable }}>
            <div css={inputWrapperStyle}>
                <input {...otherProps} type={props.type} id={id} ref={inputRef} css={inputStyle} value={value} onChange={onChangeInput} />
                {children && Array.isArray(children) ? children?.map(child => child) : children}
            </div>
        </InputContext.Provider>
    );
};

const Label = (props: InputLabelProps) => {
    const { id } = useContext(InputContext);
    const { children } = props;
    return (
        <label css={inputLabelStyle} htmlFor={id}>
            {children}
        </label>
    );
};

const Right = (props: InputRightProps) => {
    const { icon, children, onClick } = props;
    const { setValue, clearable } = useContext(InputContext);

    const setInitValue = () => {
        setValue('');
    };

    const RightContext = () => {
        if (clearable) {
            return (
                <span css={inputRightStyle} onClick={setInitValue}>
                    <ClearableIcon />
                </span>
            );
        } else if (icon) {
            return (
                <span css={inputRightStyle} onClick={onClick && onClick}>
                    {icon}
                </span>
            );
        } else if (children) {
            return (
                <span css={inputRightStyle} onClick={onClick && onClick}>
                    {children}
                </span>
            );
        }
        return <></>;
    };

    return <RightContext />;
};

TextInput.Label = Label;
TextInput.Right = Right;
