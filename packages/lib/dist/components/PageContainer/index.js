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
var PageContainer_exports = {};
__export(PageContainer_exports, {
  default: () => PageContainer_default
});
module.exports = __toCommonJS(PageContainer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_core = require("@mantine/core");
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
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Title, { order: 2, ...titleProps, children: title });
    }
    return null;
  }
  function getHeader() {
    if (header) {
      return header;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Group, { justify: "space-between", w: "100%", ...headerProps, children: [
      getTitle(),
      rightSection
    ] });
  }
  function getContent() {
    if (fullPage) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Box, { ...contentProps, children });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Stack, { gap: "xl", ...outerContentProps, children: [
      getHeader(),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Stack, { px: "xl", py: "lg", h: "100%", w: "100%", ...contentProps, children })
    ] });
  }
  if (withContentScroll) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.ScrollArea, { h: "100vh", p: 0, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Container, { fluid: true, children: getContent() }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Container, { p: 0, w: "100%", fluid: true, children: getContent() });
}
var PageContainer_default = PageContainer;
//# sourceMappingURL=index.js.map