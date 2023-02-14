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
            <div style={{ width: '100px', height: '100px', background: 'red' }}>1</div>
            <div style={{ width: '100px', height: '100px', background: 'blue' }}>2</div>
            <div style={{ width: '100px', height: '100px', background: 'green' }}>3</div>
            <div style={{ width: '100px', height: '100px', background: 'yellow' }}>4</div>
        </Flex>
        <hr />
        <Flex direction="row-reverse">
            <div style={{ width: '100px', height: '100px', background: 'red' }}>1</div>
            <div style={{ width: '100px', height: '100px', background: 'blue' }}>2</div>
            <div style={{ width: '100px', height: '100px', background: 'green' }}>3</div>
            <div style={{ width: '100px', height: '100px', background: 'yellow' }}>4</div>
        </Flex>
        <hr />
        <Flex direction="column">
            <div style={{ width: '100px', height: '100px', background: 'red' }}>1</div>
            <div style={{ width: '100px', height: '100px', background: 'blue' }}>2</div>
            <div style={{ width: '100px', height: '100px', background: 'green' }}>3</div>
            <div style={{ width: '100px', height: '100px', background: 'yellow' }}>4</div>
        </Flex>
        <hr />
        <Flex direction="column" items="center">
            <div style={{ width: '100px', height: '100px', background: 'red' }}>1</div>
            <div style={{ width: '100px', height: '100px', background: 'blue' }}>2</div>
            <div style={{ width: '100px', height: '100px', background: 'green' }}>3</div>
            <div style={{ width: '100px', height: '100px', background: 'yellow' }}>4</div>
        </Flex>
        <hr />
        <Flex direction="column-reverse">
            <div style={{ width: '100px', height: '100px', background: 'red' }}>1</div>
            <div style={{ width: '100px', height: '100px', background: 'blue' }}>2</div>
            <div style={{ width: '100px', height: '100px', background: 'green' }}>3</div>
            <div style={{ width: '100px', height: '100px', background: 'yellow' }}>4</div>
        </Flex>
    </>
);

export const Order = () => (
    <>
        <Flex direction="row" gap={5}>
            <div order={4} style={{ width: '100px', height: '100px', background: 'red' }}>
                1 (order=4)
            </div>
            <div order={2} style={{ width: '100px', height: '100px', background: 'blue' }}>
                2 (order =2)
            </div>
            <div order={3} style={{ width: '100px', height: '100px', background: 'green', height: '50px' }}>
                3 (order=3)
            </div>
            <div style={{ width: '100px', height: '100px', background: 'yellow' }}>4(no order)</div>
        </Flex>
    </>
);

export const AlignSelf = () => (
    <Flex direction="column" items="center" gap={5}>
        <div style={{ width: '100px', height: '100px', background: 'red' }}>1 </div>
        <div style={{ width: '100px', height: '100px', background: 'blue' }}>2 </div>
        <div self="start" style={{ width: '100px', height: '100px', background: 'green' }}>
            3 (start)
        </div>
        <div self="end" style={{ width: '100px', height: '100px', background: 'yellow' }}>
            4 (end)
        </div>
    </Flex>
);

export const Basis = () => (
    <Flex gap={5}>
        <div flex={1} style={{ width: '100px', height: '100px', background: 'red' }}>
            (flex:1)
        </div>
        <div flex={2} style={{ width: '100px', height: '100px', background: 'blue' }}>
            (flex:2)
        </div>
        <div flex={3} style={{ width: '100px', height: '100px', background: 'green' }}>
            (flex:3)
        </div>
        <div self="end" style={{ width: '100px', height: '100px', background: 'yellow' }}>
            (no flex)
        </div>
    </Flex>
);
