/** @jsxImportSource @emotion/react */
import * as Style from '../styles';
import { useId, useContext, forwardRef } from 'react';
import { createClassVariant, getColorByTokenOrHex } from '@jdesignlab/theme';
import { getComponentText } from '@jdesignlab/react-utils';
import { RadioContext } from '../context';
import RadioGroup from './RadioGroup';
import RadioLabel from './RadioLabel';
import useRadio from '../hooks/useRadio';
import { DEFAULT_COLOR, DEFAULT_DISABLED_COLOR, RADIO_ID_PREFIX } from '../constants';
import validateEventHandlers from '../utils/validateEventHandlers';
import type { RadioProps } from '../types';

type ExtendedRadioProps = RadioProps & { RadioGroup?: typeof RadioGroup };

export const Radio = Object.assign(
  forwardRef<HTMLInputElement, ExtendedRadioProps>((props, ref) => {
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
    const { radioRef, radioValue, handleChange, handleKeyDown } = useRadio(
      isUnavailable,
      validRadioProps,
      radioContext?.setValue
    );
    const radioId = id ?? `${RADIO_ID_PREFIX}-${useId()}`;
    const radioClassName = className
      ? `${createClassVariant('radio', 'wrapper')} ${className}`
      : createClassVariant('radio', 'wrapper');
    const radioText = getComponentText(children);

    return (
      <div
        className={radioClassName}
        css={Style.wrapper}
        aria-checked={radioContext ? radioContext.value === props.value : radioValue === props.value}
      >
        <RadioLabel id={radioId} size={size}>
          <input
            type="radio"
            id={radioId}
            name={radioContext ? radioContext.name : name}
            ref={e => {
              if (typeof ref === 'function') {
                ref(e);
              }
              radioRef.current = e;
            }}
            readOnly={readonly}
            className={createClassVariant('radio', 'input', 'radio')}
            css={Style.createRadio(getColorByTokenOrHex(color), DEFAULT_DISABLED_COLOR, disabled, size)}
            disabled={disabled}
            {...validRadioProps}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <span>{radioText}</span>
        </RadioLabel>
      </div>
    );
  }),
  {
    Group: RadioGroup
  }
);

Radio.displayName = 'Radio';
