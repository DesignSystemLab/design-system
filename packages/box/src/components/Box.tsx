/** @jsxImportSource @emotion/react */
import { getColorByToken, setTextColorByBackground, createClassVariant } from '@jdesignlab/theme';
import { BoxProps } from '../types';

export const Box = (props: BoxProps) => {
  const { children, as = 'div', color, style = {}, className, ...restProps } = props;
  const Component = as;
  const defaultClassName = createClassVariant('box', 'wrapper');
  const boxClassName = className ? `${defaultClassName} ${className}` : defaultClassName;

  if (color) {
    const bgColor = getColorByToken(color);
    const textColor = setTextColorByBackground(bgColor);
    style.color = textColor;
    style.backgroundColor = bgColor;
  }

  return (
    <Component css={style} className={boxClassName} {...restProps}>
      {children}
    </Component>
  );
};
