/** @jsxImportSource @emotion/react */
import { createClassVariant } from '@jdesignlab/theme';
import * as Style from '../styles';
import { DEFAULT_FONT_COLOR } from '../constants';
import type { RadioLabelProps } from '../types';

const RadioLabel = (props: RadioLabelProps) => {
  const { id, children, size } = props;
  const labelStyle = Style.createLabel(size, DEFAULT_FONT_COLOR);
  return (
    <label htmlFor={id} css={labelStyle} className={createClassVariant('radio', 'label')}>
      {children}
    </label>
  );
};

RadioLabel.displayName = 'RadioLabel';
export default RadioLabel;
