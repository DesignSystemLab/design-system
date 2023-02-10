/** @jsxImportSource @emotion/react */
import type { TextAreaProps } from './textareaTypes';
import { useStyle } from './useStyle';
import { UseTextArea } from './useTextarea';

const TextArea = (textAreaProps: TextAreaProps) => {
    const { textAreaStyle } = useStyle(textAreaProps);
    const { getTextAreaProps, textAreaRef } = UseTextArea(textAreaProps);
    return <textarea {...getTextAreaProps()} ref={textAreaRef} css={textAreaStyle} />;
};

export default TextArea;
