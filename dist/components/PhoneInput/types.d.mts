import { CountryCode } from 'libphonenumber-js';
import { TextInputProps } from '@mantine/core';

interface PhoneInputProps extends Omit<TextInputProps, 'onChange'> {
    value?: string;
    defaultValue?: string;
    defaultCountryCode?: CountryCode;
    onChange?: (value: string) => void;
}

export type { PhoneInputProps };
