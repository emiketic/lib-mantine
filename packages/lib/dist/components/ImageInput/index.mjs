import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ActionIcon, Avatar, FileInput, Group, Image, Paper } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
const DEFAULT_MAX_FILE_SIZE_BYTES = 5e5;
const isClient = () => typeof window !== "undefined";
function ImageInput({
  value,
  withPreview = true,
  maxFileSizeBytes = DEFAULT_MAX_FILE_SIZE_BYTES,
  ...props
}) {
  const [imageUrl, setImageUrl] = useState(null);
  const largeFile = isClient() && value && value instanceof File && value.size >= maxFileSizeBytes;
  const isFileValue = isClient() && value instanceof File;
  const isString = typeof value == "string";
  useEffect(() => {
    if (isFileValue) {
      setImageUrl(URL.createObjectURL(value));
    } else if (isString) {
      setImageUrl(value);
    }
  }, [value, isFileValue, isString]);
  if (props.disabled && !isFileValue) {
    return /* @__PURE__ */ jsx(
      Avatar,
      {
        size: "xl",
        src: imageUrl,
        ...props.disabledPlaceholderProps
      }
    );
  }
  return /* @__PURE__ */ jsxs(Group, { children: [
    withPreview && /* @__PURE__ */ jsx(Paper, { radius: "md", p: "sm", withBorder: true, children: /* @__PURE__ */ jsx(
      Image,
      {
        w: "5rem",
        h: "5rem",
        fit: "contain",
        radius: "sm",
        src: imageUrl,
        ...props.previewProps
      }
    ) }),
    /* @__PURE__ */ jsx(
      FileInput,
      {
        styles: { input: { fontSize: "var(--mantine-font-size-xs)" } },
        leftSection: /* @__PURE__ */ jsx(ActionIcon, { variant: "light", size: "xs", color: "gray", children: /* @__PURE__ */ jsx(IconUpload, {}) }),
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
export {
  ImageInput_default as default
};
//# sourceMappingURL=index.mjs.map