import { Card } from '../src';
import { Flex } from '@jdesignlab/flex';
export default {
  title: 'Components/Card',
  component: Card,
  decorators: [Story => <Story />]
};

const argTypes = {};

const Template = args => (
  <>
    <Card {...args}>
      <Card.Header>
        <h2>Famicom Controller</h2>
      </Card.Header>
      <Card.Body>
        <img
          src="https://images.unsplash.com/photo-1630051822408-b80dde2f5681?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt="Green double couch with wooden legs"
          width="360px"
        />
      </Card.Body>
      <Card.Footer>
        <dl>
          <div>
            <dt>
              <strong>Price.</strong>
            </dt>
            <dd>4.0 USD</dd>
          </div>

          <div>
            <dt>
              <strong>Description.</strong>
            </dt>
            <dd>It is a basic controller component for Superfamicom.</dd>
          </div>
        </dl>
      </Card.Footer>
    </Card>
  </>
);

export const Example = () => {
  return (
    <ul>
      <Card align="center" direction="horizontal" justify="start" divider as={'li'}>
        <Card.Header>
          <h1>Title</h1>
        </Card.Header>
        <Card.Body>
          <p>Card Content.</p>
        </Card.Body>
        <Card.Footer>
          <p>Footer</p>
        </Card.Footer>
      </Card>
      <Card align="center" direction="vertical" justify="start" divider as={'li'}>
        <Card.Header>
          <h1>Title</h1>
        </Card.Header>
        <Card.Body>
          <p>Card Content.</p>
        </Card.Body>
        <Card.Footer>
          <p>Footer</p>
        </Card.Footer>
      </Card>
    </ul>
  );
};

export const Basic = Template.bind({});
Basic.argTypes = argTypes;
