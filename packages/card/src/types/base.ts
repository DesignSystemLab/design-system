export type FlexToken = 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
export type FlexMap = Record<FlexToken, string>;

export type Variant = 'elevated' | 'outlined' | 'filled';
export type Size = 'sm' | 'md' | 'lg';
export type Direction = 'horizontal' | 'vertical';
export type AsElement = React.ElementType;
