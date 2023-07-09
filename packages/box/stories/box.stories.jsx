import { Box } from '../src';
import { Text } from '../../text';

export default {
  title: 'layout/Box',
  component: Box,
  decorators: [Story => <Story />]
};

const argTypes = {};
const Template = args => <Box {...args}>Basic Box</Box>;
export const Basic = Template.bind({});
Basic.argTypes = argTypes;

export const Example = () => (
  <Box>
    <Text variant="heading">Basic Box</Text>
    <Box backgroundColor="primary-500" color="font" style={{ width: '64px', height: '64px' }}>
      <span>first</span>
    </Box>
    <Box backgroundColor="secondary-500" color="font" style={{ width: '64px', height: '64px' }}>
      <span>second</span>
    </Box>
    <Box backgroundColor="red-base" color="font" style={{ width: '64px', height: '64px' }}>
      <span>Third</span>
    </Box>
  </Box>
);

export const as = () => {
  return (
    <ul>
      <Box as="li" color="font" style={{ maxWidth: '50px' }}>
        <span>first</span>
      </Box>
      <Box as="li" color="font" style={{ maxWidth: '50px' }}>
        <span>second</span>
      </Box>
      <Box as="li" color="font" style={{ maxWidth: '50px' }}>
        <span>third</span>
      </Box>
      <Box as="li" color="font" style={{ maxWidth: '50px' }}>
        <span>fourth</span>
      </Box>
    </ul>
  );
};
