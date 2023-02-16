import { Stack } from '../src';

export default {
  title: 'Components/Stack',
  component: Stack,
  decorators: [Story => <Story style={{ border: '2px solid blue' }} />]
};

const argTypes = {
  spacing: {
    name: 'sapcing',
    type: { name: 'boolean', required: false },
    description: 'Item Spacing',
    control: { type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  }
};

const Template = args => (
  <Stack {...args}>
    <div style={{ height: '64px', backgroundColor: '#ff4d4d' }}>first</div>
    <div style={{ height: '64px', backgroundColor: '#3ae374' }}>second</div>
    <div style={{ height: '64px', backgroundColor: '#18dcff' }}>third</div>
  </Stack>
);

export const StackBasic = Template.bind({});
StackBasic.argTypes = argTypes;

export const StackTemplate = () => (
  <>
    <h2>Vertical.</h2>
    <Stack direction="vertical" justify="stretch" spacing="20px">
      <div style={{ height: '64px', width: '64px', backgroundColor: '#ff4d4d' }}>first</div>
      <div style={{ height: '64px', width: '64px', backgroundColor: '#3ae374' }}>second</div>
      <div style={{ height: '64px', width: '64px', backgroundColor: '#18dcff' }}>third</div>
      <div style={{ height: '64px', width: '64px', backgroundColor: '#7d5fff' }}>fourth</div>
    </Stack>
    <h2>Horizontal And Responsive.</h2>
    <Stack direction="horizontal" justify="stretch" responsive>
      <div style={{ height: '64px', width: '64px', backgroundColor: '#ff4d4d' }}>first</div>
      <div style={{ height: '64px', width: '64px', backgroundColor: '#3ae374' }}>second</div>
      <div style={{ height: '64px', width: '64px', backgroundColor: '#18dcff' }}>third</div>
      <div style={{ height: '64px', width: '64px', backgroundColor: '#7d5fff' }}>fourth</div>
    </Stack>
    <h2>Change element through 'as' prop</h2>
    <ul>
      <Stack direction="horizontal" align="start" responsive as="li">
        <strong>Mario Familly</strong>
        <a href="#">Mario</a>
        <a href="#">Luigi</a>
        <a href="#">Yoshi</a>
        <a href="#">Peach</a>
      </Stack>
      <Stack direction="horizontal" align="start" responsive as="li">
        <strong>Bowser's Minions</strong>
        <a href="#">Bowser</a>
        <a href="#">Bowser .Jr</a>
        <a href="#">Wario</a>
        <a href="#">Waluigi</a>
      </Stack>
    </ul>
  </>
);
