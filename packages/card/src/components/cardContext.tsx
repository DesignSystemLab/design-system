import { createContext, useEffect, useState } from 'react';
import { useStyle } from '../useStyle';
import type { StyleProps } from '../types';

interface ReturnContext {
  style: StyleProps;
}

export const CardContext = createContext<ReturnContext | null>(null);

export const CardProvider = ({ ...props }) => {
  const { cardProps, children } = props;
  const style = useStyle(cardProps);

  return (
    <CardContext.Provider
      value={{
        style: { ...style }
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
