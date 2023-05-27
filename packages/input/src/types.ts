import { ThemePreset } from '@jdesignlab/j-provider';
import { Label } from './components/InputLabel';
import { Message } from './components/InputMessage';
import type { ColorToken } from '@jdesignlab/theme';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  children?: React.ReactElement | React.ReactElement[];
  type?: 'text' | 'password';
  className?: string;
  size?: InputSize;
  clearable?: boolean;
  width?: number;
  maxLength?: number;
  icon?: JSX.Element;
}

export interface InputLabelProps {
  children?: string;
  className?: string;
}

export interface InputMessageProps {
  children?: string;
  className?: string;
  consistent?: boolean;
}

export interface InputStyleProps {
  themePreset: ThemePreset;
  size: InputSize;
  hasLabel: boolean;
  hasIcon: boolean;
  full?: boolean;
  width?: number;
  clearable?: boolean;
  type?: 'text' | 'password';
  color?: ColorToken;
}

export type ExtendedInputProps = InputProps & { Label?: typeof Label; Message?: typeof Message };
