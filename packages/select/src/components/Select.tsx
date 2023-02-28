/** @jsxImportSource @emotion/react */
import { SelectProvider } from '../hooks/SelectContext';
import { useSelect } from '../hooks/useSelect';
import { SelectContainer } from './SelectContainer';
import { SelectTrigger } from './SelectTrigger';
import { SelectOption } from './SelectOption';
import type { SelectProps } from '../types';

export const Select = (props: SelectProps) => {
  const { children, ...propsWithoutChildren } = props;
  const { filterChildren, getPlaceHolder } = useSelect();
  const SelectTrigger = filterChildren(children, Select.Trigger, true);
  const RestChildren = filterChildren(children, Select.Trigger, false);
  const selectProps = {
    ...propsWithoutChildren,
    placeholder: getPlaceHolder(SelectTrigger)
  };

  return (
    <SelectProvider selectProps={selectProps} onValueChange={props.onValueChange} options={RestChildren}>
      <Select.Container Trigger={SelectTrigger}>{RestChildren}</Select.Container>
    </SelectProvider>
  );
};

Select.Container = SelectContainer;
Select.Trigger = SelectTrigger;
Select.Option = SelectOption;
