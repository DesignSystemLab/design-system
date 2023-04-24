import type { ColorToken } from '@jdesignlab/theme';

export type CheckboxSize = 'sm' | 'md' | 'lg' | 'xl';
export type CheckboxValue = number[] | string[] | undefined;

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  color?: ColorToken;
  value?: string | number;
}

export interface CheckboxGroupProps {
  children?: React.ReactNode;
  defaultValue?: string[] | number[];
}
