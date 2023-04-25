import { Flex } from '../src';
// import type { FlexItemProps, FlexContainerProps } from '../src/flex-types';

export default {
  title: 'Components/Flex',
  component: Flex,
  decorators: [Story => <Story />]
};

const argTypes = {};

const Template = args => <Flex {...args} />;

export const Basic = () => (
  <>
    <Flex direction="row">
      <Flex.Item style={{ width: '100px', height: '100px', background: 'red' }}>1</Flex.Item>
      <Flex.Item style={{ width: '100px', height: '100px', background: 'blue' }}>2</Flex.Item>
      <Flex.Item style={{ width: '100px', height: '100px', background: 'green' }}>3</Flex.Item>
      <Flex.Item style={{ width: '100px', height: '100px', background: 'yellow' }}>4</Flex.Item>
    </Flex>
    <hr />
    <Flex direction="row-reverse">
      <Flex.Item style={{ width: '100px', height: '100px', background: 'red' }}>1</Flex.Item>
      <Flex.Item style={{ width: '100px', height: '100px', background: 'blue' }}>2</Flex.Item>
      <Flex.Item style={{ width: '100px', height: '100px', background: 'green' }}>3</Flex.Item>
      <Flex.Item style={{ width: '100px', height: '100px', background: 'yellow' }}>4</Flex.Item>
    </Flex>
    <hr />
    <Flex direction="column">
      <Flex.Item style={{ width: '100px', height: '100px', background: 'red' }}>1</Flex.Item>
      <Flex.Item style={{ width: '100px', height: '100px', background: 'blue' }}>2</Flex.Item>
      <Flex.Item style={{ width: '100px', height: '100px', background: 'green' }}>3</Flex.Item>
      <Flex.Item style={{ width: '100px', height: '100px', background: 'yellow' }}>4</Flex.Item>
    </Flex>
    <hr />
    <Flex direction="column" items="center">
      <Flex.Item style={{ width: '100px', height: '100px', background: 'red' }}>1</Flex.Item>
      <Flex.Item style={{ width: '100px', height: '100px', background: 'blue' }}>2</Flex.Item>
      <Flex.Item style={{ width: '100px', height: '100px', background: 'green' }}>3</Flex.Item>
      <Flex.Item style={{ width: '100px', height: '100px', background: 'yellow' }}>4</Flex.Item>
    </Flex>
    <hr />
    <Flex direction="column-reverse">
      <Flex.Item style={{ width: '100px', height: '100px', background: 'red' }}>1</Flex.Item>
      <Flex.Item style={{ width: '100px', height: '100px', background: 'blue' }}>2</Flex.Item>
      <Flex.Item style={{ width: '100px', height: '100px', background: 'green' }}>3</Flex.Item>
      <Flex.Item style={{ width: '100px', height: '100px', background: 'yellow' }}>4</Flex.Item>
    </Flex>
  </>
);

export const Order = () => (
  <>
    <Flex direction="row" gap={5}>
      <Flex.Item order={4} style={{ width: '100px', height: '100px', background: 'red' }}>
        1 (order=4)
      </Flex.Item>
      <Flex.Item order={2} style={{ width: '100px', height: '100px', background: 'blue' }}>
        2 (order =2)
      </Flex.Item>
      <Flex.Item order={3} style={{ width: '100px', height: '100px', background: 'green', height: '50px' }}>
        3 (order=3)
      </Flex.Item>
      <Flex.Item style={{ width: '100px', height: '100px', background: 'yellow' }}>4(no order)</Flex.Item>
    </Flex>
  </>
);

export const AlignSelf = () => (
  <Flex direction="column" items="center" gap={5}>
    <Flex.Item style={{ width: '100px', height: '100px', background: 'red' }}>1 </Flex.Item>
    <Flex.Item style={{ width: '100px', height: '100px', background: 'blue' }}>2 </Flex.Item>
    <Flex.Item self="start" style={{ width: '100px', height: '100px', background: 'green' }}>
      3 (start)
    </Flex.Item>
    <Flex.Item self="end" style={{ width: '100px', height: '100px', background: 'yellow' }}>
      4 (end)
    </Flex.Item>
  </Flex>
);

export const Basis = () => (
  <Flex gap={5}>
    <Flex.Item as="span" flex={1} style={{ width: '100px', height: '100px', background: 'red' }}>
      (flex:1)
    </Flex.Item>
    <Flex.Item flex={2} style={{ width: '100px', height: '100px', background: 'blue' }}>
      (flex:2)
    </Flex.Item>
    <Flex.Item flex={3} style={{ width: '100px', height: '100px', background: 'green' }}>
      (flex:3)
    </Flex.Item>
    <Flex.Item self="end" style={{ width: '100px', height: '100px', background: 'yellow' }}>
      (no flex)
    </Flex.Item>
  </Flex>
);
