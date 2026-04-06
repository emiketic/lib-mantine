"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var PhoneInput_exports = {};
__export(PhoneInput_exports, {
  default: () => PhoneInput_default
});
module.exports = __toCommonJS(PhoneInput_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_countries_list = require("countries-list");
var import_libphonenumber_js = __toESM(require("libphonenumber-js"));
var import_core = require("@mantine/core");
const COUNTRY_CODES = (0, import_libphonenumber_js.getCountries)();
function PhoneInput({ value, defaultValue, defaultCountryCode, ...props }) {
  const valueNumber = value ?? "";
  const valueNumberData = (0, import_libphonenumber_js.default)(valueNumber);
  let valueNumberCountryCode;
  if (valueNumberData?.isValid()) {
    valueNumberCountryCode = valueNumberData.country;
  }
  const [selectedCountryCode, setSelectedCountryCode] = (0, import_react.useState)(
    defaultCountryCode
  );
  const selectedCountryCodeCallingNumber = selectedCountryCode ? (0, import_libphonenumber_js.getCountryCallingCode)(selectedCountryCode) : void 0;
  (0, import_react.useEffect)(() => {
    if (selectedCountryCode && selectedCountryCode !== valueNumberCountryCode) {
      const code = selectedCountryCode ?? defaultCountryCode ?? "";
      const callingCode = (0, import_libphonenumber_js.getCountryCallingCode)(code);
      if (props.onChange) {
        const numberUpdate = `+${callingCode}${valueNumber.replace(callingCode, "")}`;
        const numberUpdateData = (0, import_libphonenumber_js.default)(numberUpdate, selectedCountryCode);
        if (numberUpdateData?.isValid()) {
          props.onChange(`+${callingCode}${valueNumber.replace(callingCode, "")}`);
        }
      }
    }
  }, [selectedCountryCode]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Group, { wrap: "nowrap", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_core.Select,
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
          const countryCallingCode = (0, import_libphonenumber_js.getCountryCallingCode)(code);
          const countryName = (0, import_countries_list.getCountryData)(code).name;
          return {
            value: code,
            label: `${countryName} ${(0, import_countries_list.getEmojiFlag)(code)} +${countryCallingCode}`
          };
        }),
        rightSection: props.disabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {}) : void 0,
        disabled: props.disabled,
        searchable: true
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_core.TextInput,
      {
        ...props,
        defaultValue: valueNumberData?.nationalNumber,
        onChange: (e) => {
          if (props.onChange && selectedCountryCodeCallingNumber) {
            const numberUpdate = `+${selectedCountryCodeCallingNumber}${e.currentTarget.value.replace(selectedCountryCodeCallingNumber, "")}`;
            const numberUpdateData = (0, import_libphonenumber_js.default)(numberUpdate, selectedCountryCode);
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
//# sourceMappingURL=index.js.map