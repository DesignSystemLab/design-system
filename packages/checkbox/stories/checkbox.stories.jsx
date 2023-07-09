import { Checkbox } from '../src';
import { useForm } from 'react-hook-form';
import { Button } from '../../button';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  decorators: [
    Story => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <Story />
      </div>
    )
  ]
};

const argTypes = {};

const Template = args => <Checkbox {...args}>체크박스</Checkbox>;

export const Basic = Template.bind({});
Basic.args = {};
Basic.argTypes = argTypes;

export const defaultChecked = () => <Checkbox defaultChecked>default checked</Checkbox>;

export const onChange = () => {
  const handleChange = event => {
    console.log(`checked? : ${event.target.checked}`);
    if (event.target.checked) {
      console.log(`checked value : ${event.target.value}`);
    }
  };
  return (
    <Checkbox value="선택1" onChange={handleChange}>
      선택1
    </Checkbox>
  );
};

export const disabled = () => <Checkbox disabled>disabled</Checkbox>;

export const checkboxGroup = () => (
  <Checkbox.Group defaultValue={[2]}>
    <Checkbox value={1}>선택1</Checkbox>
    <Checkbox value={2}>선택2</Checkbox>
    <Checkbox value={3}>선택3</Checkbox>
  </Checkbox.Group>
);

export const color = () => (
  <>
    <Checkbox color="red-lighten5">red-lighten5</Checkbox>
    <Checkbox color="pink-lighten4">pink-lighten4</Checkbox>
    <Checkbox color="purple-lighten3">purple-lighten3</Checkbox>
    <Checkbox color="deepPurple-lighten2">deepPurple-lighten2</Checkbox>
    <Checkbox color="indigo-lighten1">indigo-lighten1</Checkbox>
    <Checkbox color="blue-base">blue-base</Checkbox>
    <Checkbox color="lightBlue-darken1">lightBlue-darken1</Checkbox>
    <Checkbox color="cyan-darken2">cyan-darken2</Checkbox>
    <Checkbox color="teal-darken3">teal-darken3</Checkbox>
    <Checkbox color="green-darken4">green-darken4</Checkbox>
    <Checkbox color="lightGreen-accent1">lightGreen-accent1</Checkbox>
    <Checkbox color="orange-accent2">orange-accent2</Checkbox>
    <Checkbox color="deepOrange-accent3">deepOrange-accent3</Checkbox>
  </>
);

export const withReactHookForm = () => {
  const { register, handleSubmit } = useForm();

  const createChallenge = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(createChallenge)}>
      <Checkbox {...register('checkbox1')}>checkbox1</Checkbox>
      <Checkbox defaultChecked {...register('checkbox2')}>
        checkbox2
      </Checkbox>
      <Button type="submit">Submit</Button>
    </form>
  );
};
