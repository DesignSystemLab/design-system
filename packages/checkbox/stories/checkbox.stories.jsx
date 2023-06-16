import { Checkbox } from '../src';
import { useForm } from 'react-hook-form';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: [
    Story => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Story />
      </div>
    )
  ]
};

const argTypes = {};

const Template = args => <Checkbox {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
Basic.argTypes = argTypes;

export const WithColors = () => {
  const { register, handleSubmit } = useForm();

  const createChallenge = data => {
    console.log(data);
  };

  return (
    <>
      <Checkbox>checkbox</Checkbox>
      <Checkbox color="amber-accent2">amber-accent2</Checkbox>
      <Checkbox disabled>disabled</Checkbox>
      <Checkbox defaultChecked disabled>
        checked disabled
      </Checkbox>
      <Checkbox.Group defaultValue={[2]}>
        <Checkbox value={1}>1</Checkbox>
        <Checkbox value={2}>2</Checkbox>
        <Checkbox value={3}>3</Checkbox>
      </Checkbox.Group>
      <form onSubmit={handleSubmit(createChallenge)}>
        <Checkbox {...register('checkbox1')}>checkbox1</Checkbox>
        <Checkbox defaultChecked {...register('checkbox2')}>
          checkbox2
        </Checkbox>

        <button type="submit">작성</button>
      </form>
    </>
  );
};
