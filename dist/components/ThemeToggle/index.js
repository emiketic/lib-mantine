"use strict";
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
var ThemeToggle_exports = {};
__export(ThemeToggle_exports, {
  default: () => ThemeToggle_default
});
module.exports = __toCommonJS(ThemeToggle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_core = require("@mantine/core");
var import_icons_react = require("@tabler/icons-react");
var import_ClientOnly = __toESM(require("../ClientOnly"));
function ThemeToggleInner({ ...props }) {
  const { setColorScheme } = (0, import_core.useMantineColorScheme)();
  const computedColorScheme = (0, import_core.useComputedColorScheme)("light", { getInitialValueInEffect: true });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_core.Tooltip,
    {
      label: computedColorScheme === "light" ? "Switch to dark mode" : "Switch to light mode",
      position: "bottom",
      withinPortal: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_core.Switch,
        {
          styles: { track: { cursor: "pointer" } },
          defaultChecked: computedColorScheme === "dark",
          onChange: () => setColorScheme(computedColorScheme === "light" ? "dark" : "light"),
          onLabel: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.ThemeIcon, { size: props.size ?? "sm", variant: "transparent", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_icons_react.IconMoon, {}) }),
          offLabel: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.ThemeIcon, { size: props.size ?? "sm", color: "yellow", variant: "transparent", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_icons_react.IconSun, {}) }),
          color: "dark",
          size: "md",
          ...props
        }
      )
    }
  );
}
function ThemeToggle(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ClientOnly.default, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggleInner, { ...props }) });
}
var ThemeToggle_default = ThemeToggle;
//# sourceMappingURL=index.js.map