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
    <Checkbox color="amber-lighten1" />
    <Checkbox checked color="lightBlue-darken1" />
    <Checkbox disabled label="test" />
    <Checkbox checked disabled />
    <checkbox />
  </>
);
