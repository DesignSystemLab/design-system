/** @jsxImportSource @emotion/react */
import { getColorByToken, setTextColorByBackground, createClassVariant } from '@jdesignlab/theme';
import { BoxProps } from '../types';

export const Box = (props: BoxProps) => {
  const {
    children,
    as = 'div',
    color,
    backgroundColor = 'shades-transparent',
    style = {},
    className,
    role = 'presentation',
    ...restProps
  } = props;
  const Component = as;
  const defaultClassName = createClassVariant('box', 'wrapper');
  const boxClassName = className ? `${defaultClassName} ${className}` : defaultClassName;
  const defaultBackgroundColor = getColorByToken(backgroundColor);
  const defaultTextColor = setTextColorByBackground(defaultBackgroundColor);
  style.backgroundColor = defaultBackgroundColor;
  style.color = color ? getColorByToken(color) : defaultTextColor;

  return (
    <Component role={role} css={style} className={boxClassName} {...restProps}>
      {children}
    </Component>
  );
};
