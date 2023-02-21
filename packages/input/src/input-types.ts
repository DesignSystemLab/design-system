import type { ColorToken } from '@jdesignlab/theme';

export type InputVariant = 'outline' | 'filled' | 'solo';
export type InputSize = 'sm' | 'md' | 'lg' | 'xl';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactElement | React.ReactElement[];
    type?: 'text' | 'password';
    variant?: InputVariant;
    label?: string;
    inputSize?: InputSize;
    value?: string | number | readonly string[] | undefined;
    clearable?: boolean;
    color?: ColorToken;
}

export interface InputLabelProps {
    id: string;
    children?: string;
}

export interface InputRightProps {
    icon?: JSX.Element;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
}
