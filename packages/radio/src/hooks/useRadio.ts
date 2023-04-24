import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { RadioAttributes } from '../types';
import { callHandler } from '@jdesignlab/utils';
import type { EventType } from '@jdesignlab/utils';
import type { Dispatch, SetStateAction } from 'react';

const useRadio = (
  isUnavailable: boolean,
  radioProps: RadioAttributes,
  contextSetValue?: Dispatch<SetStateAction<string>> | null
) => {
  const [radioValue, setValue] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  const combineKeydownHandler = useCallback(
    (propsOnKeyDown?: (event: EventType) => void) => {
      const radioRef = ref.current;
      const defaultHandleKeydown = (e: EventType) => {
        if (e.key === ' ' && !isUnavailable && radioRef) {
          const targetValue = radioRef.value;
          radioRef.checked = true;
          radioRef.blur();
          if (contextSetValue) {
            contextSetValue(targetValue);
            return;
          }
          setValue(targetValue);
        }
      };

      return propsOnKeyDown ? callHandler(defaultHandleKeydown, propsOnKeyDown) : defaultHandleKeydown;
    },
    [ref]
  );

  const combineChangeHandler = (propsOnChange?: (event: EventType) => void) => {
    const deafultHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
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

    return propsOnChange ? callHandler(deafultHandleChange, propsOnChange) : deafultHandleChange;
  };

  const handleChange = combineChangeHandler(radioProps.onChange as (event: EventType) => void);
  const handleKeyDown = combineKeydownHandler(radioProps.onKeyDown as (event: EventType) => void);
  return { ref, radioValue, handleChange, handleKeyDown };
};

export default useRadio;
