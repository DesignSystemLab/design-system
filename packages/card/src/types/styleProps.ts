import { CardProps } from './props';

export type CardStyle = 'variant' | 'color' | 'align' | 'justify' | 'direction' | 'size';
export type StyleProps = Required<Pick<CardProps, CardStyle>>;
