import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Box, Center, Loader } from "@mantine/core";
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
  const [loading, setLoading] = useState(false);
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
  return /* @__PURE__ */ jsxs(
    Box,
    {
      w: "100%",
      h: toolbarHeight ? `calc(100% + ${toolbarHeight}px)` : "100%",
      style: {
        transform: toolbarHeight ? `translateY(-${toolbarHeight}px)` : void 0
      },
      children: [
        loading ? /* @__PURE__ */ jsx(Center, { h: "100%", w: "100%", children: /* @__PURE__ */ jsx(Loader, { size: "xl" }) }) : null,
        /* @__PURE__ */ jsx(
          "object",
          {
            data: `${mediaUrl}${optionsString}`,
            type: "application/pdf",
            width: "100%",
            height: "100%",
            onLoad: () => setLoading(false),
            onError: () => setLoading(false),
            children: /* @__PURE__ */ jsx(Box, { children: renderFallback() })
          }
        )
      ]
    }
  );
}
export {
  NativePDFViewer as default
};
//# sourceMappingURL=index.mjs.map