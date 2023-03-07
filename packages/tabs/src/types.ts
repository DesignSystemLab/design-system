import { CSSObject } from '@emotion/react';
import type { ColorToken } from '@jdesignlab/theme';
import type { Dispatch, SetStateAction } from 'react';

export type TabVariant = 'enclosed' | 'underline';
export type TabSize = 'sm' | 'md' | 'lg';

export interface TabsProps {
  children: React.ReactNode;
  defaultValue: string;
  variant?: TabVariant;
  onChange?: () => {};
  size?: TabSize;
  color: ColorToken;
}

export interface TabsListProps {
  children: React.ReactNode;
  full?: boolean;
}

export interface TabsTriggerProps {
  children: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface TabsContentProps {
  children: React.ReactNode;
  value: string;
}

export interface TabChangeHandleProps {
  selectedTab: string;
  hasTouched: boolean;
  setHasTouched: Dispatch<SetStateAction<boolean>>;
  onChange?: () => {};
}
