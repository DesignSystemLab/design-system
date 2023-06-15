import { ThemeProvider } from '@jdesignlab/j-provider';
export const decorators = [
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
];
