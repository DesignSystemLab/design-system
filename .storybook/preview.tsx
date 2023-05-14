import React from 'react';
import { ThemeProvider } from '@jdesignlab/j-provider';

const preview = {
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    )
  ]
};

export default preview;
