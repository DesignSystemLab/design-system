import type { ColorToken } from '@jdesignlab/theme';

export type RadioSize = 'sm' | 'md' | 'lg';
export type InputProps = Pick<RadioProps, 'id' | 'name' | 'value' | 'onChange'>;

export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  [key: string]: any;
  defaultChecked: boolean;
  children?: React.ReactElement;
  color?: ColorToken;
  defaultValue?: string;
  disabled?: boolean;
  readonly?: boolean;
  size?: RadioSize;
  id?: string;
  name?: string;
}
