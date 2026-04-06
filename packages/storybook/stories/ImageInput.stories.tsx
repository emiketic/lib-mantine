import type { Meta, StoryObj } from '@storybook/react';

import ImageInput from '../src/components/ImageInput';

const meta: Meta<typeof ImageInput> = {
  title: 'Components/ImageInput',
  component: ImageInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageInput>;

export const Default: Story = {
  args: {
    label: 'Profile picture',
  },
};

export const WithoutPreview: Story = {
  args: {
    label: 'Upload image',
    withPreview: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Profile picture',
    disabled: true,
    value: 'https://avatars.githubusercontent.com/u/10828' ,
  },
};
