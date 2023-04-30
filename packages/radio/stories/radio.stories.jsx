import React, { useState } from 'react';
import { variantPresetColors } from '@jdesignlab/theme';
import { ThemeProvider } from '@jdesignlab/j-provider';
import { Radio } from '../src';

function getVariantPresetColors() {
  const colors = [];
  for (const color in variantPresetColors) {
    const colorProps = variantPresetColors[color];
    for (const colorProp in colorProps) {
      colors.push(`${color}-${colorProp}`);
    }
  }
  return colors;
}

export default {
  title: 'Components/Radio',
  component: Radio,
  decorators: [Story => <Story />]
};

const argTypes = {
  color: {
    name: 'color',
    type: { name: 'string', required: false },
    description: 'textarea color',
    control: { type: 'select', options: getVariantPresetColors() }
  },
  children: {
    name: 'children',
    type: { name: 'string', required: false },
    description: 'default Value',
    control: 'text'
  },
  readonly: {
    name: 'readonly',
    type: { name: 'boolean', required: false },
    description: 'readonly',
    control: { type: 'radio', options: [true, false] }
  },
  disabled: {
    name: 'disabled',
    type: { name: 'boolean', required: false },
    description: '',
    control: { type: 'radio', options: [true, false] }
  }
};

const Template = args => <Radio {...args} />;

export const RadioBasic = Template.bind({});
RadioBasic.argTypes = argTypes;

export const RadioGroup = () => {
  return (
    <div>
      <h2>Radio Group</h2>
      <ThemeProvider>
        <Radio.Group defaultValue="radio1" onChange={e => console.log(e.target.value)}>
          <Radio defaultChecked value="radio1">
            first
          </Radio>
          <Radio value="radio2">second</Radio>
          <Radio value="radio3">third</Radio>
        </Radio.Group>
      </ThemeProvider>
    </div>
  );
};

export const RadioTempalte = () => {
  const [value, setValue] = useState(null);
  const handleRadioChange = e => {
    setValue(e.target.value);
  };

  return (
    <ThemeProvider>
      <p>Select Value : {value}</p>
      <Radio name="contract" color="amber-lighten3" value="email" onChange={handleRadioChange}>
        email
      </Radio>
      <Radio name="contract" color="amber-lighten3" value="fax" onChange={handleRadioChange}>
        fax
      </Radio>
      <Radio name="contract" color="amber-lighten3" value="phone" onChange={handleRadioChange}>
        phone
      </Radio>
      <hr />
      <Radio name="contract" color="green-lighten2" value="disabled" disabled>
        disabled
      </Radio>
      <Radio name="contract" color="green-lighten2" value="readonly" readonly>
        readonly
      </Radio>
      <Radio
        name="contract"
        color="green-lighten2"
        value="readonly-click"
        readonly
        onClick={e => {
          alert(e.target.value);
        }}
      >
        readonly (ClickMe)
      </Radio>
      <hr />
      <Radio name="contract" color="amber-lighten3" size="sm" value="sm" onChange={handleRadioChange}>
        small-radio
      </Radio>
      <Radio name="contract" color="amber-lighten3" size="md" value="md" onChange={handleRadioChange}>
        medium-radio
      </Radio>
      <Radio name="contract" color="amber-lighten3" size="lg" value="lg" onChange={handleRadioChange}>
        large-radio
      </Radio>
    </ThemeProvider>
  );
};
