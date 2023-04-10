/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import createDividerStyle from '../styles/createDividerStyle';
import { CardContext } from './CardContext';

export const CardDivider = () => {
  const { direction } = useContext(CardContext).styleProps;
  return <div css={createDividerStyle(direction)} />;
};
