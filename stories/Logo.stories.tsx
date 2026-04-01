import type { Meta, StoryObj } from '@storybook/react';

import Logo from '../src/components/Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const WithImage: Story = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png',
    withColorPair: true,
  },
};

export const WithoutColorPair: Story = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png',
    withColorPair: false,
  },
};

export const FallbackIcon: Story = {
  args: {
    src: null,
  },
};
