import type { Dispatch, SetStateAction } from 'react';
import type { EventType } from '@jdesignlab/utils';
import type { RadioValueType } from './base';

export type RadioAttributes = { [key: string]: string | ((event: EventType) => void) };
export interface ReturnContext {
  defaultValue?: string;
  name: string;
  rootProps: RadioAttributes | null;
  setValue: Dispatch<SetStateAction<string>> | null;
  value: RadioValueType | null;
}
