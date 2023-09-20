/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { createClassVariant } from '@jdesignlab/theme';
import * as Style from '../styles';
import { CardContext } from '../context';

export const CardDivider = () => {
  const { direction } = useContext(CardContext).styleProps;
  return (
    <div
      css={Style.createDivider(direction)}
      role="presentation"
      className={createClassVariant('card', 'content', 'divider')}
    />
  );
};

CardDivider.displayName = 'CardDivider';
