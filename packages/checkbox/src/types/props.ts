import type { ColorToken } from '@jdesignlab/theme';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  color?: ColorToken;
  value?: string | number;
  // onChange?: () => {};
}
export interface CheckboxGroupProps {
  children?: React.ReactNode;
  defaultValue?: string[] | number[];
}
