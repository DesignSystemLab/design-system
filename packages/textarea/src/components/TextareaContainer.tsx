/** @jsxImportSource @emotion/react */
import { ForwardedRef, forwardRef, RefCallback, useContext } from 'react';
import { TEXTAREA_PLACEHOLDER_COLOR } from '../constants';
import { useSmart } from '../hooks/useSmart';
import { createTextareaStyle } from '../styles/createTextareaStyle';
import { createWrapperStyle } from '../styles/createWrapperStyle';
import { TextareaContext } from './TextareaContext';
import { useTextarea } from '../hooks/useTextarea';
import type { ReturnContext } from '../types';
import { createClassVariant } from '@jdesignlab/theme';

export const TextareaContainer = forwardRef(
  (props: { children: React.ReactNode }, externalRef: ForwardedRef<any> | null) => {
    const { styleProps, textareaProps, textareaId } = useContext<ReturnContext>(TextareaContext);
    const { onChange, ...attributesWithoutOnChange } = textareaProps;
    const textareaStyle = createTextareaStyle(styleProps, TEXTAREA_PLACEHOLDER_COLOR);
    const wrapperStyle = createWrapperStyle(styleProps.width);
    const { textareaRef, handleChange } = useSmart(onChange, styleProps.resize);
    const { getLabelId } = useTextarea();
    const labelId = getLabelId(props.children);

    return (
      <div css={wrapperStyle} className={createClassVariant('textarea', 'wrapper')}>
        {props.children}
        <textarea
          role="textbox"
          aria-multiline="true"
          id={textareaId}
          css={textareaStyle}
          className={createClassVariant('textarea', 'input')}
          ref={e => {
            if (typeof externalRef === 'function') {
              externalRef(e);
            }
            textareaRef.current = e;
          }}
          onChange={handleChange()}
          {...(textareaProps.placeholder && { 'aria-placeholder': textareaProps.placeholder })}
          {...(labelId && { 'aria-labelledby': labelId })}
          {...attributesWithoutOnChange}
        />
      </div>
    );
  }
);
