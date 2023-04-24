import { Dispatch, SetStateAction } from 'react';
import type { ColorToken } from '@jdesignlab/theme';

export interface ReturnContext {
  textareaId: string;
  styleProps: Required<StyleProps>;
  textareaProps: React.HTMLAttributes<HTMLTextAreaElement>;
}
export type ResizeProps = 'vertical' | 'horizontal' | 'smart' | 'none';
export type ApperanceProps = 'standard' | 'none';
export type StyleProps = Pick<
  TextAreaProps,
  'width' | 'maxWidth' | 'maxHeight' | 'maxLength' | 'color' | 'resize' | 'appearance' | 'label' | 'height'
>;

export interface TextareaLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  [key: string]: any;
  label?: string;
  width?: number;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;
  maxLength?: number | null;
  color?: ColorToken;
  resize?: ResizeProps;
  appearance?: ApperanceProps;
  children?: React.ReactNode;
}
