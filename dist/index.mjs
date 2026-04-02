"use client";

// src/components/ClientOnly/index.tsx
import { useEffect, useState } from "react";
import { LoadingOverlay } from "@mantine/core";
import { jsx } from "react/jsx-runtime";
function ClientOnly({
  children,
  withLoader = false,
  ...delegated
}) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    if (withLoader) {
      return /* @__PURE__ */ jsx(LoadingOverlay, {});
    }
    return null;
  }
  return /* @__PURE__ */ jsx("div", { ...delegated, children });
}

// src/components/ConfirmBar/index.tsx
import { Box, Button, Group } from "@mantine/core";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx2(Box, { ...props, children: /* @__PURE__ */ jsxs(Group, { h: "100%", justify: "flex-end", align: "center", children: [
    withCancel ? /* @__PURE__ */ jsx2(Button, { onClick: () => onCancel(), variant: "subtle", children: labelProps?.cancel ?? "Cancel" }) : null,
    /* @__PURE__ */ jsx2(
      Button,
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
import { Fragment } from "react";
import { Skeleton, Space, Stack } from "@mantine/core";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs2(Stack, { gap: "sm", px: "5rem", py: "md", ...props, children: [
    withCircle ? /* @__PURE__ */ jsx3(Skeleton, { height: 70, circle: true, mb: "xl" }) : null,
    Array.from({ length: numberOfBarGroups }).map((_, index) => /* @__PURE__ */ jsxs2(Fragment, { children: [
      Array.from({ length: Math.ceil(numberOfBars / numberOfBarGroups) }).map((_2, index2) => /* @__PURE__ */ jsxs2(Fragment, { children: [
        /* @__PURE__ */ jsx3(Skeleton, { height: barHeight, radius: "xl" }),
        /* @__PURE__ */ jsx3(Skeleton, { height: barHeight, mt: barSpacing, radius: "xl" }),
        /* @__PURE__ */ jsx3(Skeleton, { height: barHeight, mt: barSpacing, width: "70%", radius: "xl" })
      ] }, index2)),
      /* @__PURE__ */ jsx3(Space, { h: barGroupSpacing })
    ] }, index))
  ] });
}
var ContentLoader_default = ContentLoader;

// src/components/ImageInput/index.tsx
import { useEffect as useEffect2, useState as useState2 } from "react";
import { ActionIcon, Avatar, FileInput, Group as Group2, Image as Image2, Paper } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var DEFAULT_MAX_FILE_SIZE_BYTES = 5e5;
var isClient = () => typeof window !== "undefined";
function ImageInput({
  value,
  withPreview = true,
  maxFileSizeBytes = DEFAULT_MAX_FILE_SIZE_BYTES,
  ...props
}) {
  const [imageUrl, setImageUrl] = useState2(null);
  const largeFile = isClient() && value && value instanceof File && value.size >= maxFileSizeBytes;
  const isFileValue = isClient() && value instanceof File;
  const isString = typeof value == "string";
  useEffect2(() => {
    if (isFileValue) {
      setImageUrl(URL.createObjectURL(value));
    } else if (isString) {
      setImageUrl(value);
    }
  }, [value, isFileValue, isString]);
  if (props.disabled && !isFileValue) {
    return /* @__PURE__ */ jsx4(
      Avatar,
      {
        size: "xl",
        src: imageUrl,
        ...props.disabledPlaceholderProps
      }
    );
  }
  return /* @__PURE__ */ jsxs3(Group2, { children: [
    withPreview && /* @__PURE__ */ jsx4(Paper, { radius: "md", p: "sm", withBorder: true, children: /* @__PURE__ */ jsx4(
      Image2,
      {
        w: "5rem",
        h: "5rem",
        fit: "contain",
        radius: "sm",
        src: imageUrl,
        ...props.previewProps
      }
    ) }),
    /* @__PURE__ */ jsx4(
      FileInput,
      {
        styles: { input: { fontSize: "var(--mantine-font-size-xs)" } },
        leftSection: /* @__PURE__ */ jsx4(ActionIcon, { variant: "light", size: "xs", color: "gray", children: /* @__PURE__ */ jsx4(IconUpload, {}) }),
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
import { useEffect as useEffect3, useState as useState3 } from "react";
import { Avatar as Avatar2, ThemeIcon } from "@mantine/core";

// src/utils/colors.ts
import chroma from "chroma-js";
import { darken, lighten } from "@mantine/core";
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
    colors.push(chroma(red, green, blue).hex());
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
      edgeColors.push(chroma(red, green, blue).hex());
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
      background ? allPixels.filter((hex) => chroma.distance(hex, background, "rgb") > 28) : allPixels
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
import { IconBuildingSkyscraper as IconFallback } from "@tabler/icons-react";
import { jsx as jsx5 } from "react/jsx-runtime";
function Logo({ withColorPair = true, ...props }) {
  const [logoColorPair, setLogoColorPair] = useState3({
    dominant: "#000000",
    background: "#ffffff"
  });
  useEffect3(() => {
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
  return /* @__PURE__ */ jsx5(
    Avatar2,
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
      children: /* @__PURE__ */ jsx5(ThemeIcon, { variant: "transparent", size: "5rem", children: /* @__PURE__ */ jsx5(IconFallback, { size: 48 * 1.5, stroke: 1 }) })
    }
  );
}
var Logo_default = Logo;

// src/components/NativePDFViewer/index.tsx
import { useState as useState4 } from "react";
import { Box as Box2, Center, Loader } from "@mantine/core";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
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
  const [loading, setLoading] = useState4(false);
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
  return /* @__PURE__ */ jsxs4(
    Box2,
    {
      w: "100%",
      h: toolbarHeight ? `calc(100% + ${toolbarHeight}px)` : "100%",
      style: {
        transform: toolbarHeight ? `translateY(-${toolbarHeight}px)` : void 0
      },
      children: [
        loading ? /* @__PURE__ */ jsx6(Center, { h: "100%", w: "100%", children: /* @__PURE__ */ jsx6(Loader, { size: "xl" }) }) : null,
        /* @__PURE__ */ jsx6(
          "object",
          {
            data: `${mediaUrl}${optionsString}`,
            type: "application/pdf",
            width: "100%",
            height: "100%",
            onLoad: () => setLoading(false),
            onError: () => setLoading(false),
            children: /* @__PURE__ */ jsx6(Box2, { children: renderFallback() })
          }
        )
      ]
    }
  );
}

// src/components/NoData/index.tsx
import { Alert, Center as Center2 } from "@mantine/core";
import { jsx as jsx7 } from "react/jsx-runtime";
function NoData({ title, children, alertProps, ...props }) {
  return /* @__PURE__ */ jsx7(Center2, { h: "100%", ...props, children: /* @__PURE__ */ jsx7(Alert, { p: "3rem", title: title ?? "No data", ...alertProps, children: /* @__PURE__ */ jsx7(Center2, { children }) }) });
}
var NoData_default = NoData;

// src/components/PageContainer/index.tsx
import { Box as Box3, Container, Group as Group3, ScrollArea, Stack as Stack2, Title } from "@mantine/core";
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
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
      return /* @__PURE__ */ jsx8(Title, { order: 2, ...titleProps, children: title });
    }
    return null;
  }
  function getHeader() {
    if (header) {
      return header;
    }
    return /* @__PURE__ */ jsxs5(Group3, { justify: "space-between", w: "100%", ...headerProps, children: [
      getTitle(),
      rightSection
    ] });
  }
  function getContent() {
    if (fullPage) {
      return /* @__PURE__ */ jsx8(Box3, { ...contentProps, children });
    }
    return /* @__PURE__ */ jsxs5(Stack2, { gap: "xl", ...outerContentProps, children: [
      getHeader(),
      /* @__PURE__ */ jsx8(Stack2, { px: "xl", py: "lg", h: "100%", w: "100%", ...contentProps, children })
    ] });
  }
  if (withContentScroll) {
    return /* @__PURE__ */ jsx8(ScrollArea, { h: "100vh", p: 0, ...props, children: /* @__PURE__ */ jsx8(Container, { fluid: true, children: getContent() }) });
  }
  return /* @__PURE__ */ jsx8(Container, { p: 0, w: "100%", fluid: true, children: getContent() });
}
var PageContainer_default = PageContainer;

// src/components/PhoneInput/index.tsx
import { useEffect as useEffect4, useState as useState5 } from "react";
import { getCountryData, getEmojiFlag } from "countries-list";
import parsePhoneNumber, {
  getCountries,
  getCountryCallingCode
} from "libphonenumber-js";
import { Group as Group4, Select, TextInput } from "@mantine/core";
import { Fragment as Fragment2, jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
var COUNTRY_CODES = getCountries();
function PhoneInput({ value, defaultValue, defaultCountryCode, ...props }) {
  const valueNumber = value ?? "";
  const valueNumberData = parsePhoneNumber(valueNumber);
  let valueNumberCountryCode;
  if (valueNumberData?.isValid()) {
    valueNumberCountryCode = valueNumberData.country;
  }
  const [selectedCountryCode, setSelectedCountryCode] = useState5(
    defaultCountryCode
  );
  const selectedCountryCodeCallingNumber = selectedCountryCode ? getCountryCallingCode(selectedCountryCode) : void 0;
  useEffect4(() => {
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
  return /* @__PURE__ */ jsxs6(Group4, { wrap: "nowrap", children: [
    /* @__PURE__ */ jsx9(
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
        rightSection: props.disabled ? /* @__PURE__ */ jsx9(Fragment2, {}) : void 0,
        disabled: props.disabled,
        searchable: true
      }
    ),
    /* @__PURE__ */ jsx9(
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

// src/components/TextEditor/index.tsx
import { useEffect as useEffect5 } from "react";
import Highlight from "@tiptap/extension-highlight";
import SubScript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Link, RichTextEditor } from "@mantine/tiptap";
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
function TextEditor({
  content,
  value,
  onChangeEditorHTML = () => {
  },
  onChange = () => {
  },
  ...props
}) {
  const editor = useEditor({
    editable: true,
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] })
    ],
    content
  });
  useEffect5(() => {
    onChangeEditorHTML(editor?.getHTML());
    onChange(editor?.getHTML());
  }, [editor?.state, editor, onChangeEditorHTML, onChange]);
  return /* @__PURE__ */ jsxs7(RichTextEditor, { editor, ...props, children: [
    /* @__PURE__ */ jsxs7(RichTextEditor.Toolbar, { sticky: true, stickyOffset: 60, children: [
      /* @__PURE__ */ jsxs7(RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ jsx10(RichTextEditor.Bold, {}),
        /* @__PURE__ */ jsx10(RichTextEditor.Italic, {}),
        /* @__PURE__ */ jsx10(RichTextEditor.Underline, {}),
        /* @__PURE__ */ jsx10(RichTextEditor.Strikethrough, {}),
        /* @__PURE__ */ jsx10(RichTextEditor.ClearFormatting, {}),
        /* @__PURE__ */ jsx10(RichTextEditor.Highlight, {}),
        /* @__PURE__ */ jsx10(RichTextEditor.Code, {})
      ] }),
      /* @__PURE__ */ jsxs7(RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ jsx10(RichTextEditor.H1, {}),
        /* @__PURE__ */ jsx10(RichTextEditor.H2, {}),
        /* @__PURE__ */ jsx10(RichTextEditor.H3, {}),
        /* @__PURE__ */ jsx10(RichTextEditor.H4, {})
      ] }),
      /* @__PURE__ */ jsxs7(RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ jsx10(RichTextEditor.Blockquote, {}),
        /* @__PURE__ */ jsx10(RichTextEditor.Hr, {}),
        /* @__PURE__ */ jsx10(RichTextEditor.BulletList, {}),
        /* @__PURE__ */ jsx10(RichTextEditor.OrderedList, {}),
        /* @__PURE__ */ jsx10(RichTextEditor.Subscript, {}),
        /* @__PURE__ */ jsx10(RichTextEditor.Superscript, {})
      ] }),
      /* @__PURE__ */ jsxs7(RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ jsx10(RichTextEditor.Link, {}),
        /* @__PURE__ */ jsx10(RichTextEditor.Unlink, {})
      ] }),
      /* @__PURE__ */ jsxs7(RichTextEditor.ControlsGroup, { children: [
        /* @__PURE__ */ jsx10(RichTextEditor.AlignLeft, {}),
        /* @__PURE__ */ jsx10(RichTextEditor.AlignCenter, {}),
        /* @__PURE__ */ jsx10(RichTextEditor.AlignJustify, {}),
        /* @__PURE__ */ jsx10(RichTextEditor.AlignRight, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx10(RichTextEditor.Content, {})
  ] });
}
var TextEditor_default = TextEditor;

// src/components/ThemeToggle/index.tsx
import {
  Switch,
  ThemeIcon as ThemeIcon2,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme
} from "@mantine/core";
import { IconMoon as IconSwitchDark, IconSun as IconSwitchLight } from "@tabler/icons-react";
import { jsx as jsx11 } from "react/jsx-runtime";
function ThemeToggle({ ...props }) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });
  return /* @__PURE__ */ jsx11(
    Tooltip,
    {
      label: computedColorScheme === "light" ? "Switch to dark mode" : "Switch to light mode",
      position: "bottom",
      withinPortal: true,
      children: /* @__PURE__ */ jsx11(ClientOnly, { children: /* @__PURE__ */ jsx11(
        Switch,
        {
          styles: { track: { cursor: "pointer" } },
          defaultChecked: computedColorScheme === "dark",
          onChange: () => setColorScheme(computedColorScheme === "light" ? "dark" : "light"),
          onLabel: /* @__PURE__ */ jsx11(ThemeIcon2, { size: props.size ?? "sm", variant: "transparent", children: /* @__PURE__ */ jsx11(IconSwitchDark, {}) }),
          offLabel: /* @__PURE__ */ jsx11(ThemeIcon2, { size: props.size ?? "sm", color: "yellow", variant: "transparent", children: /* @__PURE__ */ jsx11(IconSwitchLight, {}) }),
          color: "dark",
          size: "md",
          ...props
        }
      ) })
    }
  );
}
var ThemeToggle_default = ThemeToggle;
export {
  ClientOnly,
  ConfirmBar_default as ConfirmBar,
  ContentLoader_default as ContentLoader,
  ImageInput_default as ImageInput,
  Logo_default as Logo,
  NativePDFViewer,
  NoData_default as NoData,
  PageContainer_default as PageContainer,
  PhoneInput_default as PhoneInput,
  TextEditor_default as TextEditor,
  ThemeToggle_default as ThemeToggle
};
//# sourceMappingURL=index.mjs.map