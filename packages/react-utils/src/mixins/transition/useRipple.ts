import { useState, createElement } from 'react';
import { css, jsx, keyframes } from '@emotion/react';
import type { Ripple } from './types';
import { MouseEvent } from 'react';

const rippleEffect = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`;
const rippleStyle = css`
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ${rippleEffect} 600ms linear;
  background-color: rgba(255, 255, 255, 0.5);
  overflow: hidden;
`;

export const useRipple = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const { pageX, pageY, currentTarget } = event;
    const button = currentTarget;
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const newRipple = {
      x: pageX - button.offsetLeft - radius,
      y: pageY - button.offsetTop - radius,
      size: diameter
    };
    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples(ripples.slice(1));
    }, 400);
  };

  const rippleNodes = ripples.map((ripple: Ripple, index: number) =>
    jsx('span', {
      key: index,
      css: [
        rippleStyle,
        {
          left: ripple.x,
          top: ripple.y,
          width: ripple.size,
          height: ripple.size
        }
      ]
    })
  );

  return { ripples, createRipple, rippleNodes };
};
