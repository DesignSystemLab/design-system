import { Box } from '../src';

export default {
    title: 'Components/Box',
    component: Box,
    decorators: [Story => <Story />]
};

export const BoxTemplate = () => (
    <>
        <Box>
            <Box width="64px" height="64px" backgroundColor="yellow-base">
                <span>first</span>
            </Box>
            <Box width="64px" height="64px" backgroundColor="blue-base">
                <span>second</span>
            </Box>
            <Box width="64px" height="64px" backgroundColor="amber-base">
                <span>third</span>
            </Box>
            <Box width="64px" height="64px" backgroundColor="cyan-base">
                <span>fourth</span>
            </Box>
        </Box>

        <Box as="h3">As Box List</Box>
        <ul>
            <Box width="64px" height="64px" as="li" backgroundColor="yellow-base">
                <span>first</span>
            </Box>
            <Box width="64px" height="64px" as="li" backgroundColor="blue-base">
                <span>second</span>
            </Box>
            <Box width="64px" height="64px" as="li" backgroundColor="amber-base">
                <span>third</span>
            </Box>
            <Box width="64px" height="64px" as="li" backgroundColor="cyan-base">
                <span>fourth</span>
            </Box>
        </ul>
    </>
);
