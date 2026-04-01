import { Button } from '@mantine/core';
import type { Meta, StoryObj } from '@storybook/react';

import PageContainer from '../src/components/PageContainer';

const meta: Meta<typeof PageContainer> = {
  title: 'Components/PageContainer',
  component: PageContainer,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof PageContainer>;

export const Default: Story = {
  args: {
    title: 'Page Title',
    children: <p>Page content goes here.</p>,
  },
};

export const WithRightSection: Story = {
  args: {
    title: 'Users',
    rightSection: <Button size="sm">Add user</Button>,
    children: <p>User list here.</p>,
  },
};

export const FullPage: Story = {
  args: {
    fullPage: true,
    children: <p>Full page content without header.</p>,
  },
};

export const WithScroll: Story = {
  args: {
    title: 'Scrollable Page',
    withContentScroll: true,
    children: (
      <div style={{ height: '2000px' }}>
        <p>Scroll down…</p>
      </div>
    ),
  },
};
