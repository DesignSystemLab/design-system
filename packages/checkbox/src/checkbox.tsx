/** @jsxImportSource @emotion/react */
import { variantPresetColors } from '@jdesignlab/theme';
import type { ColorToken, Color } from '@jdesignlab/theme';
import type { CheckboxSize, CheckboxProps } from './checkbox-types';
import { getColorByToken, hexToRgba } from '@jdesignlab/theme';
import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';

const checkboxSizeSet: CheckboxSize[] = ['sm', 'md', 'lg', 'xl'];

const checkboxWrapperStyle = {};
const checkboxDefaultColorToken: ColorToken = 'teal-lighten3';

const checkboxDefaultStyle = (color: ColorToken | undefined) => {
  color = color || checkboxDefaultColorToken;
  return css({
    accentColor: getColorByToken(color)
  });
};
const Checkbox = (props: CheckboxProps) => {
  const checkboxStyle = {
    ...checkboxDefaultStyle(props?.color)
  };
  return (
    <div className="checkbox_wrapper" css={checkboxWrapperStyle}>
      <label>
        <input type="checkbox" name="color" value="blue" {...props} css={checkboxStyle} /> Blue
      </label>
    </div>
  );
};

Checkbox.displayName = 'Input';

export default Checkbox;
