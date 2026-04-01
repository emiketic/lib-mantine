import type { Meta, StoryObj } from '@storybook/react';

import TextEditor from '../src/components/TextEditor';

const meta: Meta<typeof TextEditor> = {
  title: 'Components/TextEditor',
  component: TextEditor,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div style={{ padding: '1rem', maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextEditor>;

export const Empty: Story = {};

export const WithInitialContent: Story = {
  args: {
    content: '<h2>Hello World</h2><p>Start editing this content…</p>',
  },
};
