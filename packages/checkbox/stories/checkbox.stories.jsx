import { Checkbox } from '../src';

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

export const WithColors = () => (
  <>
    <Checkbox value={1}> color</Checkbox>
    <Checkbox> color</Checkbox>
    <Checkbox disabled>disabled</Checkbox>
    <Checkbox checked disabled>
      checked disabled
    </Checkbox>
    <Checkbox.Group defaultValue={[2]}>
      <Checkbox value={1}>1</Checkbox>
      <Checkbox value={2}>2</Checkbox>
      <Checkbox value={3}>3</Checkbox>
      <div>123</div>
    </Checkbox.Group>
  </>
);
