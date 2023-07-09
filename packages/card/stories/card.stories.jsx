import { Card } from '../src';
import { Text } from '@jdesignlab/typography';

export default {
  title: 'data display/Card',
  component: Card,
  decorators: [Story => <Story />]
};

const argTypes = {};

const Template = args => (
  <Card {...args}>
    <Card.Header>
      <Text>Title</Text>
    </Card.Header>
    <Card.Divider />
    <Card.Body>
      <Text>Content</Text>
    </Card.Body>
    <Card.Divider />
    <Card.Footer>
      <Text>Footer</Text>
    </Card.Footer>
  </Card>
);

export const Basic = Template.bind({});
Basic.argTypes = argTypes;

export const variant = () => {
  return (
    <>
      <Card variant="elevated">
        <Card.Header>
          <Text>Title</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Text>Content</Text>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Text>Footer</Text>
        </Card.Footer>
      </Card>
      <br />
      <Text variant="heading">Elevated Style Card</Text>
      <Card variant="elevated">
        <Card.Header>
          <Text>Title</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Text>Content</Text>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Text>Footer</Text>
        </Card.Footer>
      </Card>
      <br />
      <Text variant="heading">Outlined Style Card</Text>
      <Card variant="outlined">
        <Card.Header>
          <Text>Title</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Text>Content</Text>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Text>Footer</Text>
        </Card.Footer>
      </Card>
      <br />
      <Text variant="heading">Filled Style Card</Text>
      <Card variant="filled" color="primary-200">
        <Card.Header>
          <Text>Title</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Text>Content</Text>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Text>Footer</Text>
        </Card.Footer>
      </Card>
    </>
  );
};

export const Direction = () => {
  return (
    <>
      <Text variant="heading">Horizontal Style Card</Text>
      <Card variant="filled" color="grey-lighten3" justify="around" align="center" direction="horizontal">
        <Card.Header>
          <Text>Left</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Text>Central</Text>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Text>Right</Text>
        </Card.Footer>
      </Card>

      <br />
      <Text variant="heading">Card SuperFamicom</Text>
      <Card className={'testcard'}>
        <Card.Header>
          <Text variant="heading" size="lg" color="orange-accent2">
            Super Famicom
          </Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <img
            src="https://images.unsplash.com/photo-1630051822408-b80dde2f5681?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Green double couch with wooden legs"
            width="100%"
          />
        </Card.Body>
        <Card.Divider />
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
};
