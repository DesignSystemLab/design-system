/** @jsxImportSource @emotion/react */
import { filterComponent } from '@jdesignlab/react-utils';
import { Checkbox } from './Checkbox';
import { CheckboxGroupContext } from '../context';
import type { CheckboxGroupProps } from '../types';

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { children } = props;
  const checkboxChildren = filterComponent(children, Checkbox, true);
  const contextValue = {
    checkedValues: props.defaultValue ?? []
  };

  return <CheckboxGroupContext.Provider value={contextValue}>{checkboxChildren}</CheckboxGroupContext.Provider>;
};

CheckboxGroup.displayName = 'Checkbox.Group';
