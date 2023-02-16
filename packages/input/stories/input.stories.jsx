import { TextInput } from '../src';
import { VisibleIcon, ClearableIcon } from '@jdesignlab/theme';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  decorators: [
    Story => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Story />
      </div>
    )
  ]
};

const argTypes = {
  defaultValue: {
    name: 'defaultValue',
    type: { name: 'string', required: false },
    description: 'input defaultValue',
    control: 'text'
  },
  label: {
    name: 'label',
    type: { name: 'string', required: false },
    description: 'input label',
    control: 'text'
  },
  placeholder: {
    name: 'placeholder',
    type: { name: 'string', required: false },
    description: 'input placeholder',
    control: 'text'
  },
  variant: {
    name: 'variant',
    type: { name: 'string', required: false },
    description: 'input variant',
    control: {
      type: 'select',
      options: ['outline', 'filled', 'solo']
    }
  },
  inputSize: {
    name: 'inputSize',
    type: { name: 'string', required: false },
    description: 'input size',
    control: { type: 'radio', options: ['sm', 'md', 'lg', 'xl'] }
  }
};

const Template = args => <TextInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
Basic.argTypes = argTypes;

export const WithTypes = () => (
  <>
    <TextInput placeholder="placeholder">
      <TextInput.Label>no default value</TextInput.Label>
    </TextInput>
    <TextInput defaultValue="clearable">
      <TextInput.Label>label</TextInput.Label>
      <TextInput.Right icon={<ClearableIcon />} />
    </TextInput>
    <TextInput variant="filled" defaultValue="defaultValue">
      <TextInput.Label>label</TextInput.Label>
    </TextInput>
    <TextInput disabled>
      <TextInput.Label>label</TextInput.Label>
      <TextInput.Right>Right</TextInput.Right>
    </TextInput>
  </>
);
