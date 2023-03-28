import { FormEventHandler, useCallback, useRef } from 'react';
import { callHandler } from '@jdesignlab/utils';
import type { ResizeProps } from '../types';

export const useSmart = (onChange: FormEventHandler<HTMLTextAreaElement> | undefined, resize: ResizeProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = useCallback(() => {
    const textArea = textareaRef.current;
    if (textArea) {
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  }, [textareaRef]);

  const handleChange = () => {
    if (resize === 'smart') {
      return callHandler(handleResizeHeight, onChange);
    }
    return onChange;
  };

  return { textareaRef, handleChange };
};
