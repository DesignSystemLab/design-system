/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { getComponentText } from '@jdesignlab/react-utils';
import { getColorByTokenOrHex } from '@jdesignlab/theme';
import { ELEMENT_MAP, DEFAULT_COLOR } from './constants';
import { typography } from './styles/typography';
import { createFontStyle } from './styles/createFontStyle';
import type { TextProps, ElementToken } from './types';

export const Text = (props: TextProps) => {
  const {
    as,
    variant = 'paragraph',
    size = 'md',
    transform = 'none',
    fontStyle = 'normal',
    decoration = 'none',
    align = 'start',
    color = DEFAULT_COLOR
  } = props;

  const elementToken: ElementToken = variant === 'heading' ? `${variant}-${size}` : variant;
  const Component = as || ELEMENT_MAP[elementToken];
  const text = getComponentText(props.children);
  const fontColor = getColorByTokenOrHex(color);

  return (
    <Component css={[typography(size, variant), createFontStyle(transform, fontStyle, decoration, align, fontColor)]}>
      {text}
    </Component>
  );
};
