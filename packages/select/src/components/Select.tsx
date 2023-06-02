/** @jsxImportSource @emotion/react */
import { filterComponent } from '@jdesignlab/react-utils';
import { SelectProvider } from '../hooks/SelectContext';
import { useSelect } from '../hooks/useSelect';
import { SelectContainer } from './SelectContainer';
import { SelectTrigger } from './SelectTrigger';
import { SelectInput } from './SelectInput';
import { SelectOption } from './SelectOption';
import type { SelectProps } from '../types';

export const Select = (props: SelectProps) => {
  const { children, ...propsWithoutChildren } = props;
  const { getPlaceHolder } = useSelect();
  const SelectTrigger = filterComponent(children, Select.Trigger, true);
  const RestChildren = filterComponent(children, Select.Trigger, false);

  const selectProps = {
    ...propsWithoutChildren,
    placeholder: getPlaceHolder(SelectTrigger)
  };

  return (
    <SelectProvider selectProps={selectProps} onValueChange={props.onValueChange} options={RestChildren}>
      <SelectContainer Trigger={SelectTrigger} Options={RestChildren} />
    </SelectProvider>
  );
};

Select.Trigger = SelectTrigger;
Select.Input = SelectInput;
Select.Option = SelectOption;
