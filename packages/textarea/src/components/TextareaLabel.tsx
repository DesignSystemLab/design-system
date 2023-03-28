/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { TEXTAREA_LABEL_COLOR } from '../constants';
import { createLabelStyle } from '../styles/createLabelStyle';
import { TextareaContext } from './TextareaContext';

export const TextareaLabel = (props: { children: React.ReactNode }) => {
  const { textareaId } = useContext(TextareaContext);
  const labelStype = createLabelStyle(TEXTAREA_LABEL_COLOR);
  return (
    <label htmlFor={textareaId} css={labelStype}>
      {props.children}
    </label>
  );
};
