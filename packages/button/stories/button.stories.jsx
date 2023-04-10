import { Button } from '../src';
import { Settings, Volume } from '@jdesignlab/react-icons';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    Story => (
      <div style={{ display: 'flex', gap: '5px' }}>
        <Story />
      </div>
    )
  ]
};

const argTypes = {
  color: {
    name: 'color',
    type: { name: 'string', required: false },
    description: 'button color',
    control: 'text'
  },
  variant: {
    name: 'variant',
    type: { name: 'string', required: false },
    description: 'button variant',
    control: {
      type: 'select',
      options: ['solid', 'outline', 'ghost', 'link', 'unstyled']
    }
  },
  children: {
    name: 'children',
    type: { name: 'string', required: false },
    description: 'button label',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Button' }
    },
    control: 'text'
  },
  size: {
    name: 'size',
    type: { name: 'string', required: false },
    description: 'button size',
    control: { type: 'radio', options: ['sm', 'md', 'lg', 'xl'] }
  }
};

const Template = args => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'button',
  size: 'xl'
};
Basic.argTypes = argTypes;

const onClick = () => {
  console.log('clicked!');
};

export const WithColors = () => (
  <>
    <Button variant="ghost" color="blue-base">
      blue
    </Button>
    <Button variant="ghost" color="lightGreen-base">
      lightGreen
    </Button>
    <Button variant="outline" color="blue-darken1" size="xl">
      blue-darken1
    </Button>
    <Button color="red-lighten3">red-lighten3</Button>
    <Button color="pink-accent2">pink-accent2</Button>
    <Button color="primary-500">primary</Button>
    <Button variant="outline" color="secondary-500">
      secondary
    </Button>
    <Button color="success">success</Button>
    <Button color="info">info</Button>
    <Button color="warning">warning</Button>
    <Button color="disabled">disabled</Button>
    <Button color="error">error</Button>
    <Button>no color</Button>
  </>
);

export const WithVariants = () => (
  <div>
    <Button variant="solid" onClick={onClick}>
      solid
    </Button>
    <Button variant="outline" onClick={onClick}>
      outline
    </Button>
    <Button variant="ghost">ghost</Button>
    <Button variant="link">link</Button>
    <Button variant="unstyled">unstyled</Button>
    <br />
    <br />
    <Button variant="solid" onClick={onClick} disabled>
      solid
    </Button>
    <Button variant="outline" onClick={onClick} disabled>
      outline
    </Button>
    <Button variant="ghost" disabled>
      ghost
    </Button>
    <Button variant="link" disabled>
      link
    </Button>
    <Button variant="unstyled" disabled>
      unstyled
    </Button>
  </div>
);

export const WithSizes = () => (
  <>
    <Button size="sm">Button</Button>
    <Button size="md">Button</Button>
    <Button size="lg">Button</Button>
    <Button size="xl">Button</Button>
  </>
);
