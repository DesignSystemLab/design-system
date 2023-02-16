import type { ColorToken } from '@jdesignlab/theme';

export type InputVariant = 'outline' | 'filled' | 'solo' | 'underline';
export type InputSize = 'sm' | 'md' | 'lg' | 'xl';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  type: 'text' | 'password';
  variant?: InputVariant;
  label?: string;
  inputSize?: InputSize;
  append?: React.ReactNode;
  clearable?: boolean;
  visible?: boolean;
}

export interface InputLabelProps {
  id: string;
  children?: string;
}

export interface InputRightProps {
  icon?: JSX.Element;
  children?: React.ReactNode;
}
