import { TextInput } from '../src';
import { Telephone, Mobile } from '@jdesignlab/react-icons';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  decorators: [
    Story => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
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
  size: {
    name: 'size',
    type: { name: 'string', required: false },
    description: 'input size',
    control: { type: 'radio', options: ['sm', 'md', 'lg'] }
  }
};

const Template = args => <TextInput {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  size: 'md'
};
Basic.argTypes = argTypes;

export const Examples = () => (
  <>
    <TextInput width={300} size="sm" maxLength={5} icon={<Mobile />}>
      <TextInput.Label>sm 라벨</TextInput.Label>
      <TextInput.Message consistent>consistentmessageconsistentmessage</TextInput.Message>
    </TextInput>
    <TextInput size="md">
      <TextInput.Label>md clearable이 아니야</TextInput.Label>
      <TextInput.Message>messagemessage</TextInput.Message>
    </TextInput>
    <TextInput size="lg" disabled>
      <TextInput.Label>disabled</TextInput.Label>
    </TextInput>
    <TextInput size="lg" placeholder="나는 placeholder">
      <TextInput.Label>라벨이자나</TextInput.Label>
    </TextInput>
    <TextInput size="sm" defaultValue="나는 defaultValue">
      <TextInput.Label>defaultValue</TextInput.Label>
    </TextInput>
    <TextInput size="md" clearable defaultValue="나는 clearable">
      <TextInput.Label>clearable</TextInput.Label>
    </TextInput>
    <TextInput size="lg" disabled>
      <TextInput.Label>disabled</TextInput.Label>
    </TextInput>
    <TextInput placeholder="나는 placeholder">
      <TextInput.Label>라벨이자나</TextInput.Label>
    </TextInput>
    <TextInput size="sm" defaultValue="나는 defaultValue">
      <TextInput.Label>defaultValue</TextInput.Label>
    </TextInput>
    <TextInput size="md" clearable defaultValue="나는 clearable">
      <TextInput.Label>clearable</TextInput.Label>
    </TextInput>
    <TextInput size="lg" disabled>
      <TextInput.Label>disabled</TextInput.Label>
    </TextInput>
    <TextInput placeholder="나는 placeholder"></TextInput>
  </>
);
