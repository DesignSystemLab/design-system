import { useCallback, useEffect, useRef, useState } from 'react';
import { TextAreaProps } from './textareaTypes';
import { callHandler, EventType } from '@jdesignlab/utils';

export const UseTextArea = (textareaProps: TextAreaProps) => {
    const keyOfStyleProps: string[] = ['maxWidth', 'maxHeight', 'color', 'resize', 'appearance'];
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [isSmart, setIsSmart] = useState<boolean>(false);

    useEffect(() => {
        setIsSmart(textareaProps.resize === 'smart');
    });

    const handleResizeHeight = useCallback(() => {
        const textArea = textAreaRef.current;
        if (textArea) {
            textArea.style.height = 'auto';
            textArea.style.height = `${textArea.scrollHeight}px`;
        }
    }, [textAreaRef]);

    const getTextAreaProps = () => {
        let textProps: { [key: string]: string | ((event: EventType) => void) } = {};

        for (const key in textareaProps) {
            if (!keyOfStyleProps.includes(key)) {
                textProps[key] = textareaProps[key];
            }
        }

        if (isSmart) {
            textProps.onInput = callHandler(handleResizeHeight, textareaProps.onInput);
        }

        return textProps;
    };

    return { getTextAreaProps, textAreaRef };
};
