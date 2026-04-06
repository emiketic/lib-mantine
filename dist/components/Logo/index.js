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
var Logo_exports = {};
__export(Logo_exports, {
  default: () => Logo_default
});
module.exports = __toCommonJS(Logo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var import_core = require("@mantine/core");
var import_colors = require("../../utils/colors");
var import_icons_react = require("@tabler/icons-react");
function Logo({ withColorPair = true, ...props }) {
  const [logoColorPair, setLogoColorPair] = (0, import_react.useState)({
    dominant: "#000000",
    background: "#ffffff"
  });
  (0, import_react.useEffect)(() => {
    let isMounted = true;
    if (props.src && withColorPair) {
      (0, import_colors.getDominantColorFromImageUrl)(props.src).then(({ dominant, background }) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_core.Avatar,
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.ThemeIcon, { variant: "transparent", size: "5rem", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_icons_react.IconBuildingSkyscraper, { size: 48 * 1.5, stroke: 1 }) })
    }
  );
}
var Logo_default = Logo;
//# sourceMappingURL=index.js.map