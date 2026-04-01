import { useEffect, useState } from 'react';

import { getCountryData, getEmojiFlag, TCountryCode } from 'countries-list';
import parsePhoneNumber, {
  CountryCode,
  getCountries,
  getCountryCallingCode,
} from 'libphonenumber-js';

import { Group, Select, TextInput } from '@mantine/core';

import { PhoneInputProps } from './types';

const COUNTRY_CODES = getCountries();

function PhoneInput({ value, defaultValue, defaultCountryCode, ...props }: PhoneInputProps) {
  const valueNumber = value ?? '';
  const valueNumberData = parsePhoneNumber(valueNumber);
  let valueNumberCountryCode: string | undefined;
  if (valueNumberData?.isValid()) {
    valueNumberCountryCode = valueNumberData.country;
  }

  const [selectedCountryCode, setSelectedCountryCode] = useState<CountryCode | undefined>(
    defaultCountryCode,
  );
  const selectedCountryCodeCallingNumber = selectedCountryCode
    ? getCountryCallingCode(selectedCountryCode)
    : undefined;

  useEffect(() => {
    if (selectedCountryCode && selectedCountryCode !== valueNumberCountryCode) {
      const code = selectedCountryCode ?? defaultCountryCode ?? '';
      const callingCode = getCountryCallingCode(code);
      if (props.onChange) {
        const numberUpdate = `+${callingCode}${valueNumber.replace(callingCode, '')}`;
        const numberUpdateData = parsePhoneNumber(numberUpdate, selectedCountryCode);
        if (numberUpdateData?.isValid()) {
          props.onChange(`+${callingCode}${valueNumber.replace(callingCode, '')}`);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountryCode]);

  return (
    <Group wrap="nowrap">
      <Select
        label="Country code"
        size="sm"
        classNames={{ ...props.classNames }}
        defaultValue={defaultCountryCode}
        value={valueNumberCountryCode}
        onChange={(c) => {
          if (c === null) {
            setSelectedCountryCode(undefined);
          } else {
            setSelectedCountryCode(c as CountryCode | undefined);
          }
        }}
        data={COUNTRY_CODES.map((code) => {
          const countryCallingCode = getCountryCallingCode(code);
          const countryName = getCountryData(code as TCountryCode).name;
          return {
            value: code,
            label: `${countryName} ${getEmojiFlag(code as TCountryCode)} +${countryCallingCode}`,
          };
        })}
        rightSection={props.disabled ? <></> : undefined}
        disabled={props.disabled}
        searchable
      />
      <TextInput
        {...props}
        defaultValue={valueNumberData?.nationalNumber}
        onChange={(e) => {
          if (props.onChange && selectedCountryCodeCallingNumber) {
            const numberUpdate = `+${selectedCountryCodeCallingNumber}${e.currentTarget.value.replace(selectedCountryCodeCallingNumber, '')}`;
            const numberUpdateData = parsePhoneNumber(numberUpdate, selectedCountryCode);
            if (numberUpdateData?.isValid()) {
              props.onChange(numberUpdateData.number);
            }
          }
        }}
      />
    </Group>
  );
}

export default PhoneInput;
