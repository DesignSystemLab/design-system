/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { ColorToken, Color } from '@jdesignlab/theme';
import type { InputVariant, InputProps, InputSize, inputControlMixins } from './input-types';
import { getColorByToken, hexToRgba, uuidv4 } from '@jdesignlab/theme';
import { ClearableIcon, VisibleIcon } from '@jdesignlab/theme';
import { ControlClear, ControlVisible } from '@jdesignlab/mixins';
import { inputWrapperStyle, inputRightStyle, inputLabelStyle, inputVariantStyle, inputSizeStyle } from './input-style';
import { useRef, useState } from 'react';

const TextInput = (props: InputProps) => {
    const id = uuidv4();
    const { variant, inputSize, label, placeholder, append, clearable, visible } = props;
    const [type, setType] = useState<string>(props['type']);
    const [value, setValue] = useState<any>(props['defaultValue']);
    const inputStyle = {
        ...inputVariantStyle(variant || 'outline', inputSize || 'md', label, placeholder),
        ...inputSizeStyle(inputSize || 'md', append ? true : false)
    };
    return (
        <>
            <div className="input_wrapper" css={inputWrapperStyle}>
                <input
                    {...props}
                    type={type}
                    className="input"
                    css={inputStyle}
                    id={id}
                    // onChange={e => {
                    //     setValue(e.target.value);
                    // }}
                />
                {value}
                <label className="label" css={inputLabelStyle} htmlFor={id}>
                    {props?.label}
                </label>
                {append && (
                    <span className="append" css={inputRightStyle}>
                        {append}
                    </span>
                )}
                {clearable && <ControlClear value={value} setValue={setValue} />}
                {visible && props.type === 'password' && <ControlVisible type={type} setType={setType} />}
            </div>
        </>
    );
};

TextInput.displayName = 'Input';

export default TextInput;
