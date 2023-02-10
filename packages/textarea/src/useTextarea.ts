import React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { TextAreaProps } from './textareaTypes';

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

    const combinedFuncion = (fnA: React.FormEventHandler<HTMLTextAreaElement>, fnB: React.FormEventHandler<HTMLTextAreaElement>) => {
        const compose = (f: React.FormEventHandler<HTMLTextAreaElement>, g: any) => (x: unknown) => f(g(x));
        return compose(fnA, fnB);
    };

    const getTextAreaProps = () => {
        let textProps: { [key: string]: string | ((event: React.ChangeEvent<HTMLTextAreaElement>) => void) } = {};

        for (const key in textareaProps) {
            if (!keyOfStyleProps.includes(key)) {
                textProps[key] = textareaProps[key];
            }
        }

        if (isSmart) {
            textProps.onInput = typeof textareaProps.onInput === 'function' ? combinedFuncion(handleResizeHeight, textareaProps.onInput) : handleResizeHeight;
        }

        return textProps;
    };

    return { getTextAreaProps, textAreaRef };
};
