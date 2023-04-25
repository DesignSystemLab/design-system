/**
 * @todo: Will be add to 'utils' package
 */
type StyleUnit = '%' | 'px' | 'em' | 'vh' | 'vw';
export type SpacingToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | `${number}${StyleUnit}`;
export type FlexToken = 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
export type AsElement = React.ElementType;

export type Direction = 'horizontal' | 'vertical';
export type FlexMap = Record<FlexToken, string>;
export type SpacingMap = Record<SpacingToken, string>;

export type StyleProps = Omit<StackProps, 'as' | 'children'>;

export interface StackProps {
  children?: React.ReactNode;
  spacing?: SpacingToken;
  align?: FlexToken;
  justify?: FlexToken;
  direction?: Direction;
  responsive?: boolean;
  wrap?: boolean;
}
