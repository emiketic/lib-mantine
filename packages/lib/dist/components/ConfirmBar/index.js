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
var ConfirmBar_exports = {};
__export(ConfirmBar_exports, {
  default: () => ConfirmBar_default
});
module.exports = __toCommonJS(ConfirmBar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_core = require("@mantine/core");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Box, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Group, { h: "100%", justify: "flex-end", align: "center", children: [
    withCancel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Button, { onClick: () => onCancel(), variant: "subtle", children: labelProps?.cancel ?? "Cancel" }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_core.Button,
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
//# sourceMappingURL=index.js.map