import { Box } from '../src';

export default {
  title: 'Components/Box',
  component: Box,
  decorators: [Story => <Story />]
};

export const BoxTemplate = () => (
  <>
    <Box>Basic Box</Box>
    <Box color="green-darken4" style={{ backgroundColor: 'tomato', width: '64px', height: '64px' }}>
      <span>first</span>
    </Box>``
    <Box color="primary-500" style={{ backgroundColor: 'tomato', width: '64px', height: '64px' }}>
      <span>second</span>
    </Box>
    <Box style={{ backgroundColor: 'tomato', width: '64px', height: '64px' }}>
      <span>Third</span>
    </Box>

    <Box as="h3">As Box List</Box>
    <ul>
      <Box as="li" color="red-base" style={{ maxWidth: '50px' }}>
        <span>first</span>
      </Box>
      <Box as="li" color="orange-base" style={{ maxWidth: '50px' }}>
        <span>second</span>
      </Box>
      <Box as="li" color="yellow-base" style={{ maxWidth: '50px' }}>
        <span>third</span>
      </Box>
      <Box as="li" color="green-base" style={{ maxWidth: '50px' }}>
        <span>fourth</span>
      </Box>
    </ul>
  </>
);
