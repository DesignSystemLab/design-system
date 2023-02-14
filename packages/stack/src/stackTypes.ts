/**
 * @todo: Will be add to 'utils' package
 */
type StyleUnit = '%' | 'px' | 'em' | 'vh';
export type Spacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | `${number}${StyleUnit}`;
export type FlexToken = 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';

export type Direction = 'horizontal' | 'vertical';
export type FlexMap = {
    [key in FlexToken]: string;
};
export type SpacingMap = {
    [key in Spacing]: string;
};

export interface StackProps {
    children?: React.ReactNode;
    spacing?: Spacing;
    align?: FlexToken;
    justify?: FlexToken;
    direction?: Direction;
    responsive?: boolean;
    wrap?: boolean;
}
