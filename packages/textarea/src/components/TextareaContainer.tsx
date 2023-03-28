/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { TEXTAREA_PLACEHOLDER_COLOR } from '../constants';
import { useSmart } from '../hooks/useSmart';
import { useTextarea } from '../hooks/useTextarea';
import { createTextareaStyle } from '../styles/createTextareaStyle';
import { createWrapperStyle } from '../styles/createWrapperStyle';
import { TextareaContext } from './TextareaContext';
import { TextareaLabel } from './TextareaLabel';
import type { ReturnContext } from '../types';

export const TextareaContainer = (props: { children: React.ReactNode }) => {
  const { styleProps, textareaProps, textareaId } = useContext<ReturnContext>(TextareaContext);
  const { getChildText } = useTextarea();
  const { onChange, ...attributesWithoutOnChange } = textareaProps;
  const labelText = getChildText(props.children);
  const textareaStyle = createTextareaStyle(styleProps, TEXTAREA_PLACEHOLDER_COLOR);
  const wrapperStyle = createWrapperStyle(styleProps.width);
  const { textareaRef, handleChange } = useSmart(onChange, styleProps.resize);

  return (
    <div css={wrapperStyle}>
      {labelText && <TextareaLabel children={labelText} />}
      <textarea
        id={textareaId}
        css={textareaStyle}
        ref={textareaRef}
        onChange={handleChange()}
        {...attributesWithoutOnChange}
      />
    </div>
  );
};
