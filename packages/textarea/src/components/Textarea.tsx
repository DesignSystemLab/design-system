/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react';
import { useTextarea } from '../hooks/useTextarea';
import { TextareaProvider } from './TextareaContext';
import { TextareaContainer } from './TextareaContainer';
import { TextareaLabel } from './TextareaLabel';
import type { ExtendedTextAreaProps } from '../types';

export const Textarea = Object.assign(
  forwardRef<HTMLTextAreaElement, ExtendedTextAreaProps>((textAreaProps, ref) => {
    const { children, ...propsWithoutChildren } = textAreaProps;
    const { filterChildren } = useTextarea();
    const textareaLabel = filterChildren(children, TextareaLabel, true);

    return (
      <TextareaProvider textareaProps={propsWithoutChildren}>
        <TextareaContainer children={textareaLabel} ref={ref} />
      </TextareaProvider>
    );
  }),
  {
    Label: TextareaLabel
  }
);
