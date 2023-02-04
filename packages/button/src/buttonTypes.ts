import type { ColorToken } from '@jdesignlab/theme';

export type ButtonVariant = 'solid' | 'ghost' | 'outline' | 'link' | 'unstyled';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    color?: ColorToken;
}
