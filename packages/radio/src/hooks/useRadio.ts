import type { Dispatch, SetStateAction } from 'react';
import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { callHandler } from '@jdesignlab/utils';
import { RadioProps } from '../types';
import type { EventType } from '@jdesignlab/utils';

const useRadio = (
  isUnavailable: boolean,
  radioProps: RadioProps,
  contextSetValue?: Dispatch<SetStateAction<string>> | null
) => {
  const [radioValue, setValue] = useState<string>('');
  const radioRef = useRef<HTMLInputElement | null>(null);

  const combineKeydownHandler = useCallback(
    (propsOnKeyDown?: (event: EventType) => void) => {
      const refCurrent = radioRef.current;
      const defaultHandleKeydown = (e: EventType) => {
        if (e.key === ' ' && !isUnavailable && refCurrent) {
          const targetValue = refCurrent.value;
          refCurrent.checked = true;
          refCurrent.blur();
          if (contextSetValue) {
            contextSetValue(targetValue);
            return;
          }
          setValue(targetValue);
        }
      };

      return propsOnKeyDown ? callHandler(defaultHandleKeydown, propsOnKeyDown) : defaultHandleKeydown;
    },
    [contextSetValue, isUnavailable]
  );

  const combineChangeHandler = (propsOnChange?: (event: EventType) => void) => {
    const defaultHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (isUnavailable) {
        e.preventDefault();
        return;
      }

      if (contextSetValue) {
        contextSetValue(value);
        return;
      }
      setValue(value);
    };

    return propsOnChange ? callHandler(defaultHandleChange, propsOnChange) : defaultHandleChange;
  };

  const handleChange = combineChangeHandler(radioProps.onChange as (event: EventType) => void);
  const handleKeyDown = combineKeydownHandler(radioProps.onKeyDown as (event: EventType) => void);
  return { radioRef, radioValue, handleChange, handleKeyDown };
};

export default useRadio;
