import { ChangeEvent, useRef, useState } from 'react';
import { RadioAttributes } from '../types';
import { callHandler, EventType } from '@jdesignlab/utils';
import type { Dispatch, SetStateAction } from 'react';

const useKeyboardNavigation = (
  isUnavailable: boolean,
  radioProps: RadioAttributes,
  contextSetValue?: Dispatch<SetStateAction<string>> | null
) => {
  const [radioValue, setValue] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  const combineChangeHandler = (propsOnChange?: (event: EventType) => void) => {
    const defaultOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (isUnavailable) {
        e.preventDefault();
        return;
      }

      if (contextSetValue) {
        contextSetValue(e.target.value);
        return;
      }
      setValue(e.target.value);
    };

    return propsOnChange ? callHandler(defaultOnChange, propsOnChange) : defaultOnChange;
  };

  const handleChange = combineChangeHandler(radioProps.onChange as (event: EventType) => void);
  return { ref, radioValue, handleChange };
};

export default useKeyboardNavigation;
