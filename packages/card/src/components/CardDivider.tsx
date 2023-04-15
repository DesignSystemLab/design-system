/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import createDividerStyle from '../styles/createDividerStyle';
import { CardContext } from './CardContext';

export const CardDivider = () => {
  const { direction } = useContext(CardContext).styleProps;
  return (
    <div
      css={createDividerStyle(direction)}
      role="presentation"
      className={createClassVariant('card', 'content', 'divider')}
    />
  );
};
