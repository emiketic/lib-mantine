"use client";
"use strict";
"use client";
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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ClientOnly: () => ClientOnly,
  ConfirmBar: () => ConfirmBar_default,
  ContentLoader: () => ContentLoader_default,
  ImageInput: () => ImageInput_default,
  Logo: () => Logo_default,
  NativePDFViewer: () => NativePDFViewer,
  NoData: () => NoData_default,
  PageContainer: () => PageContainer_default,
  PhoneInput: () => PhoneInput_default,
  TextEditor: () => TextEditor_default,
  ThemeToggle: () => ThemeToggle_default,
  useError: () => use_error_default
});
module.exports = __toCommonJS(index_exports);

// src/components/ClientOnly/index.tsx
var import_react = require("react");
var import_core = require("@mantine/core");
var import_jsx_runtime = require("react/jsx-runtime");
function ClientOnly({
  children,
  withLoader = false,
  ...delegated
}) {
  const [hasMounted, setHasMounted] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    if (withLoader) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.LoadingOverlay, {});
    }
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ...delegated, children });
}

// src/components/ConfirmBar/index.tsx
var import_core2 = require("@mantine/core");
var import_jsx_runtime2 = require("react/jsx-runtime");
function ConfirmBar({
  onConfirm = () => {
  },
  onCancel = () => {
  },
  disabled = false,
  loading = false,
  labelProps,
  color,
  withCancel = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_core2.Box, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_core2.Group, { h: "100%", justify: "flex-end", align: "center", children: [
    withCancel ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_core2.Button, { onClick: () => onCancel(), variant: "subtle", children: labelProps?.cancel ?? "Cancel" }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_core2.Button,
      {
        onClick: () => onConfirm(),
        disabled,
        variant: "filled",
        loading,
        color,
        children: labelProps?.confirm ?? "Confirm"
      }
    )
  ] }) });
}
var ConfirmBar_default = ConfirmBar;

// src/components/ContentLoader/index.tsx
var import_react2 = require("react");
var import_core3 = require("@mantine/core");
var import_jsx_runtime3 = require("react/jsx-runtime");
function ContentLoader({
  numberOfBars = 3,
  numberOfBarGroups = 3,
  barHeight = 15,
  barSpacing = 6,
  barGroupSpacing = "lg",
  visible = true,
  withCircle = false,
  ...props
}) {
  if (!visible) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_core3.Stack, { gap: "sm", px: "5rem", py: "md", ...props, children: [
    withCircle ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_core3.Skeleton, { height: 70, circle: true, mb: "xl" }) : null,
    Array.from({ length: numberOfBarGroups }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react2.Fragment, { children: [
      Array.from({ length: Math.ceil(numberOfBars / numberOfBarGroups) }).map((_2, index2) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_core3.Skeleton, { height: barHeight, radius: "xl" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_core3.Skeleton, { height: barHeight, mt: barSpacing, radius: "xl" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_core3.Skeleton, { height: barHeight, mt: barSpacing, width: "70%", radius: "xl" })
      ] }, index2)),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_core3.Space, { h: barGroupSpacing })
    ] }, index))
  ] });
}
var ContentLoader_default = ContentLoader;

// src/components/ImageInput/index.tsx
var import_react3 = require("react");
var import_core4 = require("@mantine/core");
var import_icons_react = require("@tabler/icons-react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var DEFAULT_MAX_FILE_SIZE_BYTES = 5e5;
var isClient = () => typeof window !== "undefined";
function ImageInput({
  value,
  withPreview = true,
  maxFileSizeBytes = DEFAULT_MAX_FILE_SIZE_BYTES,
  ...props
}) {
  const [imageUrl, setImageUrl] = (0, import_react3.useState)(null);
  const largeFile = isClient() && value && value instanceof File && value.size >= maxFileSizeBytes;
  const isFileValue = isClient() && value instanceof File;
  const isString = typeof value == "string";
  (0, import_react3.useEffect)(() => {
    if (isFileValue) {
      setImageUrl(URL.createObjectURL(value));
    } else if (isString) {
      setImageUrl(value);
    }
  }, [value, isFileValue, isString]);
  if (props.disabled && !isFileValue) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_core4.Avatar,
      {
        size: "xl",
        src: imageUrl,
        ...props.disabledPlaceholderProps
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_core4.Group, { children: [
    withPreview && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_core4.Paper, { radius: "md", p: "sm", withBorder: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_core4.Image,
      {
        w: "5rem",
        h: "5rem",
        fit: "contain",
        radius: "sm",
        src: imageUrl,
        ...props.previewProps
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_core4.FileInput,
      {
        styles: { input: { fontSize: "var(--mantine-font-size-xs)" } },
        leftSection: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_core4.ActionIcon, { variant: "light", size: "xs", color: "gray", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_icons_react.IconUpload, {}) }),
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

// src/components/Logo/index.tsx
var import_react4 = require("react");
var import_core6 = require("@mantine/core");

// src/utils/colors.ts
var import_chroma_js = __toESM(require("chroma-js"));
var import_core5 = require("@mantine/core");
function loadImage(imageUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.referrerPolicy = "no-referrer";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Could not load image for color extraction"));
    image.src = imageUrl;
  });
}
function quantizeChannel(value) {
  return Math.round(value / 16) * 16;
}
function extractQuantizedPixels(imageData) {
  const colors = [];
  for (let index = 0; index < imageData.length; index += 4) {
    const alpha = imageData[index + 3] ?? 0;
    if (alpha < 16) continue;
    const red = quantizeChannel(imageData[index] ?? 0);
    const green = quantizeChannel(imageData[index + 1] ?? 0);
    const blue = quantizeChannel(imageData[index + 2] ?? 0);
    colors.push((0, import_chroma_js.default)(red, green, blue).hex());
  }
  return colors;
}
function extractEdgeQuantizedPixels(imageData, width, height) {
  const edgeColors = [];
  const edgeThickness = Math.max(1, Math.floor(Math.min(width, height) * 0.1));
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const isEdge = x < edgeThickness || x >= width - edgeThickness || y < edgeThickness || y >= height - edgeThickness;
      if (!isEdge) continue;
      const pixelIndex = (y * width + x) * 4;
      const alpha = imageData[pixelIndex + 3] ?? 0;
      if (alpha < 16) continue;
      const red = quantizeChannel(imageData[pixelIndex] ?? 0);
      const green = quantizeChannel(imageData[pixelIndex + 1] ?? 0);
      const blue = quantizeChannel(imageData[pixelIndex + 2] ?? 0);
      edgeColors.push((0, import_chroma_js.default)(red, green, blue).hex());
    }
  }
  return edgeColors;
}
function getMostFrequentColor(colors) {
  if (colors.length === 0) return null;
  const frequencies = /* @__PURE__ */ new Map();
  for (const color of colors) {
    frequencies.set(color, (frequencies.get(color) ?? 0) + 1);
  }
  let selectedColor = null;
  let selectedCount = 0;
  for (const [color, count] of frequencies.entries()) {
    if (count > selectedCount) {
      selectedColor = color;
      selectedCount = count;
    }
  }
  return selectedColor;
}
var getDominantColorFromImageUrl = async (imageUrl, fallbackDominantColor = "#000000", fallbackBackgroundColor = "#ffffff") => {
  try {
    const image = await loadImage(imageUrl);
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) {
      return { dominant: fallbackDominantColor, background: fallbackBackgroundColor };
    }
    const maxSize = 96;
    const ratio = Math.min(maxSize / image.naturalWidth, maxSize / image.naturalHeight, 1);
    canvas.width = Math.max(1, Math.round(image.naturalWidth * ratio));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * ratio));
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const allPixels = extractQuantizedPixels(imageData);
    const edgePixels = extractEdgeQuantizedPixels(imageData, canvas.width, canvas.height);
    const background = getMostFrequentColor(edgePixels) ?? getMostFrequentColor(allPixels);
    const dominant = getMostFrequentColor(
      background ? allPixels.filter((hex) => import_chroma_js.default.distance(hex, background, "rgb") > 28) : allPixels
    ) ?? getMostFrequentColor(allPixels);
    return {
      dominant: dominant ?? fallbackDominantColor,
      background: background ?? fallbackBackgroundColor
    };
  } catch {
    return { dominant: fallbackDominantColor, background: fallbackBackgroundColor };
  }
};

// src/components/Logo/index.tsx
var import_icons_react2 = require("@tabler/icons-react");
var import_jsx_runtime5 = require("react/jsx-runtime");
function Logo({ withColorPair = true, ...props }) {
  const [logoColorPair, setLogoColorPair] = (0, import_react4.useState)({
    dominant: "#000000",
    background: "#ffffff"
  });
  (0, import_react4.useEffect)(() => {
    let isMounted = true;
    if (props.src && withColorPair) {
      getDominantColorFromImageUrl(props.src).then(({ dominant, background }) => {
        if (isMounted) {
          setLogoColorPair({ dominant, background });
        }
      });
    } else if (isMounted) {
      setLogoColorPair({ dominant: "#000000", background: "#ffffff" });
    }
    return () => {
      isMounted = false;
    };
  }, [props.src, withColorPair]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_core6.Avatar,
    {
      size: "5rem",
      radius: "lg",
      p: "0.125rem",
      bg: withColorPair ? logoColorPair.background : void 0,
      styles: {
        image: {
          objectFit: "contain",
          objectPosition: "center"
        }
      },
      imageProps: { referrerPolicy: "no-referrer" },
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_core6.ThemeIcon, { variant: "transparent", size: "5rem", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_icons_react2.IconBuildingSkyscraper, { size: 48 * 1.5, stroke: 1 }) })
    }
  );
}
var Logo_default = Logo;

// src/components/NativePDFViewer/index.tsx
var import_react5 = require("react");
var import_core7 = require("@mantine/core");
var import_jsx_runtime6 = require("react/jsx-runtime");
function getBrowser() {
  const { userAgent } = navigator;
  const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
  const isEdge = /Edg\//.test(userAgent);
  const isFirefox = /Firefox\//.test(userAgent);
  const isChromium = /Chrome\/|CriOS\//.test(userAgent) && !isEdge;
  if (isSafari) return "Safari";
  if (isEdge) return "Edge";
  if (isFirefox) return "Firefox";
  if (isChromium) return "Chromium";
  return "Unknown";
}
function NativePDFViewer({
  mediaUrl,
  title,
  zoomLevel,
  withToolbar = true,
  fallback = "Cannot display PDF on this browser. Use a different browser or download the PDF."
}) {
  const [loading, setLoading] = (0, import_react5.useState)(false);
  const toolbarHeight = {
    Safari: 0,
    Edge: 40,
    Firefox: 32,
    Chromium: 58,
    Unknown: 58
  }[getBrowser()];
  let optionsString = "";
  if (zoomLevel) {
    optionsString += `#zoom=${zoomLevel}%`;
  }
  if (!withToolbar) {
    optionsString = "#toolbar=0";
  }
  const renderFallback = () => typeof fallback === "function" ? fallback() : fallback;
  if (!mediaUrl) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    import_core7.Box,
    {
      w: "100%",
      h: toolbarHeight ? `calc(100% + ${toolbarHeight}px)` : "100%",
      style: {
        transform: toolbarHeight ? `translateY(-${toolbarHeight}px)` : void 0
      },
      children: [
        loading ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_core7.Center, { h: "100%", w: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_core7.Loader, { size: "xl" }) }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "object",
          {
            data: `${mediaUrl}${optionsString}`,
            type: "application/pdf",
            width: "100%",
            height: "100%",
            onLoad: () => setLoading(false),
            onError: () => setLoading(false),
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_core7.Box, { children: renderFallback() })
          }
        )
      ]
    }
  );
}

// src/components/NoData/index.tsx
var import_core8 = require("@mantine/core");
var import_jsx_runtime7 = require("react/jsx-runtime");
function NoData({ title, children, alertProps, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_core8.Center, { h: "100%", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_core8.Alert, { p: "3rem", title: title ?? "No data", ...alertProps, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_core8.Center, { children }) }) });
}
var NoData_default = NoData;

// src/components/PageContainer/index.tsx
var import_core9 = require("@mantine/core");
var import_jsx_runtime8 = require("react/jsx-runtime");
function PageContainer({
  children,
  title,
  titleProps,
  header,
  headerProps,
  rightSection = null,
  contentProps,
  outerContentProps,
  fullPage = false,
  withContentScroll = false,
  ...props
}) {
  function getTitle() {
    if (title) {
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_core9.Title, { order: 2, ...titleProps, children: title });
    }
    return null;
  }
  function getHeader() {
    if (header) {
      return header;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_core9.Group, { justify: "space-between", w: "100%", ...headerProps, children: [
      getTitle(),
      rightSection
    ] });
  }
  function getContent() {
    if (fullPage) {
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_core9.Box, { ...contentProps, children });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_core9.Stack, { gap: "xl", ...outerContentProps, children: [
      getHeader(),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_core9.Stack, { px: "xl", py: "lg", h: "100%", w: "100%", ...contentProps, children })
    ] });
  }
  if (withContentScroll) {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_core9.ScrollArea, { h: "100vh", p: 0, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_core9.Container, { fluid: true, children: getContent() }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_core9.Container, { p: 0, w: "100%", fluid: true, children: getContent() });
}
var PageContainer_default = PageContainer;

// src/components/PhoneInput/index.tsx
var import_react6 = require("react");
var import_countries_list = require("countries-list");
var import_libphonenumber_js = __toESM(require("libphonenumber-js"));
var import_core10 = require("@mantine/core");
var import_jsx_runtime9 = require("react/jsx-runtime");
var COUNTRY_CODES = (0, import_libphonenumber_js.getCountries)();
function PhoneInput({ value, defaultValue, defaultCountryCode, ...props }) {
  const valueNumber = value ?? "";
  const valueNumberData = (0, import_libphonenumber_js.default)(valueNumber);
  let valueNumberCountryCode;
  if (valueNumberData?.isValid()) {
    valueNumberCountryCode = valueNumberData.country;
  }
  const [selectedCountryCode, setSelectedCountryCode] = (0, import_react6.useState)(
    defaultCountryCode
  );
  const selectedCountryCodeCallingNumber = selectedCountryCode ? (0, import_libphonenumber_js.getCountryCallingCode)(selectedCountryCode) : void 0;
  (0, import_react6.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_core10.Group, { wrap: "nowrap", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      import_core10.Select,
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
        rightSection: props.disabled ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, {}) : void 0,
        disabled: props.disabled,
        searchable: true
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      import_core10.TextInput,
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

// src/components/TextEditor/index.tsx
var import_react7 = require("react");
var import_extension_highlight = __toESM(require("@tiptap/extension-highlight"));
var import_extension_subscript = __toESM(require("@tiptap/extension-subscript"));
var import_extension_superscript = __toESM(require("@tiptap/extension-superscript"));
var import_extension_text_align = __toESM(require("@tiptap/extension-text-align"));
var import_extension_underline = __toESM(require("@tiptap/extension-underline"));
var import_react8 = require("@tiptap/react");
var import_starter_kit = __toESM(require("@tiptap/starter-kit"));
var import_tiptap = require("@mantine/tiptap");
var import_jsx_runtime10 = require("react/jsx-runtime");
function TextEditor({
  content,
  value,
  onChangeEditorHTML = () => {
  },
  onChange = () => {
  },
  ...props
}) {
  const editor = (0, import_react8.useEditor)({
    editable: true,
    extensions: [
      import_starter_kit.default,
      import_extension_underline.default,
      import_tiptap.Link,
      import_extension_superscript.default,
      import_extension_subscript.default,
      import_extension_highlight.default,
      import_extension_text_align.default.configure({ types: ["heading", "paragraph"] })
    ],
    content
  });
  (0, import_react7.useEffect)(() => {
    onChangeEditorHTML(editor?.getHTML());
    onChange(editor?.getHTML());
  }, [editor?.state, editor, onChangeEditorHTML, onChange]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_tiptap.RichTextEditor, { editor, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_tiptap.RichTextEditor.Toolbar, { sticky: true, stickyOffset: 60, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_tiptap.RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.Bold, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.Italic, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.Underline, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.Strikethrough, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.ClearFormatting, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.Highlight, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.Code, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_tiptap.RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.H1, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.H2, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.H3, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.H4, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_tiptap.RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.Blockquote, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.Hr, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.BulletList, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.OrderedList, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.Subscript, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.Superscript, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_tiptap.RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.Link, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.Unlink, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_tiptap.RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.AlignLeft, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.AlignCenter, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.AlignJustify, {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.AlignRight, {})
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_tiptap.RichTextEditor.Content, {})
  ] });
}
var TextEditor_default = TextEditor;

// src/components/ThemeToggle/index.tsx
var import_core11 = require("@mantine/core");
var import_icons_react3 = require("@tabler/icons-react");
var import_jsx_runtime11 = require("react/jsx-runtime");
function ThemeToggleInner({ ...props }) {
  const { setColorScheme } = (0, import_core11.useMantineColorScheme)();
  const computedColorScheme = (0, import_core11.useComputedColorScheme)("light", { getInitialValueInEffect: true });
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    import_core11.Tooltip,
    {
      label: computedColorScheme === "light" ? "Switch to dark mode" : "Switch to light mode",
      position: "bottom",
      withinPortal: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        import_core11.Switch,
        {
          styles: { track: { cursor: "pointer" } },
          defaultChecked: computedColorScheme === "dark",
          onChange: () => setColorScheme(computedColorScheme === "light" ? "dark" : "light"),
          onLabel: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_core11.ThemeIcon, { size: props.size ?? "sm", variant: "transparent", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_icons_react3.IconMoon, {}) }),
          offLabel: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_core11.ThemeIcon, { size: props.size ?? "sm", color: "yellow", variant: "transparent", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_icons_react3.IconSun, {}) }),
          color: "dark",
          size: "md",
          ...props
        }
      )
    }
  );
}
function ThemeToggle(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ClientOnly, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ThemeToggleInner, { ...props }) });
}
var ThemeToggle_default = ThemeToggle;

// src/utils/use-error/index.ts
var import_next_intl = require("next-intl");
var import_notifications = require("@mantine/notifications");
function useError({
  result,
  error
} = {}) {
  const tError = (0, import_next_intl.useTranslations)("Error");
  const formatError = (err) => {
    const genericTitle = tError.has("APP_ERR_GENERIC.title") ? tError("APP_ERR_GENERIC.title") : "Error";
    const genericMessage = tError.has("APP_ERR_GENERIC.message") ? tError("APP_ERR_GENERIC.message") : "An error has occurred";
    const resolvedError = error ?? err;
    let title = result?.title ?? genericTitle;
    let message = result?.message ?? genericMessage;
    const code = resolvedError?.code ?? resolvedError?.message;
    if (tError.has(`${code}`)) {
      title = result?.title ?? tError(`${code}.title`, { defaultValue: title });
      message = result?.message ?? tError(`${code}.message`, { defaultValue: message });
    }
    return { title, message };
  };
  const notifyError = (err, clr) => {
    const { title, message } = formatError(error ?? err);
    const color = clr ?? "red";
    (0, import_notifications.showNotification)({
      title,
      message,
      color
    });
    if (err instanceof Error) {
      console.debug(err);
    } else if (err.code) {
      console.debug(err.code);
    }
  };
  return { formatError, notifyError };
}
var use_error_default = useError;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ClientOnly,
  ConfirmBar,
  ContentLoader,
  ImageInput,
  Logo,
  NativePDFViewer,
  NoData,
  PageContainer,
  PhoneInput,
  TextEditor,
  ThemeToggle,
  useError
});
//# sourceMappingURL=index.js.map