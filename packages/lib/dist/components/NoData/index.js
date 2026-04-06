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
var NoData_exports = {};
__export(NoData_exports, {
  default: () => NoData_default
});
module.exports = __toCommonJS(NoData_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_core = require("@mantine/core");
function NoData({ title, children, alertProps, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Center, { h: "100%", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Alert, { p: "3rem", title: title ?? "No data", ...alertProps, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Center, { children }) }) });
}
var NoData_default = NoData;
//# sourceMappingURL=index.js.map