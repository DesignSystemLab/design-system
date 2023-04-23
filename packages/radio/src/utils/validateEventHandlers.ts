import { callHandler } from '@jdesignlab/utils';
import type { SyntheticEvent } from 'react';
import type { RadioProps, RadioAttributes } from '../types';

const validateEventHandlers = (
  isUnavailable: boolean,
  props: RadioProps,
  rootProps: RadioAttributes | null | undefined
) => {
  const radioProps: RadioAttributes = {};

  const preventEvent = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const defaultSetPreventEvent = (radioProps: RadioAttributes, preventHandler: (event: SyntheticEvent) => void) => {
    if (isUnavailable && !radioProps.onClick) {
      radioProps.onClick = preventHandler;
    }
    return radioProps;
  };

  Object.entries(props).forEach(prop => {
    const [key, value] = prop;
    if (typeof value === 'function') {
      if (rootProps && rootProps[key]) {
        if (isUnavailable) {
          const combineHandler = callHandler(rootProps[key], value);
          radioProps[key] = callHandler(preventEvent, combineHandler);
          return;
        }
        radioProps[key] = callHandler(value, rootProps[key]);
        return;
      }

      if (isUnavailable) {
        radioProps[key] = callHandler(preventEvent, value);
        return;
      }
    }
    radioProps[key] = value;
  });

  if (!radioProps['onclick']) {
    radioProps;
  }

  return defaultSetPreventEvent(radioProps, preventEvent);
};

export default validateEventHandlers;
