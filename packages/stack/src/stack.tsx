/** @jsxImportSource @emotion/react */
import { useStyle } from './useStyle';
import type { StackProps } from './stackTypes';

export const Stack = (stackProps: StackProps) => {
  const { styleProps, cloneElements } = useStyle(stackProps);
  return <div css={styleProps}>{cloneElements}</div>;
};
