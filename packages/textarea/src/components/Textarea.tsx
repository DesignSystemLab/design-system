/** @jsxImportSource @emotion/react */
import { useTextarea } from '../hooks/useTextarea';
import { TextareaProvider } from './TextareaContext';
import { TextareaContainer } from './TextareaContainer';
import { TextareaLabel } from './TextareaLabel';
import type { TextAreaProps } from '../types';

export const Textarea = (textAreaProps: TextAreaProps) => {
  const { children, ...propsWithoutChildren } = textAreaProps;
  const { filterChildren } = useTextarea();
  const textareaLabel = filterChildren(children, Textarea.Label, true);

  return (
    <TextareaProvider textareaProps={propsWithoutChildren}>
      <TextareaContainer children={textareaLabel} />
    </TextareaProvider>
  );
};

Textarea.Label = TextareaLabel;
