/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { TEXTAREA_LABEL_COLOR } from '../constants';
import { createLabelStyle } from '../styles/createLabelStyle';
import { TextareaContext } from './TextareaContext';
import { useTextarea } from '../hooks/useTextarea';
import type { TextareaLabelProps } from '../types';

export const TextareaLabel = (props: TextareaLabelProps) => {
  const { children, ...attributesWithoutChildren } = props;
  const { getChildText } = useTextarea();
  const { textareaId } = useContext(TextareaContext);
  const labelStype = createLabelStyle(TEXTAREA_LABEL_COLOR);
  const labelText = getChildText(props.children);

  return (
    <label htmlFor={textareaId} css={labelStype} {...attributesWithoutChildren}>
      {labelText}
    </label>
  );
};
