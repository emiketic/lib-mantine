"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ImageInput_exports = {};
__export(ImageInput_exports, {
  default: () => ImageInput_default
});
module.exports = __toCommonJS(ImageInput_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_core = require("@mantine/core");
var import_icons_react = require("@tabler/icons-react");
const DEFAULT_MAX_FILE_SIZE_BYTES = 5e5;
const isClient = () => typeof window !== "undefined";
function ImageInput({
  value,
  withPreview = true,
  maxFileSizeBytes = DEFAULT_MAX_FILE_SIZE_BYTES,
  ...props
}) {
  const [imageUrl, setImageUrl] = (0, import_react.useState)(null);
  const largeFile = isClient() && value && value instanceof File && value.size >= maxFileSizeBytes;
  const isFileValue = isClient() && value instanceof File;
  const isString = typeof value == "string";
  (0, import_react.useEffect)(() => {
    if (isFileValue) {
      setImageUrl(URL.createObjectURL(value));
    } else if (isString) {
      setImageUrl(value);
    }
  }, [value, isFileValue, isString]);
  if (props.disabled && !isFileValue) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_core.Avatar,
      {
        size: "xl",
        src: imageUrl,
        ...props.disabledPlaceholderProps
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Group, { children: [
    withPreview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Paper, { radius: "md", p: "sm", withBorder: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_core.Image,
      {
        w: "5rem",
        h: "5rem",
        fit: "contain",
        radius: "sm",
        src: imageUrl,
        ...props.previewProps
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_core.FileInput,
      {
        styles: { input: { fontSize: "var(--mantine-font-size-xs)" } },
        leftSection: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.ActionIcon, { variant: "light", size: "xs", color: "gray", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_icons_react.IconUpload, {}) }),
        placeholder: "Upload",
        error: largeFile ? `File size must be under ${maxFileSizeBytes / 1e3} KB` : void 0,
        onChange: (file) => {
          props.onChange?.(file);
          if (file) {
            setImageUrl(URL.createObjectURL(file));
          }
        },
        ...props
      }
    )
  ] });
}
var ImageInput_default = ImageInput;
//# sourceMappingURL=index.js.map