import { jsx } from "react/jsx-runtime";
import { Alert, Center } from "@mantine/core";
function NoData({ title, children, alertProps, ...props }) {
  return /* @__PURE__ */ jsx(Center, { h: "100%", ...props, children: /* @__PURE__ */ jsx(Alert, { p: "3rem", title: title ?? "No data", ...alertProps, children: /* @__PURE__ */ jsx(Center, { children }) }) });
}
var NoData_default = NoData;
export {
  NoData_default as default
};
//# sourceMappingURL=index.mjs.map