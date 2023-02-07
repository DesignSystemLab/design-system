import type { ColorToken } from '@jdesignlab/theme';
import { TextareaHTMLAttributes } from 'react';

export type ResizeType = 'vertical' | 'horizontal' | 'smart' | 'none';
export type ApperanceType = 'standard' | 'none';
export type StyleType = Omit<TextAreaProps, 'name' | 'id'>;
export interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    [key: string]: any;
    id?: string;
    name?: string;
    children?: React.ReactElement;
    maxWidth?: number;
    maxHeight?: number;
    color?: ColorToken;
    resize?: ResizeType;
    appearance: ApperanceType;
}
