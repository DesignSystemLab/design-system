import { createContext } from 'react';
import { DEFAULT_CARD_STYLE } from './constants';
import type { ReturnContext } from './types';

export const defaultContextValues: ReturnContext = {
  cardProps: {},
  styleProps: DEFAULT_CARD_STYLE
};

export const CardContext = createContext<ReturnContext>(defaultContextValues);
