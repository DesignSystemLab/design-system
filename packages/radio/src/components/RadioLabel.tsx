/** @jsxImportSource @emotion/react */
import { DEFAULT_COLOR, DEFAULT_FONT_COLOR } from '../constants';
import createLabelStyle from '../styles/createLabelStyle';
import type { RadioLabelProps } from '../types';

export const RadioLabel = (props: RadioLabelProps) => {
  const { id, children, size = 'md' } = props;
  const labelStyle = createLabelStyle(size, DEFAULT_FONT_COLOR);
  return (
    <label id={id} css={labelStyle}>
      {children}
    </label>
  );
};
