import type { Meta, StoryObj } from '@storybook/react';

import ContentLoader from '../src/components/ContentLoader';

const meta: Meta<typeof ContentLoader> = {
  title: 'Components/ContentLoader',
  component: ContentLoader,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ContentLoader>;

export const Default: Story = {};

export const WithCircle: Story = {
  args: { withCircle: true },
};

export const SingleGroup: Story = {
  args: { numberOfBarGroups: 1, numberOfBars: 5 },
};

export const Hidden: Story = {
  args: { visible: false },
};
