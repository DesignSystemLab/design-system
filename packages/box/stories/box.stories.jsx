import { Box } from '../src';

export default {
    title: 'Components/Box',
    component: Box,
    decorators: [Story => <Story />]
};

export const BoxTemplate = () => (
    <>
        <Box>
            <Box width="64px" height="64px" center backgroundColor="yellow-base">
                <span>first</span>
            </Box>
            <Box width="64px" height="64px" center backgroundColor="blue-base">
                <span>second</span>
            </Box>
            <Box width="64px" height="64px" center backgroundColor="amber-base">
                <span>third</span>
            </Box>
            <Box width="64px" height="64px" center backgroundColor="cyan-base">
                <span>fourth</span>
            </Box>
        </Box>
    </>
);
