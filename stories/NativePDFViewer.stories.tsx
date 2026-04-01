import type { Meta, StoryObj } from '@storybook/react';

import NativePDFViewer from '../src/components/NativePDFViewer';

const meta: Meta<typeof NativePDFViewer> = {
  title: 'Components/NativePDFViewer',
  component: NativePDFViewer,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div style={{ width: '800px', height: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NativePDFViewer>;

export const Default: Story = {
  args: {
    mediaUrl: 'https://www.w3.org/WAI/WCAG21/wcag21.pdf',
    withToolbar: true,
  },
};

export const WithoutToolbar: Story = {
  args: {
    mediaUrl: 'https://www.w3.org/WAI/WCAG21/wcag21.pdf',
    withToolbar: false,
  },
};

export const NoUrl: Story = {
  args: {},
};
