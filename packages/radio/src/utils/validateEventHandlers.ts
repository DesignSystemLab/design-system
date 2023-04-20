import { SyntheticEvent } from 'react';
import { callHandler } from '@jdesignlab/utils';
import type { EventType } from '@jdesignlab/utils';
import type { RadioProps } from '../types';

const validateEventHandlers = (isUnavailable: boolean, props: RadioProps) => {
  const radioProps: { [key: string]: string | ((event: EventType) => void) } = {};

  const preventEvent = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  Object.entries(props).forEach(prop => {
    const [name, key] = prop;
    if (typeof key === 'function' && isUnavailable) {
      radioProps[name] = callHandler(preventEvent, key);
      return;
    }
    radioProps[name] = key;
  });

  return radioProps;
};

export default validateEventHandlers;
