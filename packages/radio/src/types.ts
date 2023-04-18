import type { ColorToken } from '@jdesignlab/theme';

export type RadioSize = 'sm' | 'md' | 'lg';

export interface RadioLabelProps {
  id: string;
  children: React.ReactNode;
  color?: ColorToken;
  size?: RadioSize;
}

export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  color?: ColorToken;
  disabled?: boolean;
  readonly?: boolean;
  size?: RadioSize;
  name?: string;
}
