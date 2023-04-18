/** @jsxImportSource @emotion/react */
import { tooltipTargetStyle } from '../styles';
import type { TooltipTargetPrpos } from '../types';
import { useContext } from 'react';
import TooltipContext from '../context';

const Target = (props: TooltipTargetPrpos) => {
  const { id, targetRef, setIsHovering } = useContext(TooltipContext);

  const onMouseEnter = () => {
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      css={tooltipTargetStyle}
      ref={targetRef}
      aria-haspopup={true}
      aria-describedby={id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onMouseEnter}
      onBlur={onMouseLeave}
    >
      {props.children}
    </div>
  );
};

Target.displayName = 'Tooltip.Target';
export default Target;
