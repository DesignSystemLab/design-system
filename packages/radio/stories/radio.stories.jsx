import React, { useState } from 'react';
import { Radio } from '../src';

export default {
  title: 'forms/Radio',
  component: Radio,
  decorators: [Story => <Story />]
};

const argTypes = {};

const Template = args => {
  const [value, setValue] = useState(null);
  const handleRadioChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <Radio {...args}>Some Content</Radio>
      <p>Select Value : {value}</p>
      <Radio.Group defaultValue="peach" onChange={handleRadioChange}>
        <Radio defaultChecked color="red-base" value="mario">
          Mario
        </Radio>
        <Radio value="luigi" color="green-base">
          Luigi
        </Radio>
        <Radio value="peach" color="pink-lighten3">
          Peach
        </Radio>
      </Radio.Group>
    </>
  );
};

export const Basic = Template.bind({});
Basic.argTypes = argTypes;

export const size = () => {
  return (
    <>
      <Radio size="sm">Small</Radio>
      <Radio size="md">Medium</Radio>
      <Radio size="lg">Large</Radio>
    </>
  );
};

export const readonly = () => {
  return (
    <>
      <Radio readonly color="red-base">
        read only
      </Radio>
      <Radio color="red-base">normal</Radio>
    </>
  );
};

export const disabled = () => {
  return (
    <>
      <Radio disabled>disabled</Radio>
    </>
  );
};
