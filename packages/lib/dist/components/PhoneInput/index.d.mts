import * as react_jsx_runtime from 'react/jsx-runtime';
import { PhoneInputProps } from './types.mjs';
import 'libphonenumber-js';
import '@mantine/core';

declare function PhoneInput({ value, defaultValue, defaultCountryCode, ...props }: PhoneInputProps): react_jsx_runtime.JSX.Element;

export { PhoneInput as default };
