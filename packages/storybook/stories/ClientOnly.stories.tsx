import type { Meta, StoryObj } from '@storybook/react';

import ClientOnly from '../src/components/ClientOnly';

const meta: Meta<typeof ClientOnly> = {
  title: 'Components/ClientOnly',
  component: ClientOnly,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ClientOnly>;

export const Default: Story = {
  args: {
    children: <p>This content only renders on the client.</p>,
  },
};

export const WithLoader: Story = {
  args: {
    children: <p>Loaded!</p>,
    withLoader: true,
  },
};
