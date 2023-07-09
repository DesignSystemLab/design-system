import { Textarea } from '../src';
import { variantPresetColors } from '@jdesignlab/theme';
import { Stack } from '../../stack';

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
  title: 'forms/Textarea',
  component: Textarea,
  decorators: [Story => <Story />]
};

const argTypes = {
  color: {
    name: 'color',
    type: { name: 'string', required: false },
    description: 'textarea color',
    control: { type: 'select', options: getVariantPresetColors() }
  },
  maxWidth: {
    name: 'maxWidth',
    type: { name: 'number', required: false },
    description: 'Set Textarea max-width',
    control: 'number'
  },
  maxHeight: {
    name: 'maxHeight',
    type: { name: 'number', required: false },
    description: 'Set Textarea max-height',
    control: 'number'
  },
  defaultValue: {
    name: 'defaultValue',
    type: { name: 'string', required: false },
    description: 'default Value',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' }
    },
    control: 'text'
  },
  appearance: {
    name: 'appearance',
    type: { name: 'string', required: false },
    description: 'Set Textarea set apperance',
    control: { type: 'radio', options: ['standard', 'none'] }
  },
  resize: {
    name: 'resize',
    type: { name: 'string', required: false },
    description: 'textarea resize',
    control: { type: 'radio', options: ['vertical', 'horizontal', 'smart', 'none'] }
  }
};

const Template = args => <Textarea {...args} />;

export const Basic = Template.bind({});
Basic.argTypes = argTypes;

export const resize = () => {
  return (
    <Stack direction="vertical">
      <Textarea resize="horizontal" placeholder="horizontal" />
      <Textarea resize="vertical" placeholder="vertical" />
      <Textarea resize="smart" placeholder="smart" />
      <Textarea resize="none" placeholder="none" />
    </Stack>
  );
};

export const appearance = () => {
  return (
    <Stack direction="vertical">
      <Textarea appearance="standard" color="primary-500" placeholder="standard textarea" />
      <Textarea appearance="none" color="error" placeholder="none textarea" />
    </Stack>
  );
};

export const maxwidth = () => {
  return (
    <Stack direction="vertical">
      <Textarea resize="horizontal" color="primary-500" placeholder="maxWidth: 480px" />
      <Textarea resize="horizontal" maxWidth={720} placeholder="maxWidth: 720px" />
    </Stack>
  );
};
export const maxHeight = () => {
  return (
    <Stack direction="vertical">
      <Textarea color="primary-500" resize="vertical" placeholder="maxHeight: 64px" />
      <Textarea maxHeight={128} resize="vertical" placeholder="maxHeight: 128px" />
    </Stack>
  );
};
