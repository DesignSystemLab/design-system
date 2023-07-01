import type { ColorToken } from '@jdesignlab/theme';
import type { ReactNode, HTMLAttributes } from 'react';

export interface ReturnContext {
  textareaId: string;
  styleProps: Required<StyleProps>;
  textareaProps: HTMLAttributes<HTMLTextAreaElement>;
}
export type ResizeProps = 'vertical' | 'horizontal' | 'smart' | 'none';
export type ApperanceProps = 'standard' | 'none';
export type StyleProps = Pick<
  TextAreaProps,
  'width' | 'maxWidth' | 'maxHeight' | 'maxLength' | 'color' | 'resize' | 'appearance' | 'label' | 'height'
>;

export interface TextareaLabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  width?: number;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;
  maxLength?: number | null;
  color?: ColorToken;
  resize?: ResizeProps;
  appearance?: ApperanceProps;
  children?: ReactNode;
  disabled?: boolean;
}
