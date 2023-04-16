/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { PopoverContext } from './PopoverContext';

export const PopoverBody = (props: { children: React.ReactNode }) => {
  const context = useContext(PopoverContext);
  return <section>{props.children}</section>;
  // return <section css={context?.style.bodyStyleProps}>{props.children}</section>;
};
