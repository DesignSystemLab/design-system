import { Select } from '../src';
import { useState } from 'react';

export default {
  title: 'Components/Select',
  component: Select,
  decorators: [Story => <Story style={{ margin: 'auto 0' }} />]
};

const argTypes = {};

const Template = args => {
  const [value, setValue] = useState('');
  return (
    <>
      <h3>SelectValue: {value || '값을 선택해주세요~'}</h3>
      <p>Default Selectbox</p>
      <Select
        color="red-lighten3"
        defaultValue="mario"
        onValueChange={value => {
          setValue(value);
        }}
      >
        <Select.Trigger placeholder="Mario Characters">
          <Select.Input />
        </Select.Trigger>
        <Select.Option value="mario">리마리오</Select.Option>
        <Select.Option value="mari2">마리오</Select.Option>
        <Select.Option value="luigi">루이지</Select.Option>
        <Select.Option value="koopa" disabled>
          쿠파
        </Select.Option>
        <Select.Option value="peach">피치</Select.Option>
      </Select>
    </>
  );
};

export const SelectBasic = Template.bind({});
SelectBasic.argTypes = argTypes;
