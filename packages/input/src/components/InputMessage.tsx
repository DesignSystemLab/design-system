/** @jsxImportSource @emotion/react */
import type { InputMessageProps } from '../types';
import { inputMessageStyle } from '../styles';

export const Message = (props: InputMessageProps) => {
  return (
    <div className="input_message" css={inputMessageStyle(props.consistent)}>
      {props.children}
    </div>
  );
};

Message.displayName = 'TextInput.Message';
