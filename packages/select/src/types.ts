import React, { RefObject } from 'react';
import { ColorToken } from '@jdesignlab/theme';
import type { Dispatch, SetStateAction } from 'react';

type Value = string | number;
export type Placement = 'top' | 'right' | 'bottom' | 'left';

export type StyleProps = {
  color: ColorToken;
  placement: Placement;
  disabled: boolean;
  placeholder: string | null;
  defaultValue: string | null;
};

export interface ContainerProps {
  Trigger: React.ReactNode;
  Options: React.ReactNode;
}

export type OptionValue = {
  key: Value;
  name: string;
  isDisabled: boolean;
};

export interface ReturnContext {
  onValueChange?: (value: string | number | null) => void;
  selectProps: StyleProps;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  setSelectedOption: Dispatch<SetStateAction<OptionValue>>;
  selectedOption: OptionValue;
  setOptions: Dispatch<SetStateAction<OptionValue[]>>;
  options: OptionValue[];
  setSelectRef: Dispatch<SetStateAction<any>>;
  selectRef: RefObject<HTMLElement> | null;
  setSearchValues: Dispatch<SetStateAction<any>>;
  searchValues: OptionValue[];
  searchKeyword: string;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
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
  children: React.ReactNode;
  value: Value;
  disabled?: boolean;
}

export interface ComoboboxOptionProps {
  children: React.ReactNode;
  value: Value;
  disabled?: boolean;
}
