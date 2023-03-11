/** @jsxImportSource @emotion/react */
import { tooltipWrapperStyle, tooltipLabelStyle, tooltipTargetStyle, tooltipLocationStyle } from './tooltip-style';
import { css } from '@emotion/react';
import type { TooltipProps, TooltipLabelProps, TooltipTargetPrpos } from './tooltip-types';
import React, { useRef, useEffect, useContext, useState } from 'react';

const TooltipContext = React.createContext({
  targetWidth: 0,
  setTargetWidth: (w: number) => {},
  targetHeight: 0,
  setTargetHeight: (h: number) => {},
  isHovering: false,
  setIsHovering: (value: boolean) => {},
  gap: 0
});

export const Tooltip = (props: TooltipProps) => {
  const { children } = props;

  const [targetWidth, setTargetWidth] = useState<number>(0);
  const [targetHeight, setTargetHeight] = useState<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const gap = Number(props.gap) || 2;

  const providerValue = { targetWidth, targetHeight, setTargetWidth, setTargetHeight, gap, isHovering, setIsHovering };
  return (
    <TooltipContext.Provider value={providerValue}>
      <div css={tooltipWrapperStyle}>
        {children && Array.isArray(children) && children?.map(child => React.cloneElement(child))}
      </div>
    </TooltipContext.Provider>
  );
};

const Label = (props: TooltipLabelProps) => {
  const { targetWidth, targetHeight, isHovering, gap } = useContext(TooltipContext);
  const { on } = props;
  const [labelStyle, setLabelStyle] = useState<ReturnType<typeof css>>();
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLabelStyle(
      css({ ...tooltipLocationStyle(labelRef, targetWidth, targetHeight, gap, on) }, { ...tooltipLabelStyle })
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

const Target = (props: TooltipTargetPrpos) => {
  let { setTargetWidth, setTargetHeight, setIsHovering } = useContext(TooltipContext);
  const targetRef = useRef(null);

  useEffect(() => {
    if (targetRef.current) {
      const style = getComputedStyle(targetRef.current);
      setTargetWidth(parseInt(style.width, 10));
      setTargetHeight(parseInt(style.height, 10));
    }
  }, [targetRef]);

  const onMouseEnter = () => {
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    //TODO div 없애고 children에 바로 ref 연결
    <div css={tooltipTargetStyle} ref={targetRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {props.children}
    </div>
  );
};

Tooltip.Label = Label;
Tooltip.Target = Target;
