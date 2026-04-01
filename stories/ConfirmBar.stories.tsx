import type { Meta, StoryObj } from '@storybook/react';

import ConfirmBar from '../src/components/ConfirmBar';

const meta: Meta<typeof ConfirmBar> = {
  title: 'Components/ConfirmBar',
  component: ConfirmBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ConfirmBar>;

export const Default: Story = {
  args: {
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled!'),
  },
};

export const Loading: Story = {
  args: {
    onConfirm: () => {},
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    onConfirm: () => {},
    disabled: true,
  },
};

export const CustomLabels: Story = {
  args: {
    onConfirm: () => alert('Saved!'),
    onCancel: () => alert('Discarded!'),
    labelProps: { confirm: 'Save changes', cancel: 'Discard' },
    color: 'green',
  },
};

export const WithoutCancel: Story = {
  args: {
    onConfirm: () => alert('Done!'),
    withCancel: false,
  },
};
