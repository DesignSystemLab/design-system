import { SyntheticEvent } from 'react';
import { callHandler } from '@jdesignlab/utils';
import type { EventType } from '@jdesignlab/utils';
import type { RadioProps } from '../types';

const preventUnavailableRadio = (isUnavailable: boolean, props: RadioProps) => {
  const eventHandlerProps: { [key: string]: string | ((event: EventType) => void) } = {};

  const preventEvent = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  Object.entries(props).forEach(prop => {
    const [name, key] = prop;
    if (typeof key === 'function' && isUnavailable) {
      eventHandlerProps[name] = callHandler(preventEvent, key);
      return;
    }
    eventHandlerProps[name] = key;
  });

  return eventHandlerProps;
};

export default preventUnavailableRadio;
