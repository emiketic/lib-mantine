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
var NativePDFViewer_exports = {};
__export(NativePDFViewer_exports, {
  default: () => NativePDFViewer
});
module.exports = __toCommonJS(NativePDFViewer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_core = require("@mantine/core");
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
  const [loading, setLoading] = (0, import_react.useState)(false);
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_core.Box,
    {
      w: "100%",
      h: toolbarHeight ? `calc(100% + ${toolbarHeight}px)` : "100%",
      style: {
        transform: toolbarHeight ? `translateY(-${toolbarHeight}px)` : void 0
      },
      children: [
        loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Center, { h: "100%", w: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Loader, { size: "xl" }) }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "object",
          {
            data: `${mediaUrl}${optionsString}`,
            type: "application/pdf",
            width: "100%",
            height: "100%",
            onLoad: () => setLoading(false),
            onError: () => setLoading(false),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Box, { children: renderFallback() })
          }
        )
      ]
    }
  );
}
//# sourceMappingURL=index.js.map