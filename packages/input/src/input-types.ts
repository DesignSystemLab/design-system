import type { ColorToken } from '@jdesignlab/theme';

export type InputVariant = 'outline' | 'filled' | 'solo' | 'underline';
export type InputSize = 'sm' | 'md' | 'lg' | 'xl';

export type inputControlMixins = 'disable' | 'visible' | 'clearable';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password';
    variant?: InputVariant;
    label?: string;
    inputSize?: InputSize;
    append?: React.ReactNode;
    clearable?: boolean;
    visible?: boolean;
}
