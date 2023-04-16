/** @jsxImportSource @emotion/react */
import { tooltipTargetStyle } from '../styles';
import type { TooltipTargetPrpos } from '../types';
import { useRef, useEffect, useContext } from 'react';
import TooltipContext from '../context';

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
    <div css={tooltipTargetStyle} ref={targetRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {props.children}
    </div>
  );
};

Target.display = 'Tooltip.Target';
export default Target;
