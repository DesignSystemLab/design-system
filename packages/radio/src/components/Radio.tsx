/** @jsxImportSource @emotion/react */
import { createClassVariant } from '@jdesignlab/theme';
import { getCoponentText } from '@jdesignlab/react-utils';
import { RadioLabel } from './RadioLabel';
import { DEFAULT_COLOR, DEFAULT_DISABLED_COLOR } from '../constants';
import preventUnavailableRadio from '../utils/preventUnavailableRadio';
import createRadioStyle from '../styles/createRadioStyle';
import type { RadioProps } from '../types';

export const Radio = (props: RadioProps) => {
  const {
    children,
    className,
    color = DEFAULT_COLOR,
    size = 'md',
    readonly = false,
    disabled = false,
    ...restProps
  } = props;
  const radioProps = preventUnavailableRadio(!!readonly || !!disabled, restProps);
  const radioClassName = className
    ? `${createClassVariant('radio', 'wrapper')} ${className}`
    : createClassVariant('radio', 'wrapper');
  const radioText = getCoponentText(children);

  return (
    <div className={radioClassName}>
      <RadioLabel id="test" color={color} size={size}>
        <input
          type="radio"
          css={createRadioStyle(color, DEFAULT_DISABLED_COLOR, disabled, size)}
          disabled={disabled}
          {...radioProps}
        />
        {radioText}
      </RadioLabel>
    </div>
  );
};
