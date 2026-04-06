import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { getCountryData, getEmojiFlag } from "countries-list";
import parsePhoneNumber, {
  getCountries,
  getCountryCallingCode
} from "libphonenumber-js";
import { Group, Select, TextInput } from "@mantine/core";
const COUNTRY_CODES = getCountries();
function PhoneInput({ value, defaultValue, defaultCountryCode, ...props }) {
  const valueNumber = value ?? "";
  const valueNumberData = parsePhoneNumber(valueNumber);
  let valueNumberCountryCode;
  if (valueNumberData?.isValid()) {
    valueNumberCountryCode = valueNumberData.country;
  }
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    defaultCountryCode
  );
  const selectedCountryCodeCallingNumber = selectedCountryCode ? getCountryCallingCode(selectedCountryCode) : void 0;
  useEffect(() => {
    if (selectedCountryCode && selectedCountryCode !== valueNumberCountryCode) {
      const code = selectedCountryCode ?? defaultCountryCode ?? "";
      const callingCode = getCountryCallingCode(code);
      if (props.onChange) {
        const numberUpdate = `+${callingCode}${valueNumber.replace(callingCode, "")}`;
        const numberUpdateData = parsePhoneNumber(numberUpdate, selectedCountryCode);
        if (numberUpdateData?.isValid()) {
          props.onChange(`+${callingCode}${valueNumber.replace(callingCode, "")}`);
        }
      }
    }
  }, [selectedCountryCode]);
  return /* @__PURE__ */ jsxs(Group, { wrap: "nowrap", children: [
    /* @__PURE__ */ jsx(
      Select,
      {
        label: "Country code",
        size: "sm",
        classNames: { ...props.classNames },
        defaultValue: defaultCountryCode,
        value: valueNumberCountryCode,
        onChange: (c) => {
          if (c === null) {
            setSelectedCountryCode(void 0);
          } else {
            setSelectedCountryCode(c);
          }
        },
        data: COUNTRY_CODES.map((code) => {
          const countryCallingCode = getCountryCallingCode(code);
          const countryName = getCountryData(code).name;
          return {
            value: code,
            label: `${countryName} ${getEmojiFlag(code)} +${countryCallingCode}`
          };
        }),
        rightSection: props.disabled ? /* @__PURE__ */ jsx(Fragment, {}) : void 0,
        disabled: props.disabled,
        searchable: true
      }
    ),
    /* @__PURE__ */ jsx(
      TextInput,
      {
        ...props,
        defaultValue: valueNumberData?.nationalNumber,
        onChange: (e) => {
          if (props.onChange && selectedCountryCodeCallingNumber) {
            const numberUpdate = `+${selectedCountryCodeCallingNumber}${e.currentTarget.value.replace(selectedCountryCodeCallingNumber, "")}`;
            const numberUpdateData = parsePhoneNumber(numberUpdate, selectedCountryCode);
            if (numberUpdateData?.isValid()) {
              props.onChange(numberUpdateData.number);
            }
          }
        }
      }
    )
  ] });
}
var PhoneInput_default = PhoneInput;
export {
  PhoneInput_default as default
};
//# sourceMappingURL=index.mjs.map