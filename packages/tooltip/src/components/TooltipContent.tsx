/** @jsxImportSource @emotion/react */
import { tooltipContentStyle, tooltipLocationStyle } from '../styles';
import { css } from '@emotion/react';
import type { TooltipLabelProps } from '../types';
import React, { useRef, useEffect, useContext, useState } from 'react';
import TooltipContext from '../context';

const Content = (props: TooltipLabelProps) => {
  const { targetWidth, targetHeight, isHovering, gap } = useContext(TooltipContext);
  const { on } = props;
  const [labelStyle, setLabelStyle] = useState<ReturnType<typeof css>>();
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLabelStyle(
      css({ ...tooltipLocationStyle(labelRef, targetWidth, targetHeight, gap, on) }, { ...tooltipContentStyle })
    );
  }, [targetWidth, targetHeight, isHovering]);

  return (
    <>
      {isHovering && (
        <div ref={labelRef} css={labelStyle}>
          {props.children}
        </div>
      )}
    </>
  );
};

Content.displayName = 'Tooltip.Content';
export default Content;
