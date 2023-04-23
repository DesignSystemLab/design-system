import type { ColorToken } from '@jdesignlab/theme';

export type CheckboxSize = 'sm' | 'md' | 'lg' | 'xl';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  color?: ColorToken;
}
