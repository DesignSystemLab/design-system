import { Select } from '../src';
import { Button } from '@jdesignlab/button';
import { Flex } from '@jdesignlab/flex';
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
      <Select
        color="red-lighten3"
        defaultValue="mario"
        onValueChange={value => {
          setValue(value);
        }}
      >
        <Select.Trigger placeholder="Mario Characters" />
        <Select.Option value="mario">Mario</Select.Option>
        <Select.Option value="luigi">Luigi</Select.Option>
        <Select.Option value="koopa">Koopa</Select.Option>
        <Select.Option value="peach">Peach</Select.Option>
      </Select>
    </>
  );
};

export const SelectBasic = Template.bind({});
SelectBasic.argTypes = argTypes;
