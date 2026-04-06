import type { Meta, StoryObj } from '@storybook/react';

import NoData from '../src/components/NoData';

const meta: Meta<typeof NoData> = {
  title: 'Components/NoData',
  component: NoData,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NoData>;

export const Default: Story = {};

export const CustomTitle: Story = {
  args: {
    title: 'No results found',
    children: 'Try adjusting your search filters.',
  },
};

export const WithChildren: Story = {
  args: {
    title: 'Your list is empty',
    children: <a href="#">Create your first item</a>,
  },
};
