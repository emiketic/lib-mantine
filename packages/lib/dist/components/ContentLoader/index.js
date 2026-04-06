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
var ContentLoader_exports = {};
__export(ContentLoader_exports, {
  default: () => ContentLoader_default
});
module.exports = __toCommonJS(ContentLoader_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_core = require("@mantine/core");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Stack, { gap: "sm", px: "5rem", py: "md", ...props, children: [
    withCircle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Skeleton, { height: 70, circle: true, mb: "xl" }) : null,
    Array.from({ length: numberOfBarGroups }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
      Array.from({ length: Math.ceil(numberOfBars / numberOfBarGroups) }).map((_2, index2) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Skeleton, { height: barHeight, radius: "xl" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Skeleton, { height: barHeight, mt: barSpacing, radius: "xl" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Skeleton, { height: barHeight, mt: barSpacing, width: "70%", radius: "xl" })
      ] }, index2)),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Space, { h: barGroupSpacing })
    ] }, index))
  ] });
}
var ContentLoader_default = ContentLoader;
//# sourceMappingURL=index.js.map