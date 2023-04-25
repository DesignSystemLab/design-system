import type { ColorToken } from '@jdesignlab/theme';
import type { EventType } from '@jdesignlab/utils';
import type { Dispatch, SetStateAction } from 'react';

export type RadioSize = 'sm' | 'md' | 'lg';
export type RadioAttributes = { [key: string]: string | ((event: EventType) => void) };
export interface ReturnContext {
  defaultValue?: string;
  name: string;
  rootProps: RadioAttributes | null;
  setValue: Dispatch<SetStateAction<string>> | null;
  value: string | null;
}

export interface RadioLabelProps {
  id: string;
  size: RadioSize;
  children: React.ReactNode;
}

export interface RadioGroupProps extends React.HTMLAttributes<HTMLInputElement> {
  defaultValue?: string;
}

export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  color?: ColorToken;
  disabled?: boolean;
  readonly?: boolean;
  size?: RadioSize;
  name?: string;
  value?: string;
}
