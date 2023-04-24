import { callHandler, EventType } from '@jdesignlab/utils';
import { SyntheticEvent } from 'react';
import type { RadioProps, RadioAttributes } from '../types';

const validateEventHandlers = (isUnavailable: boolean, props: RadioProps, rootProps?: RadioAttributes | null) => {
  type EventHandlerType = (event: EventType) => void;

  const preventEvent = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const combineHandlers = (radioProps: RadioAttributes, rootProps?: RadioAttributes | null) => {
    let combineProps: RadioAttributes = {};
    if (rootProps) {
      Object.entries(rootProps).forEach(rootProp => {
        const [key, value] = rootProp;
        if (typeof value === 'function') {
          if (radioProps[key]) {
            combineProps[key] = callHandler(radioProps[key] as EventHandlerType, value);
          }
          if (isUnavailable) {
            combineProps[key] = callHandler(combineProps[key] as EventHandlerType, preventEvent);
            return;
          }
          combineProps[key] = value;
        }
      });
    }
    return combineProps;
  };

  const applyDefaultPreventHandler = (radioProps: RadioProps) => {
    let validRadioProps: RadioAttributes = {};
    Object.entries(radioProps).forEach(prop => {
      const [key, value] = prop;
      if (isUnavailable && typeof value === 'function') {
        validRadioProps[key] = callHandler(value, preventEvent);
        return;
      }
      validRadioProps[key] = value;
    });
    return validRadioProps;
  };

  const defaultSetPreventEvent = (radioProps: RadioAttributes, preventHandler: (event: SyntheticEvent) => void) => {
    if (isUnavailable && !radioProps.onClick) {
      radioProps.onClick = preventHandler;
    }
    return radioProps;
  };

  const validRootProps = combineHandlers(props as RadioAttributes, rootProps);
  const validRadioProps = applyDefaultPreventHandler(props);

  return defaultSetPreventEvent({ ...validRadioProps, ...validRootProps }, preventEvent);
};

export default validateEventHandlers;
