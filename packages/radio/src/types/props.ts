import { RadioSize, RadioValueType } from './base';
import type { ColorToken } from '@jdesignlab/theme';

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
  value?: RadioValueType;
}
