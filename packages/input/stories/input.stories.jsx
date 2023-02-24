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

export const TextInputBasic = () => (
    <>
        <TextInput variant="outlined" color="amber-accent1" inputSize="sm" defaultValue="나는 defaultValue">
            <TextInput.Label>[sm] defaultValue</TextInput.Label>
            <TextInput.Right>Right</TextInput.Right>
        </TextInput>
        <TextInput variant="outlined" inputSize="md" color="cyan-base" clearable defaultValue="나는 clearable">
            <TextInput.Label>[md] clearable</TextInput.Label>
            <TextInput.Right />
        </TextInput>
        <TextInput variant="outlined" inputSize="lg" color="indigo-accent2" disabled>
            <TextInput.Label>[lg] disabled</TextInput.Label>
        </TextInput>
        <TextInput variant="outlined" inputSize="xl" color="brown-lighten3" placeholder="나는 placeholder">
            <TextInput.Label>[xl] placeholder</TextInput.Label>
        </TextInput>

        <TextInput variant="filled" color="amber-accent1" inputSize="sm" defaultValue="나는 defaultValue">
            <TextInput.Label>[sm] defaultValue</TextInput.Label>
            <TextInput.Right>Right</TextInput.Right>
        </TextInput>
        <TextInput variant="filled" inputSize="md" color="cyan-base" clearable defaultValue="나는 clearable">
            <TextInput.Label>[md] clearable</TextInput.Label>
            <TextInput.Right />
        </TextInput>
        <TextInput variant="filled" inputSize="lg" color="indigo-accent2" disabled>
            <TextInput.Label>[lg] disabled</TextInput.Label>
        </TextInput>
        <TextInput variant="filled" inputSize="xl" color="brown-lighten3" placeholder="나는 placeholder">
            <TextInput.Label>[xl] placeholder</TextInput.Label>
        </TextInput>

        <TextInput variant="solo" color="amber-accent1" inputSize="sm" defaultValue="나는 defaultValue">
            <TextInput.Label>[sm] defaultValue</TextInput.Label>
            <TextInput.Right>Right</TextInput.Right>
        </TextInput>
        <TextInput variant="solo" inputSize="md" color="cyan-base" clearable defaultValue="나는 clearable">
            <TextInput.Label>[md] clearable</TextInput.Label>
            <TextInput.Right />
        </TextInput>
        <TextInput variant="solo" inputSize="lg" color="indigo-accent2" disabled>
            <TextInput.Label>[lg] disabled</TextInput.Label>
        </TextInput>
        <TextInput variant="solo" inputSize="xl" color="brown-lighten3" placeholder="나는 placeholder">
            <TextInput.Label>[xl] placeholder</TextInput.Label>
        </TextInput>
    </>
);
