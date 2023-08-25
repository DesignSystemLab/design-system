import { createContext } from 'react';
import type { ReturnContext } from './types';

export const RadioContext = createContext<ReturnContext | null>(null);
