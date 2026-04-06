import React from 'react';

import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <MantineProvider>
        <Story />
      </MantineProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
};

export default preview;
