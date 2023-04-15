/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { PopoverContext } from './PopoverContext';

export const PopoverContainer = (props: { children: React.ReactNode; Trigger: React.ReactNode }) => {
  const { Trigger, children } = props;
  const context = useContext(PopoverContext);

  return (
    <div css={context?.style.positionRelative}>
      {Trigger}
      <div css={context?.style.mainStyleProps}>{children}</div>
    </div>
  );
};
