/** @jsxImportSource @emotion/react */
import { createClassVariant } from '@jdesignlab/theme';
import { DEFAULT_FONT_COLOR } from '../constants';
import createLabelStyle from '../styles/createLabelStyle';
import type { RadioLabelProps } from '../types';

const RadioLabel = (props: RadioLabelProps) => {
  const { id, children, size } = props;
  const labelStyle = createLabelStyle(size, DEFAULT_FONT_COLOR);
  return (
    <label htmlFor={id} css={labelStyle} className={createClassVariant('radio', 'label')}>
      {children}
    </label>
  );
};

RadioLabel.displayName = 'RadioLabel';
export default RadioLabel;
