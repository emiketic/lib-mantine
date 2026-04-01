import type { Meta, StoryObj } from '@storybook/react';

import PhoneInput from '../src/components/PhoneInput';

const meta: Meta<typeof PhoneInput> = {
  title: 'Components/PhoneInput',
  component: PhoneInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {
  args: {
    label: 'Phone number',
  },
};

export const WithDefaultCountry: Story = {
  args: {
    label: 'Phone number',
    defaultCountryCode: 'TN',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Phone number',
    disabled: true,
    value: '+21698765432',
  },
};
