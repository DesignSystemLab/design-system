import { TextInput } from '../src';
import { useForm } from 'react-hook-form';
import { Mobile } from '@jdesignlab/react-icons';
import { Button } from '../../button';

export default {
  title: 'Forms/TextInput',
  component: TextInput,
  decorators: [Story => <Story />]
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

export const withLabel = () => (
  <TextInput>
    <TextInput.Label>라벨이에요</TextInput.Label>
  </TextInput>
);
export const withMessage = () => (
  <TextInput>
    <TextInput.Message consistent={true}>메세지예요</TextInput.Message>
  </TextInput>
);
export const defaultValue = () => <TextInput defaultValue="디폴트값이에요"></TextInput>;
export const placeholder = () => (
  <TextInput placeholder="나는 placeholder">
    <TextInput.Label>라벨</TextInput.Label>
  </TextInput>
);
export const disabled = () => <TextInput disabled defaultValue="디폴트로 넣어놓고 disabled!" />;
export const clearable = () => <TextInput clearable defaultValue="디폴트값인데 clearable!" />;
export const withIcon = () => <TextInput icon={<Mobile />} />;
export const size = () => (
  <>
    <TextInput size="sm" width={300} defaultValue="sm">
      <TextInput.Label>sm이에요</TextInput.Label>
    </TextInput>
    <TextInput size="md" width={300} defaultValue="md">
      <TextInput.Label>md이에요</TextInput.Label>
    </TextInput>
    <TextInput size="lg" width={300} defaultValue="lg">
      <TextInput.Label>lg이에요</TextInput.Label>
    </TextInput>
    <TextInput size="sm" defaultValue="sm">
      <TextInput.Label>sm이에요</TextInput.Label>
    </TextInput>
    <TextInput size="md" defaultValue="md">
      <TextInput.Label>md이에요</TextInput.Label>
    </TextInput>
    <TextInput size="lg" defaultValue="lg">
      <TextInput.Label>lg이에요</TextInput.Label>
    </TextInput>
  </>
);
export const withReactHookForm = () => {
  const { register, handleSubmit } = useForm();
  const createChallenge = data => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(createChallenge)}>
      <TextInput {...register('testInput1', { required: true })}>
        <TextInput.Label>ReactHookForm도 돼요</TextInput.Label>
      </TextInput>
      <Button type="submit">Submit</Button>
    </form>
  );
};
