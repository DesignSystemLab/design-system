/** @jsxImportSource @emotion/react */
import type { InputMessageProps } from '../types';
import { inputMessageStyle } from '../styles';
import { createClassVariant } from '@jdesignlab/theme';
import { combineClassNames } from '@jdesignlab/utils';

export const Message = (props: InputMessageProps) => {
  const { className, consistent, ...otherProps } = props;

  return (
    <div
      className={combineClassNames(createClassVariant('input', 'message'), className)}
      css={inputMessageStyle(consistent)}
      {...otherProps}
    >
      {props.children}
    </div>
  );
};

Message.displayName = 'TextInput.Message';
