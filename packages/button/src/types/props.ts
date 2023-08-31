import { ButtonSize, ButtonVariant } from './base';
import type { ColorToken } from '@jdesignlab/theme';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  color?: ColorToken;
  full?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
}
