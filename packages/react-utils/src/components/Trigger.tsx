/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface TriggerProps {
  children: ReactNode;
  onClick(): void;
  id?: string;
}

const triggerStyle = css({
  display: 'inline-block',
  cursor: 'pointer'
});

export const Trigger = (props: TriggerProps) => {
  const { children, onClick, id, ...rest } = props;
  const ariaControl = id ? { 'aria-control': id } : {};

  return (
    <div onClick={onClick} css={triggerStyle} {...ariaControl} {...rest}>
      {children}
    </div>
  );
};

Trigger.displayName = 'Trigger';
