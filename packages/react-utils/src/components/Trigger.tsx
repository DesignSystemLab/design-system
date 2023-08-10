/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface TriggerProps {
  children: ReactNode;
  onClick(): void;
}

const triggerStyle = css({
  display: 'inline-block',
  cursor: 'pointer'
});

export const Trigger = (props: TriggerProps) => {
  const { children, onClick, ...rest } = props;
  return (
    <div onClick={onClick} css={triggerStyle} {...rest}>
      {children}
    </div>
  );
};

Trigger.displayName = 'Trigger';
