/** @jsxImportSource @emotion/react */
import { useRadio } from './useRadio';
import { useStyle } from './useStyle';
import type { RadioProps } from './radioTypes';

const Radio = (radioProps: RadioProps) => {
    const { styleTheme } = useStyle(radioProps);
    const { getInputProps, getPropsChild, disabled } = useRadio(radioProps);

    return (
        <label css={[styleTheme.defultRadioStyle(), styleTheme.disabledRadioStyle(disabled), styleTheme.radioSizeStyle()]}>
            <input type="radio" {...getInputProps()} />
            <span>{getPropsChild(radioProps.children)}</span>
        </label>
    );
};

export default Radio;
