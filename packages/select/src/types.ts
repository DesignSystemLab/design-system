import React, { RefObject } from 'react';
import { ColorToken } from '@jdesignlab/theme';
import type { Dispatch, SetStateAction } from 'react';

export type Placement = 'top' | 'right' | 'bottom' | 'left';

export type StyleProps = {
  color: ColorToken;
  placement: Placement;
  disabled: boolean;
  placeholder: string | null;
  defaultValue: string | null;
};

export type OptionValue = {
  key: string | null;
  name: string | null;
};

export interface ReturnContext {
  onValueChange?: (value: string | null) => void;
  selectProps: StyleProps;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  setValue: Dispatch<SetStateAction<OptionValue>>;
  value: OptionValue;
  setValues: Dispatch<SetStateAction<OptionValue[]>>;
  values: OptionValue[];
  setSelectRef: Dispatch<SetStateAction<any>>;
  selectRef: RefObject<HTMLElement> | null;
}

export interface SelectProps {
  children: React.ReactNode;
  onValueChange?: (value: string | null) => void;
  color?: ColorToken;
  placement?: Placement;
  disabled?: boolean;
  defaultValue?: string | null;
}

export interface SelectOptionProps {
  children: React.ReactElement;
  value: string;
  disabled?: boolean;
}
