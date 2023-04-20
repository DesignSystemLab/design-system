/** @jsxImportSource @emotion/react */
import { createClassVariant } from '@jdesignlab/theme';
import { getCoponentText } from '@jdesignlab/react-utils';
import { RadioLabel } from './RadioLabel';
import { useId } from 'react';
import { DEFAULT_COLOR, DEFAULT_DISABLED_COLOR, RADIO_ID_PREFIX } from '../constants';
import validateEventHandlers from '../utils/validateEventHandlers';
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

  const radioProps = validateEventHandlers(!!readonly || !!disabled, restProps);
  const radioId = props.id ?? `${RADIO_ID_PREFIX}-${useId()}`;
  const radioClassName = className
    ? `${createClassVariant('radio', 'wrapper')} ${className}`
    : createClassVariant('radio', 'wrapper');
  const radioText = getCoponentText(children);

  return (
    <div className={radioClassName}>
      <RadioLabel id={radioId} size={size}>
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
