/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react';
import { filterComponent } from '@jdesignlab/react-utils';
import { useTextarea } from '../hooks/useTextarea';
import { TextareaProvider } from './TextareaContext';
import { TextareaContainer } from './TextareaContainer';
import { TextareaLabel } from './TextareaLabel';
import type { TextAreaProps } from '../types';

type ExtendedTextAreaProps = TextAreaProps & { Label?: typeof TextareaLabel };
export const Textarea = Object.assign(
  forwardRef<HTMLTextAreaElement, ExtendedTextAreaProps>((textAreaProps, ref) => {
    const { children, ...propsWithoutChildren } = textAreaProps;
    const textareaLabel = filterComponent(children, TextareaLabel, true);
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
