import type { ColorToken } from '@jdesignlab/theme';
import type { Dispatch, SetStateAction } from 'react';

export type TabVariant = 'enclosed' | 'underline';
export type TabSize = 'sm' | 'md' | 'lg';

export interface TabsProps {
  children: React.ReactNode;
  defaultValue?: string;
  variant?: TabVariant;
  onChange?: () => void;
  size?: TabSize;
  lazy?: boolean;
  full?: boolean;
}

export interface TabsListProps {
  children: React.ReactNode;
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
  selectedTab: string | undefined;
  hasTouched: boolean;
  setHasTouched: Dispatch<SetStateAction<boolean>>;
  onChange?: () => void;
}
