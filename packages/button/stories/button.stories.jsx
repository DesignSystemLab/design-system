import { Button } from '../src';
import { Mobile, Heart } from '@jdesignlab/react-icons';

export default {
  title: 'Actions/Button',
  tags: ['autodocs'],
  component: Button,
  decorators: [
    Story => (
      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        <Story />
      </div>
    )
  ]
};

const argTypes = {
  icon: {
    name: 'icon',
    control: { type: 'boolean' }
  },
  as: {
    name: 'as',
    control: { type: 'select' }
  }
};

const Template = args => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'button',
  size: 'xl'
};
Basic.argTypes = argTypes;

export const variant = () => (
  <>
    <Button variant="solid">solid</Button>
    <Button variant="outline">outline</Button>
    <Button variant="ghost">ghost</Button>
    <Button variant="link">link</Button>
    <Button variant="unstyled">unstyled</Button>
  </>
);

export const size = () => (
  <>
    <Button size="sm">SM</Button>
    <Button size="md">MD</Button>
    <Button size="lg">LG</Button>
    <Button size="xl">XL</Button>
  </>
);

export const disabled = () => <Button disabled>disabled</Button>;

export const color = () => (
  <>
    <Heart color="grey" fill="grey" width={16} height={16} />0<Button color="red-lighten5">red-lighten5</Button>
    <Button color="pink-lighten4">pink-lighten4</Button>
    <Button color="purple-lighten3">purple-lighten3</Button>
    <Button color="deepPurple-lighten2">deepPurple-lighten2</Button>
    <Button color="indigo-lighten1">indigo-lighten1</Button>
    <Button color="blue-base">blue-base</Button>
    <Button color="lightBlue-darken1">lightBlue-darken1</Button>
    <Button color="cyan-darken2">cyan-darken2</Button>
    <Button color="teal-darken3">teal-darken3</Button>
    <Button color="green-darken4">green-darken4</Button>
    <Button color="lightGreen-accent1">lightGreen-accent1</Button>
    <Button color="orange-accent2">orange-accent2</Button>
    <Button color="deepOrange-accent3">deepOrange-accent3</Button>
  </>
);

export const full = () => <Button full>full</Button>;

export const icon = () => <Button icon={<Mobile />}>CALL</Button>;

export const as = () => <Button as="a"> Anchor</Button>;
