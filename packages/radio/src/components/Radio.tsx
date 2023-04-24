/** @jsxImportSource @emotion/react */
import { useId, useContext } from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import { getCoponentText } from '@jdesignlab/react-utils';
import { RadioContext } from './RadioContext';
import RadioGroup from './RadioGroup';
import RadioLabel from './RadioLabel';
import useRadio from '../hooks/useRadio';
import { DEFAULT_COLOR, DEFAULT_DISABLED_COLOR, RADIO_ID_PREFIX } from '../constants';
import validateEventHandlers from '../utils/validateEventHandlers';
import createRadioStyle from '../styles/createRadioStyle';
import type { RadioProps } from '../types';

export const Radio = (props: RadioProps) => {
  const {
    id,
    children,
    className,
    color = DEFAULT_COLOR,
    size = 'md',
    readonly = false,
    disabled = false,
    name = '',
    ...restProps
  } = props;
  const radioContext = useContext(RadioContext);
  const isUnavailable = !!readonly || !!disabled;
  const validRadioProps = validateEventHandlers(isUnavailable, restProps, radioContext?.rootProps);
  const { radioValue, handleChange } = useRadio(isUnavailable, validRadioProps, radioContext?.setValue);
  const radioId = id ?? `${RADIO_ID_PREFIX}-${useId()}`;
  const radioClassName = className
    ? `${createClassVariant('radio', 'wrapper')} ${className}`
    : createClassVariant('radio', 'wrapper');
  const radioText = getCoponentText(children);

  return (
    <div
      className={radioClassName}
      css={{ display: 'inline-block' }}
      aria-checked={radioContext ? radioContext.value === props.value : radioValue === props.value}
    >
      <RadioLabel id={radioId} size={size}>
        <input
          type="radio"
          readOnly={readonly}
          name={radioContext ? radioContext.name : name}
          className={createClassVariant('radio', 'input', 'radio')}
          css={createRadioStyle(color, DEFAULT_DISABLED_COLOR, disabled, size)}
          disabled={disabled}
          {...validRadioProps}
          onChange={handleChange}
        />
        {radioText}
      </RadioLabel>
    </div>
  );
};

Radio.Group = RadioGroup;
