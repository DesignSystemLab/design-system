/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { TEXTAREA_PLACEHOLDER_COLOR } from '../constants';
import { useSmart } from '../hooks/useSmart';
import { createTextareaStyle } from '../styles/createTextareaStyle';
import { createWrapperStyle } from '../styles/createWrapperStyle';
import { TextareaContext } from './TextareaContext';
import type { ReturnContext } from '../types';
import { useTextarea } from '../hooks/useTextarea';

export const TextareaContainer = (props: { children: React.ReactNode }) => {
  const { styleProps, textareaProps, textareaId } = useContext<ReturnContext>(TextareaContext);
  const { onChange, ...attributesWithoutOnChange } = textareaProps;
  const textareaStyle = createTextareaStyle(styleProps, TEXTAREA_PLACEHOLDER_COLOR);
  const wrapperStyle = createWrapperStyle(styleProps.width);
  const { textareaRef, handleChange } = useSmart(onChange, styleProps.resize);
  const { getLabelId } = useTextarea();
  const labelId = getLabelId(props.children);

  return (
    <div css={wrapperStyle}>
      {props.children}
      <textarea
        role="textbox"
        aria-multiline="true"
        id={textareaId}
        css={textareaStyle}
        ref={textareaRef}
        onChange={handleChange()}
        {...(textareaProps.placeholder && { 'aria-placeholder': textareaProps.placeholder })}
        {...(labelId && { 'aria-labelledby': labelId })}
        {...attributesWithoutOnChange}
      />
    </div>
  );
};
